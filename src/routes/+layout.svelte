<script lang="ts">
	import '../app.css';
	import favicon from '#assets/favicon.png';
	import { asset } from '$app/paths';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href={favicon} />
	<link rel="apple-touch-icon" href={asset('apple-touch-icon.png')} />
	<meta name="theme-color" content="#e9f7f1" />
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>
<Header />
<main id="main">
	{@render children()}
</main>
<Footer />

<style>
	.skip-link {
		position: absolute;
		left: -999px;
		top: 0;
		background: var(--color-surface);
		padding: var(--space-1) var(--space-2);
		z-index: 100;
	}
	.skip-link:focus {
		left: var(--space-2);
	}
</style>
