<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Section from '#lib/components/Section.svelte';
	import Logo from '#lib/components/Logo.svelte';
</script>

<svelte:head>
	<title>Page not found</title>
</svelte:head>

<Section>
	<div class="center">
		<div class="logo"><Logo size={160} alt="" loading="eager" /></div>
		<h1>{page.status === 404 ? 'Page Not Found' : 'Something Went Wrong'}</h1>
		<p>Sorry, we couldn’t find what you were looking for.</p>
		<a class="button" href={resolve('/')}>Back to home</a>
	</div>
</Section>

<style>
	.center {
		text-align: center;
	}
	.logo {
		display: flex;
		justify-content: center;
		margin-bottom: var(--space-3);
	}
</style>
