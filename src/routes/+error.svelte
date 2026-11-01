<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Section from '#lib/components/Section.svelte';
</script>

<svelte:head>
	<title>Page not found</title>
</svelte:head>

<Section>
	<div class="center">
		<h1>{page.status === 404 ? 'Page not found' : 'Something went wrong'}</h1>
		<p>Sorry, we couldn’t find what you were looking for.</p>
		<a class="button" href={resolve('/')}>Back to home</a>
	</div>
</Section>

<style>
	.center {
		text-align: center;
	}
</style>
