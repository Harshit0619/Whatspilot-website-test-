import { featuresData, type Feature } from '@/app/features/feature-data';
import { getAllPosts, type BlogPost } from '@/lib/blog';
import { getLocationPublicSlugs } from '@/lib/locations';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.whatspilot.online';
  const lastmodToday = new Date().toISOString().slice(0, 10);

  const toLastmod = (value: string) => {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      return lastmodToday;
    }

    return parsed.toISOString().slice(0, 10);
  };

  // Static routes with built-in loc and lastmod
  const staticRoutes = [
    { loc: `${baseUrl}/`, priority: 1.0, changefreq: 'daily', lastmod: lastmodToday },
    { loc: `${baseUrl}/features`, priority: 0.8, changefreq: 'weekly', lastmod: lastmodToday },
    { loc: `${baseUrl}/pricing`, priority: 0.8, changefreq: 'weekly', lastmod: lastmodToday },
    { loc: `${baseUrl}/contact`, priority: 0.8, changefreq: 'weekly', lastmod: lastmodToday },
    { loc: `${baseUrl}/careers`, priority: 0.8, changefreq: 'weekly', lastmod: lastmodToday },
    { loc: `${baseUrl}/blog`, priority: 0.8, changefreq: 'weekly', lastmod: lastmodToday },
    { loc: `${baseUrl}/locations`, priority: 0.8, changefreq: 'weekly', lastmod: lastmodToday },
    { loc: `${baseUrl}/privacy-policy`, priority: 0.8, changefreq: 'weekly', lastmod: lastmodToday },
    { loc: `${baseUrl}/terms-of-service`, priority: 0.8, changefreq: 'weekly', lastmod: lastmodToday },
    { loc: `${baseUrl}/refund`, priority: 0.8, changefreq: 'weekly', lastmod: lastmodToday },
    { loc: `${baseUrl}/warmup-guidelines`, priority: 0.8, changefreq: 'weekly', lastmod: lastmodToday },
    { loc: `${baseUrl}/llms.txt`, priority: 0.3, changefreq: 'monthly', lastmod: lastmodToday },
  ];

  // Feature pages from feature-data.ts
  const featureRoutes: Array<{ loc: string; lastmod: string; priority: number; changefreq: string }> =
    featuresData.map((feature: Feature) => ({
      loc: `${baseUrl}/features/${feature.slug}`,
      lastmod: lastmodToday,
      priority: 0.8,
      changefreq: 'weekly',
    }));

  // Blog posts from markdown files
  const allPosts: BlogPost[] = getAllPosts();
  const blogRoutes = allPosts.map((post: BlogPost) => ({
    loc: `${baseUrl}/blog/${post.slug}`,
    lastmod: toLastmod(post.date),
    priority: 0.8,
    changefreq: 'weekly',
  }));


  const locationRoutes = getLocationPublicSlugs('all').map((slug) => ({
    loc: `${baseUrl}/services/${slug}`,
    lastmod: lastmodToday,
    priority: 0.7,
    changefreq: 'monthly',
  }));

  // Combine all routes
  const allRoutes = [
    ...staticRoutes,
    ...featureRoutes,
    ...blogRoutes,
    ...locationRoutes,
  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.w3.org/schemas/sitemap/0.9/sitemap.xsd">
${allRoutes.map(route => `  <url>
    <loc>${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(2)}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
