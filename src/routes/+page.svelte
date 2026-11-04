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
	title={'Music Therapy\nThat Meets You\nWhere You Are'}
	subtitle="Palladia Music Therapy offers individual and group sessions throughout Lake County, IL. We truly meet you where you are in every way, bringing therapy conveniently to your location and welcoming you just as you are."
	image={logo}
	imageAlt="{site.name} logo: an owl surrounded by musical notes"
	imageRatio="1 / 1"
	imageFit="contain"
>
	<!-- TODO: swap the logo for a hero photo once available (and drop imageRatio/imageFit) -->
	<a class="button" href={resolve('/contact')}>Schedule a Consultation</a>
	<a class="button secondary" href={resolve('/services')}>Explore Services</a>
</Hero>

<Section>
	<!-- TODO: add a headshot or session photo beside this text (see README → Images) -->
	<div class="intro">
		<div>
			<h2>What is Music Therapy?</h2>
			<!-- TODO: client to review the draft intro copy -->
			<p>
				Music therapy is the clinical, evidence-based use of music to help people reach
				individualized, non-musical goals guided by a Board Certified Music Therapist (MT-BC). These
				goals can be rooted in the emotional, cognitive, social, communicative, spiritual, and
				physical domains. Ongoing progress is documented by the music therapist to guide the
				clinical process, so that they may continuously adapt interventions and goals as clients
				grow. Interventions may include singing, instrument playing, songwriting, improvisation,
				movement, music listening, relaxation, and musical games.
			</p>
			<p>
				Music therapy is accessible to people of all ages and abilities, with no prior musical
				experience required. Because the music therapist tailors sessions to each person’s unique
				needs, strengths, and preferences, everyone can participate and benefit.
			</p>
			<p>
				Interested in how music therapy can support you, a loved one, or your organization?<br />
				<a href={resolve('/contact')}>Contact us today to learn more! &rarr;</a>
			</p>
		</div>
	</div>
</Section>

<Section tone="muted">
	<h2>Services</h2>
	<div class="services">
		{#each services as service (service.title)}
			<div class="card">
				<h3>{service.title}</h3>
				<p>{service.homeDescription ?? service.summary}</p>
				<a href="{resolve('/services')}#{service.id}">Learn more &rarr;</a>
			</div>
		{/each}
	</div>
</Section>

<Section>
	<div class="cta">
		<div class="cta-logo"><Logo size={88} alt="" /></div>
		<h2>Ready to Get Started?</h2>
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
