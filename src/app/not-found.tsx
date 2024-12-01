import Image from 'next/image';

export default function NotFound() {
  return (
    <>
      <h1 className="text-[#242424] text-[19px] font-semibold border-b-[1px] pb-4">
        Not Found
      </h1>
      <div className="h-[160px] flex flex-col items-center justify-center">
        <Image width={104} height={104} alt="" src={'/close-circle.png'} />
        <h2 className="text-lg mt-4 font-medium">Symbol not found!</h2>
      </div>
    </>
  );
}
