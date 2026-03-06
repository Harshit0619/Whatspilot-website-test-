export const dynamic = 'force-static';

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Sitemap location
Sitemap: https://www.whatspilot.online/sitemap.xml
`;

  return new Response(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
