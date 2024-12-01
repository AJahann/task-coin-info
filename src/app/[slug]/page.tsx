import Image from 'next/image';
import { notFound } from 'next/navigation';

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/';

const CoinPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const response = await fetch(`${BASE_URL}${slug}`);
  if (!response.ok) {
    notFound();
  }

  const coinData = await response.json();

  const { name, symbol, image, market_data, description } = coinData;

  return (
    <div className="p-4">
      <h1 className="text-[#242424] text-[19px] font-semibold border-b-[1px] pb-4">
        {name}
      </h1>
      <div className="my-4 flex justify-center">
        <Image width={100} height={100} src={image?.large} alt={name} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="text-base font-normal">Name</p>
          <h2 className="text-base font-medium">{name}</h2>
        </div>
        <div className="flex justify-between">
          <p className="text-base font-normal">Symbol</p>
          <h2 className="text-base font-medium">{symbol.toUpperCase()}</h2>
        </div>
        <div className="flex justify-between">
          <p className="text-base font-normal">Price</p>
          <h2 className="text-base font-medium">
            ${market_data?.current_price?.usd?.toLocaleString() || 'N/A'}
          </h2>
        </div>
        <div className="flex flex-col">
          <p className="text-base font-normal">Description</p>
          <div
            className="text-sm text-gray-600"
            dangerouslySetInnerHTML={{
              __html:
                description?.en?.slice(0, 200) || 'No description available.',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
