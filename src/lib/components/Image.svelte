<!--
	Image. Renders nothing when there is no `src`, so pages stay clean until photos exist.
	Put files in static/images/ and pass src={asset('images/photo.jpg')}
	(import { asset } from '$app/paths').
-->
<script lang="ts">
	type Props = {
		src?: string;
		alt: string;
		/** CSS aspect-ratio, e.g. '4 / 3', '1 / 1', '16 / 9' */
		ratio?: string;
		/** 'cover' crops to fill (photos); 'contain' shows the whole image (logos) */
		fit?: 'cover' | 'contain';
		/** Use 'eager' for images visible on page load (e.g. the hero) */
		loading?: 'lazy' | 'eager';
	};

	let { src, alt, ratio = '4 / 3', fit = 'cover', loading = 'lazy' }: Props = $props();
</script>

{#if src}
	<img
		{src}
		{alt}
		style:aspect-ratio={ratio}
		style:object-fit={fit}
		class:contain={fit === 'contain'}
		{loading}
	/>
{/if}

<style>
	img {
		width: 100%;
		border-radius: var(--radius);
		object-fit: cover;
	}
	.contain {
		border-radius: 0;
	}
</style>
