import { site } from '#lib/site.ts';
import { nav } from '#lib/nav.ts';

export const prerender = true;

const paths = [...nav.map((n) => n.href), '/privacy'];

export function GET() {
	const urls = paths
		.map((p) => `\t<url><loc>${site.url}${p === '/' ? '/' : p}</loc></url>`)
		.join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
