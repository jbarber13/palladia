<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
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
