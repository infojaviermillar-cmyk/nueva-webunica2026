import { headers } from 'next/headers';

export interface GeoResult {
  ip: string;
  city: string;
  region: string;
  country: string;
  isp?: string;
  fullLocationString: string;
}

export async function detectGeoAndIP(): Promise<GeoResult> {
  let detectedIp = '';
  let city = '';
  let region = '';
  let country = 'Chile';
  let isp = '';

  try {
    const headersList = await headers();

    // 1. Extract IP from request headers
    const forwardedFor = headersList.get('x-forwarded-for');
    const realIp = headersList.get('x-forwarded-host') || headersList.get('x-real-ip');
    if (forwardedFor) {
      detectedIp = forwardedFor.split(',')[0].trim();
    } else if (realIp) {
      detectedIp = realIp.trim();
    }

    // 2. Extract Vercel GeoIP Headers if available
    const vercelCity = headersList.get('x-vercel-ip-city');
    const vercelRegion = headersList.get('x-vercel-ip-country-region');
    const vercelCountry = headersList.get('x-vercel-ip-country');

    if (vercelCity) {
      city = decodeURIComponent(vercelCity);
    }
    if (vercelRegion) {
      region = decodeURIComponent(vercelRegion);
    }
    if (vercelCountry) {
      country = vercelCountry;
    }

    // 3. Cloudflare GeoIP Headers fallback
    const cfCity = headersList.get('cf-ipcity');
    const cfRegion = headersList.get('cf-region');
    const cfCountry = headersList.get('cf-ipcountry');

    if (!city && cfCity) city = cfCity;
    if (!region && cfRegion) region = cfRegion;
    if (cfCountry) country = cfCountry;

    // 4. IP API lookup if city is still missing or IP is local/missing
    const isLocalIp = !detectedIp || detectedIp === '127.0.0.1' || detectedIp === '::1' || detectedIp.startsWith('192.168.') || detectedIp.startsWith('10.');
    
    // Query external IP API if city is missing OR IP is local
    const apiUrl = isLocalIp ? 'http://ip-api.com/json/' : `http://ip-api.com/json/${detectedIp}`;
    
    try {
      const res = await fetch(apiUrl, { cache: 'no-store' });
      if (res.ok) {
        const geoData = await res.json();
        if (geoData.status === 'success') {
          if (!city && geoData.city) city = geoData.city;
          if (!region && geoData.regionName) region = geoData.regionName;
          if (geoData.country) country = geoData.country;
          if (geoData.isp) isp = geoData.isp;
          if (isLocalIp && geoData.query) detectedIp = geoData.query;
        }
      }
    } catch (err) {
      console.warn('[detectGeoAndIP] External IP lookup error:', err);
    }

  } catch (error) {
    console.error('[detectGeoAndIP] Header error:', error);
  }

  // Fallback defaults
  if (!city) city = 'Santiago';
  if (!region) region = 'Región Metropolitana';
  if (!detectedIp) detectedIp = 'IP no detectada';

  const fullLocationString = `${city}${region ? `, ${region}` : ''}${country ? ` (${country})` : ''}`;

  return {
    ip: detectedIp,
    city,
    region,
    country,
    isp,
    fullLocationString
  };
}

// Backward compatibility helper
export async function detectLocationFromIP(): Promise<string> {
  const result = await detectGeoAndIP();
  return result.fullLocationString;
}
