<!-- Per-page <title> and meta description. -->
<script lang="ts">
	import { site } from '#lib/site.ts';

	type Props = { title?: string; description?: string };
	let { title, description = site.description }: Props = $props();

	const fullTitle = $derived(title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<!-- TODO: add og:image once a social share image exists -->
</svelte:head>
