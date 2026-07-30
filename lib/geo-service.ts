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

    // 1. Priority 1: Cloudflare Connecting IP (The absolute true client IP behind Cloudflare proxy)
    const cfConnectingIp = headersList.get('cf-connecting-ip');
    const xRealIp = headersList.get('x-real-ip');
    const xForwardedFor = headersList.get('x-forwarded-for');

    if (cfConnectingIp && cfConnectingIp.trim()) {
      detectedIp = cfConnectingIp.trim();
    } else if (xRealIp && xRealIp.trim()) {
      detectedIp = xRealIp.trim();
    } else if (xForwardedFor && xForwardedFor.trim()) {
      detectedIp = xForwardedFor.split(',')[0].trim();
    }

    // 2. Priority 2: Vercel GeoIP Headers
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

    // 3. Priority 3: Cloudflare GeoIP Headers
    const cfCity = headersList.get('cf-ipcity');
    const cfRegion = headersList.get('cf-region');
    const cfCountry = headersList.get('cf-ipcountry');

    if (!city && cfCity) city = decodeURIComponent(cfCity);
    if (!region && cfRegion) region = decodeURIComponent(cfRegion);
    if (cfCountry) country = cfCountry;

    // 4. IP API Lookup if city/region missing or if IP lookup is needed
    const isLocalOrProxy = !detectedIp || detectedIp === '127.0.0.1' || detectedIp === '::1' || detectedIp.startsWith('192.168.') || detectedIp.startsWith('10.') || detectedIp.startsWith('104.');
    
    const apiUrl = (isLocalOrProxy || !detectedIp) 
      ? 'http://ip-api.com/json/' 
      : `http://ip-api.com/json/${detectedIp}`;

    try {
      const res = await fetch(apiUrl, { cache: 'no-store' });
      if (res.ok) {
        const geoData = await res.json();
        if (geoData.status === 'success') {
          // If we got real user IP or if headers were proxy, update with ip-api.com location
          if (!city || city === 'Buenos Aires' || isLocalOrProxy) {
            if (geoData.city) city = geoData.city;
            if (geoData.regionName) region = geoData.regionName;
            if (geoData.country) country = geoData.country;
          }
          if (geoData.isp) isp = geoData.isp;
          if (geoData.query && (isLocalOrProxy || !detectedIp)) {
            detectedIp = geoData.query;
          }
        }
      }
    } catch (err) {
      console.warn('[detectGeoAndIP] External IP lookup error:', err);
    }

  } catch (error) {
    console.error('[detectGeoAndIP] Header error:', error);
  }

  // Fallback defaults if still unresolved
  if (!city || city === 'Buenos Aires') {
    city = 'Temuco';
    region = 'La Araucanía';
    country = 'Chile';
  }
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
