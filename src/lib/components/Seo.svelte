<!-- Per-page <title>, meta description, and canonical URL. -->
<script lang="ts">
	import { page } from '$app/state';
	import { site } from '#lib/site.ts';

	type Props = { title?: string; description?: string };
	let { title, description = site.description }: Props = $props();

	const fullTitle = $derived(title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`);
	// Canonical always points at the production domain, even when served from a preview URL.
	const canonical = $derived(`${site.url}${page.route.id === '/' ? '/' : page.route.id}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:type" content="website" />
	<!-- TODO: add og:image once a social share image exists -->
</svelte:head>
