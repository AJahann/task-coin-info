import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const lngInCookies = cookies().get('locale')?.value || 'en';

  return {
    locale: lngInCookies,
    messages: (await import(`../../messages/${lngInCookies}.json`)).default,
  };
});
