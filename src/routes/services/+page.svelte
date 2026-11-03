<script lang="ts">
	import { resolve } from '$app/paths';
	import { site, services } from '#lib/site.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Section from '#lib/components/Section.svelte';
</script>

<Seo
	title="Services"
	description="Individual and group music therapy sessions from {site.name}, serving Lake County, IL & Kenosha County, WI."
/>

<!-- TODO: services intro copy -->
<Hero
	title="Services"
	subtitle="Individualized music therapy for clients, families, and organizations across Lake County, IL & Kenosha County, WI."
	image={null}
/>

{#each services as service, i (service.title)}
	<Section tone={i % 2 ? 'muted' : 'default'}>
		<!-- TODO: add a photo for each service (see README → Images) -->
		<div class="service">
			<h2>{service.title}</h2>
			<p>{service.summary}</p>
			<ul>
				{#each service.details as detail (detail)}
					<li>{detail}</li>
				{/each}
			</ul>
		</div>
	</Section>
{/each}

<Section>
	<h2>Rates &amp; scheduling</h2>
	<dl class="facts">
		<dt>Session length</dt>
		<dd>Based on each client’s needs; most sessions run 30–45 minutes.</dd>
		<dt>Rates</dt>
		<dd>
			Please <a href={resolve('/contact')}>get in touch</a> for pricing.
		</dd>
		<!-- TODO: payment methods / insurance, free consultation, cancellation policy -->
	</dl>
	<p>Serving: {site.serviceArea.join(' & ')}.</p>
	<a class="button" href={resolve('/contact')}>Request a consultation</a>
</Section>

<style>
	.facts {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: var(--space-1) var(--space-3);
		margin: 0 0 var(--space-3);
	}
	.facts dt {
		font-weight: 700;
	}
	.facts dd {
		margin: 0;
	}
	@media (max-width: 30rem) {
		.facts {
			grid-template-columns: 1fr;
		}
		.facts dd {
			margin-bottom: var(--space-1);
		}
	}
	.service {
		max-width: 46rem;
	}
</style>
