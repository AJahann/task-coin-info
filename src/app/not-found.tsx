import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <>
      <h1 className="text-[#242424] text-[19px] font-semibold border-b-[1px] pb-4">
        {t('title')}
      </h1>
      <div className="h-[160px] flex flex-col items-center justify-center">
        <Image width={104} height={104} alt="" src={'/close-circle.png'} />
        <h2 className="text-lg mt-4 font-medium">{t('message')}</h2>
      </div>
    </>
  );
}
