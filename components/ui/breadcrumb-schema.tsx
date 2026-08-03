/**
 * BreadcrumbSchema — Inserts a BreadcrumbList JSON-LD script tag.
 * Use this component in any page to add structured breadcrumb data
 * for Google rich results and AI engine context.
 *
 * Usage:
 *   <BreadcrumbSchema items={[
 *     { name: 'Inicio', url: 'https://webunica.cl' },
 *     { name: 'Shopify', url: 'https://webunica.cl/desarrollo-tiendas-shopify-chile' },
 *   ]} />
 */

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
