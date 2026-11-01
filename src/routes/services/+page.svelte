<script lang="ts">
	import { resolve } from '$app/paths';
	import { site, services } from '#lib/site.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Section from '#lib/components/Section.svelte';
	import Image from '#lib/components/Image.svelte';
</script>

<Seo
	title="Services"
	description="Individual and group music therapy sessions from {site.name}, serving the Chicagoland area."
/>

<!-- TODO: services intro copy -->
<Hero
	title="Services"
	subtitle="Individualized music therapy for clients, families, and organizations across Chicagoland."
	image={null}
/>

{#each services as service, i (service.title)}
	<Section tone={i % 2 ? 'muted' : 'default'}>
		<div class="grid-2">
			<div class:flip={i % 2}>
				<Image alt={service.title} label="{service.title} image placeholder" />
			</div>
			<div>
				<h2>{service.title}</h2>
				<p>{service.summary}</p>
				<ul>
					{#each service.details as detail (detail)}
						<li>{detail}</li>
					{/each}
				</ul>
			</div>
		</div>
	</Section>
{/each}

<Section>
	<h2>Rates &amp; scheduling</h2>
	<!-- TODO: pricing, insurance/payment info, session lengths, cancellation policy -->
	<p>
		Placeholder: session lengths, rates or “contact for pricing”, accepted payment methods, and
		scheduling details.
	</p>
	<p>Serving: {site.serviceArea.join(', ')}.</p>
	<a class="button" href={resolve('/contact')}>Request a consultation</a>
</Section>

<style>
	@media (min-width: 48rem) {
		.flip {
			order: 2;
		}
	}
</style>
