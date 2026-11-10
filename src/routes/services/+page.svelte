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

<Section tone="muted">
	<div id="who-we-serve">
		<h2>Who Do We Serve?</h2>
		<div class="grid-2 who">
			<div>
				<h3>Populations</h3>
				<p>We serve individuals of all ages and can provide support for areas of need such as:</p>
				<ul>
					<li>Alzheimer’s/Dementia</li>
					<li>Traumatic Brain Injuries &amp; Other Neurological Conditions</li>
					<li>Stroke Recovery</li>
					<li>Intellectual/Developmental Disabilities</li>
					<li>Behavioral Issues</li>
					<li>Mental Health &amp; Emotional Well-Being</li>
					<li>Mobility &amp; Physical Challenges</li>
					<li>Speech &amp; Language Challenges</li>
					<li>And More!</li>
				</ul>
			</div>
			<div>
				<h3>Settings</h3>
				<ul>
					<li>
						Senior Living Communities (memory care, independent living, skilled nursing, etc.)
					</li>
					<li>K-12 Schools</li>
					<li>Day Programs</li>
					<li>Community Centers</li>
					<li>Mental Health Facilities</li>
					<li>Daycare Facilities</li>
					<li>Hospitals</li>
					<li>In-Home</li>
					<li>And More!</li>
				</ul>
			</div>
		</div>
	</div>
</Section>

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
	.who {
		align-items: start;
	}
</style>
