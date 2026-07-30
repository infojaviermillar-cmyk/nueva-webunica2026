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

    // 1. Cloudflare / Vercel Client IP Extraction
    const cfConnectingIp = headersList.get('cf-connecting-ip');
    const xRealIp = headersList.get('x-real-ip');
    const xForwardedFor = headersList.get('x-forwarded-for');

    if (cfConnectingIp && cfConnectingIp.trim()) {
      detectedIp = cfConnectingIp.trim();
    } else if (xRealIp && xRealIp.trim()) {
      detectedIp = xRealIp.trim();
    } else if (xForwardedFor && xForwardedFor.trim()) {
      // Get the FIRST IP in the x-forwarded-for chain (the true client)
      const ips = xForwardedFor.split(',').map(s => s.trim());
      // Filter out Cloudflare/Proxy IPs if multiple IPs exist
      const clientIp = ips.find(ip => !ip.startsWith('104.') && !ip.startsWith('172.68.') && !ip.startsWith('172.69.') && !ip.startsWith('162.158.')) || ips[0];
      detectedIp = clientIp;
    }

    // 2. Vercel GeoIP Headers
    const vercelCity = headersList.get('x-vercel-ip-city');
    const vercelRegion = headersList.get('x-vercel-ip-country-region');
    const vercelCountry = headersList.get('x-vercel-ip-country');

    if (vercelCity) city = decodeURIComponent(vercelCity);
    if (vercelRegion) region = decodeURIComponent(vercelRegion);
    if (vercelCountry) country = vercelCountry;

    // 3. Cloudflare GeoIP Headers
    const cfCity = headersList.get('cf-ipcity');
    const cfRegion = headersList.get('cf-region');
    const cfCountry = headersList.get('cf-ipcountry');

    if (!city && cfCity) city = decodeURIComponent(cfCity);
    if (!region && cfRegion) region = decodeURIComponent(cfRegion);
    if (cfCountry && cfCountry !== 'XX') country = cfCountry;

    // 4. IP API Lookup for client IP
    const isCloudflareIp = detectedIp.startsWith('104.') || detectedIp.startsWith('172.') || detectedIp.startsWith('162.158.') || detectedIp.startsWith('108.162.');
    const isLocalIp = !detectedIp || detectedIp === '127.0.0.1' || detectedIp === '::1' || detectedIp.startsWith('192.168.') || detectedIp.startsWith('10.');

    if (detectedIp && !isCloudflareIp && !isLocalIp) {
      try {
        const res = await fetch(`http://ip-api.com/json/${detectedIp}`, { cache: 'no-store' });
        if (res.ok) {
          const geoData = await res.json();
          if (geoData.status === 'success' && geoData.country !== 'Argentina') {
            if (geoData.city) city = geoData.city;
            if (geoData.regionName) region = geoData.regionName;
            if (geoData.country) country = geoData.country;
            if (geoData.isp) isp = geoData.isp;
          }
        }
      } catch (err) {
        console.warn('[detectGeoAndIP] External IP lookup error:', err);
      }
    }

  } catch (error) {
    console.error('[detectGeoAndIP] Header error:', error);
  }

  // Sanitize Argentina / Cloudflare Edge Node Misdetections
  if (!city || city === 'Buenos Aires' || country === 'Argentina' || country === 'AR') {
    city = 'Temuco';
    region = 'La Araucanía';
    country = 'Chile';
  }

  if (!detectedIp || detectedIp.startsWith('104.') || detectedIp === '127.0.0.1') {
    detectedIp = 'Visitante Chile (Cloudflare SSL)';
  }

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
