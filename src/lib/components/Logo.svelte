<!--
	The circular Palladia logo. Picks the smallest file that stays sharp at the requested size.
	Pass alt="" when the logo sits next to visible text with the business name (purely decorative).
-->
<script lang="ts">
	import { site } from '#lib/site.ts';
	import small from '#assets/logo-160.webp';
	import large from '#assets/logo-640.webp';

	type Props = {
		/** Displayed width/height in px */
		size?: number;
		alt?: string;
		loading?: 'lazy' | 'eager';
	};

	let { size = 96, alt = `${site.name} logo`, loading = 'lazy' }: Props = $props();

	// 160px file covers up to ~80px on 2x screens
	const src = $derived(size <= 80 ? small : large);
</script>

<img {src} {alt} width={size} height={size} {loading} />

<style>
	img {
		display: block;
		border-radius: 50%;
		max-width: 100%;
		height: auto;
	}
</style>
