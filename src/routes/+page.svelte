<script lang="ts">
	import { resolve } from '$app/paths';
	import { site, services } from '#lib/site.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Section from '#lib/components/Section.svelte';
	import logo from '#assets/logo-640.webp';
	import Logo from '#lib/components/Logo.svelte';

	// Structured data so search engines understand this is a local business.
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: site.name,
		description: site.description,
		telephone: site.contact.phone,
		email: site.contact.email,
		address: {
			'@type': 'PostalAddress',
			addressLocality: site.contact.city,
			addressRegion: site.contact.region,
			addressCountry: 'US'
		},
		areaServed: site.serviceArea
	};
</script>

<Seo />

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<!-- TODO: final headline and intro copy -->
<Hero
	title="Music therapy that meets you where you are"
	subtitle="{site.name} provides individual and group music therapy sessions throughout the Chicagoland area."
	image={logo}
	imageAlt="{site.name} logo: an owl surrounded by musical notes"
	imageRatio="1 / 1"
	imageFit="contain"
>
	<!-- TODO: swap the logo for a hero photo once available (and drop imageRatio/imageFit) -->
	<a class="button" href={resolve('/contact')}>Schedule a consultation</a>
	<a class="button secondary" href={resolve('/services')}>Explore services</a>
</Hero>

<Section>
	<!-- TODO: add a headshot or session photo beside this text (see README → Images) -->
	<div class="intro">
		<div>
			<h2>What is music therapy?</h2>
			<!-- TODO: client to review the draft intro copy -->
			<p>
				Music therapy is the clinical, evidence-based use of music to help people reach
				individualized goals — emotional, cognitive, social, communicative, and physical — guided by
				a credentialed professional.
			</p>
			<p>
				Sessions are shaped around each person’s needs, strengths, and musical preferences, and may
				include singing, instrument playing, songwriting, improvisation, movement, and listening.
				{site.name} works with children, teens, and adults. No musical experience is needed to benefit.
			</p>
			<a href={resolve('/about')}>Meet {site.owner.name}, {site.owner.credentials} &rarr;</a>
		</div>
	</div>
</Section>

<Section tone="muted">
	<h2>Services</h2>
	<div class="services">
		{#each services as service (service.title)}
			<div class="card">
				<h3>{service.title}</h3>
				<p>{service.summary}</p>
				<a href={resolve('/services')}>Learn more &rarr;</a>
			</div>
		{/each}
	</div>
</Section>

<Section>
	<div class="cta">
		<div class="cta-logo"><Logo size={88} alt="" /></div>
		<h2>Ready to get started?</h2>
		<!-- TODO: CTA copy -->
		<p>Reach out for a free phone consultation to talk about goals and next steps.</p>
		<a class="button" href={resolve('/contact')}>Get in touch</a>
	</div>
</Section>

<style>
	.services {
		display: grid;
		gap: var(--space-3);
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
	}
	.intro {
		max-width: 46rem;
	}
	.cta-logo {
		display: flex;
		justify-content: center;
		margin-bottom: var(--space-2);
	}
	.cta {
		text-align: center;
		max-width: 40rem;
		margin-inline: auto;
	}
</style>
