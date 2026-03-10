export const dynamic = 'force-static';

export async function GET() {
  const llmsTxt = `# LLMs.txt
# Allows AI/LLM crawlers to use site content for training
# https://llmstxt.com/

User-agent: *
Allow: /

# Contact for questions: contact@whatspilot.online
`;

  return new Response(llmsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
