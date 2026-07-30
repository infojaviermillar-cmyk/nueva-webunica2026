import { headers } from 'next/headers';

export async function detectLocationFromIP(): Promise<string> {
  try {
    const headersList = await headers();

    // 1. Vercel GeoIP Headers (100% Instant & Free on Vercel deployment)
    const vercelCity = headersList.get('x-vercel-ip-city');
    const vercelRegion = headersList.get('x-vercel-ip-country-region');
    const vercelCountry = headersList.get('x-vercel-ip-country');

    if (vercelCity) {
      const cityClean = decodeURIComponent(vercelCity);
      const regionClean = vercelRegion ? decodeURIComponent(vercelRegion) : '';
      return `${cityClean}${regionClean ? `, ${regionClean}` : ''}${vercelCountry ? ` (${vercelCountry})` : ''}`;
    }

    // 2. Cloudflare GeoIP Headers
    const cfCity = headersList.get('cf-ipcity');
    const cfRegion = headersList.get('cf-region');
    if (cfCity) {
      return `${cfCity}${cfRegion ? `, ${cfRegion}` : ''}`;
    }

    // 3. Fallback: External IP API lookup for non-Vercel or local dev testing
    const forwardedFor = headersList.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : headersList.get('x-real-ip');

    if (ip && ip !== '127.0.0.1' && ip !== '::1' && !ip.startsWith('192.168.') && !ip.startsWith('10.')) {
      const res = await fetch(`https://ipapi.co/${ip}/json/`, { next: { revalidate: 3600 } });
      if (res.ok) {
        const data = await res.json();
        if (data.city) {
          return `${data.city}${data.region ? `, ${data.region}` : ''}`;
        }
      }
    }
  } catch (error) {
    console.error('[detectLocationFromIP] Error:', error);
  }

  return 'Ubicación no especificada (Chile)';
}
