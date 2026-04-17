import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${site}sitemap-index.xml\n`);
};
