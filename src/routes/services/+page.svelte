<script lang="ts">
	import { resolve } from '$app/paths';
	import { site, services } from '#lib/site.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Section from '#lib/components/Section.svelte';
</script>

<Seo
	title="Services"
	description="Individual and group music therapy sessions from {site.name}, serving Lake County, IL."
/>

<!-- TODO: services intro copy -->
<Hero
	title="Services"
	subtitle="At Palladia Music Therapy, our services combine compassionate, clinical care with flexible musical experiences. We offer both private individual therapy and interactive group sessions designed to foster personal growth, communication, and connection. Each session adapts to the individual or group, meeting unique needs through a blend of structured techniques and creative exploration."
	image={null}
	wide
/>

{#each services as service, i (service.title)}
	<Section tone={i % 2 ? 'muted' : 'default'}>
		<!-- TODO: add a photo for each service (see README → Images) -->
		<div class="service" id={service.id}>
			<h2>{service.title}</h2>
			<p><strong>{service.summary}</strong></p>
			<ul>
				{#each service.details as detail (detail)}
					{@const split = detail.indexOf(': ')}
					<li>
						{#if split === -1}
							{detail}
						{:else}
							<strong>{detail.slice(0, split + 1)}</strong>{detail.slice(split + 1)}
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</Section>
{/each}

<Section>
	<h2>Rates &amp; Scheduling</h2>
	<p>
		Please contact us for custom quotes and scheduling options, as rates vary depending on your
		selected services.
	</p>
	<!-- TODO: payment methods / insurance, free consultation, cancellation policy -->
	<p>Serving: {site.serviceArea.join(', ')}.</p>
	<a class="button" href={resolve('/contact')}>Request a Consultation</a>
</Section>

<style>
	.service {
		max-width: 46rem;
	}
</style>
