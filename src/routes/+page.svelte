<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { site, services } from '#lib/site.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Section from '#lib/components/Section.svelte';
	import Image from '#lib/components/Image.svelte';
	import logo from '#assets/logo-640.webp';
	import Logo from '#lib/components/Logo.svelte';

	// Trial: the first benefits card flips over to show how music therapy helps.
	let healthFlipped = $state(false);

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
	centered
>
	<!-- TODO: swap the logo for a hero photo once available (and drop imageRatio/imageFit) -->
	<a class="button" href={resolve('/contact')}>Request a Consultation</a>
	<a class="button secondary" href={resolve('/services')}>Explore Services</a>
</Hero>

<Section>
	<!-- TODO: add a headshot or session photo beside this text (see README → Images) -->
	<div class="grid-2">
		<Image
			src={asset('images/group-piano-session.jpg')}
			alt="Group of older adults singing and playing piano together during a music therapy session"
			ratio="4 / 3"
			fit="cover"
		/>
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
	<h2 class="benefits-heading">What Music Therapy Can Do For You!</h2>
	<ul class="benefits">
		<li class="card flip-card" class:flipped={healthFlipped}>
			<button
				type="button"
				class="flip"
				aria-expanded={healthFlipped}
				onclick={() => (healthFlipped = !healthFlipped)}
			>
				<span class="flip-inner">
					<span class="face front">
						<span class="emoji" aria-hidden="true">💚</span><span
							>Overall Health &amp; Well-Being</span
						>
					</span>
					<span class="face back" aria-hidden={!healthFlipped}>
						Singing, playing instruments, and guided listening lower blood pressure, boost immunity,
						and promote holistic wellness.
					</span>
				</span>
			</button>
		</li>
		<li class="card"><span class="emoji" aria-hidden="true">🧠</span><span>Memory Recall</span></li>
		<li class="card"><span class="emoji" aria-hidden="true">💡</span><span>Mental Acuity</span></li>
		<li class="card">
			<span class="emoji" aria-hidden="true">🌊</span><span>Emotional Regulation</span>
		</li>
		<li class="card"><span class="emoji" aria-hidden="true">😊</span><span>Mood Support</span></li>
		<li class="card">
			<span class="emoji" aria-hidden="true">🎨</span><span>Creative Self-Expression</span>
		</li>
		<li class="card"><span class="emoji" aria-hidden="true">💪</span><span>Empowerment</span></li>
		<li class="card">
			<span class="emoji" aria-hidden="true">🖐️</span><span>Fine &amp; Gross Motor Function</span>
		</li>
		<li class="card">
			<span class="emoji" aria-hidden="true">🗣️</span><span>Speech Recovery</span>
		</li>
		<li class="card">
			<span class="emoji" aria-hidden="true">🎤</span><span>Vocal Strength</span>
		</li>
		<li class="card">
			<span class="emoji" aria-hidden="true">🤝</span><span>Social Connection</span>
		</li>
		<li class="card">
			<span class="emoji" aria-hidden="true">🌈</span><span>Reduced Isolation</span>
		</li>
		<li class="card"><span class="emoji" aria-hidden="true">🧘</span><span>Stress Relief</span></li>
		<li class="card">
			<span class="emoji" aria-hidden="true">🍃</span><span>Anxiety Reduction</span>
		</li>
		<li class="card"><span class="emoji" aria-hidden="true">🎉</span><span>Have Fun!</span></li>
		<li class="card"><span class="emoji" aria-hidden="true">✨</span><span>And More!</span></li>
	</ul>
</Section>

<Section>
	<h2>Quick Links</h2>
	<div class="services">
		{#each services as service (service.title)}
			<div class="card">
				<h3><a href="{resolve('/services')}#{service.id}">{service.title}</a></h3>
			</div>
		{/each}
		<div class="card">
			<h3><a href={resolve('/services') + '#who-we-serve'}>Who We Serve</a></h3>
		</div>
		<div class="card">
			<h3><a href={resolve('/about') + '#meet-gwen'}>Meet Gwen!</a></h3>
		</div>
		<div class="card">
			<h3><a href={resolve('/faqs')}>FAQs</a></h3>
		</div>
		<div class="card">
			<h3>
				<a href="https://hsso.helcim.com/login/" target="_blank" rel="noopener noreferrer"
					>Helcim Payment Portal</a
				>
			</h3>
		</div>
		<div class="card">
			<h3>
				<a
					href="https://app.sessionshealth.com/users/sign_in"
					target="_blank"
					rel="noopener noreferrer">Sessions Health Patient Portal</a
				>
			</h3>
		</div>
	</div>
</Section>

<Section tone="tint">
	<div class="cta">
		<div class="cta-logo"><Logo size={88} alt="" /></div>
		<h2>Ready to Get Started?</h2>
		<!-- TODO: CTA copy -->
		<p>We'd love to learn more about your goals and needs!</p>
		<a class="button" href={resolve('/contact')}>Contact Palladia</a>
	</div>
</Section>

<style>
	.benefits-heading {
		margin-top: var(--space-3);
		margin-bottom: var(--space-3);
	}
	.benefits {
		list-style: none;
		margin: 0 0 var(--space-3);
		padding: 0;
		display: grid;
		gap: 0.75rem;
		grid-template-columns: repeat(2, 1fr);
	}
	.benefits li {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		align-items: center;
		justify-content: center;
		text-align: center;
		min-height: 5rem;
		padding: 0.6rem 0.75rem;
		border-top: 0.25rem solid var(--color-accent);
		font-family: var(--font-heading);
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.3;
		color: var(--color-heading);
		overflow-wrap: anywhere;
		hyphens: auto;
	}
	.benefits .emoji {
		font-size: 1.5rem;
		line-height: 1;
	}
	@media (min-width: 40rem) {
		.benefits-heading {
			margin-top: var(--space-3);
			margin-bottom: var(--space-3);
		}
		.benefits {
			margin-bottom: var(--space-3);
			gap: var(--space-2);
		}
		.benefits li {
			min-height: 6.5rem;
			padding: var(--space-2) var(--space-2);
			font-size: 1.15rem;
		}
		.benefits .emoji {
			font-size: 1.75rem;
		}
	}
	@media (min-width: 64rem) {
		.benefits {
			grid-template-columns: repeat(4, 1fr);
		}
		.benefits li {
			font-size: 1.1rem;
		}
	}
	/* Flip card (trial on the first benefits card). Faces share one grid cell so the card
	   is as tall as the longer face. */
	.benefits li.flip-card {
		display: block;
		padding: 0;
		position: relative;
	}
	.benefits li.flip-card:hover,
	.benefits li.flip-card:focus-within {
		background: var(--color-accent-soft);
	}
	.flip {
		display: grid;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		border: 0;
		background: none;
		color: inherit;
		font: inherit;
		line-height: inherit;
		text-align: inherit;
		cursor: pointer;
		border-radius: inherit;
		perspective: 60rem;
	}
	.flip:focus-visible {
		outline: 3px solid var(--color-accent);
		outline-offset: 2px;
	}
	.flip-inner {
		display: grid;
		grid-template: 1fr / 1fr;
	}
	.face {
		grid-area: 1 / 1;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		align-items: center;
		justify-content: center;
		min-height: 5rem;
		padding: 0.6rem 0.75rem;
	}
	.back {
		font-family: var(--font-body);
		font-size: 0.8rem;
		font-weight: 500;
		line-height: 1.35;
		color: var(--color-heading);
	}
	/* Default (and reduced motion): swap faces without spinning. */
	.back,
	.flipped .front {
		visibility: hidden;
	}
	.flipped .back {
		visibility: visible;
	}
	@media (prefers-reduced-motion: no-preference) {
		.benefits li.flip-card {
			transition: background-color 0.15s ease;
		}
		.flip-inner {
			transform-style: preserve-3d;
			transition: transform 0.6s ease;
		}
		.face,
		.flipped .front,
		.flipped .back {
			visibility: visible;
			backface-visibility: hidden;
		}
		.back {
			transform: rotateY(180deg);
		}
		.flipped .flip-inner {
			transform: rotateY(180deg);
		}
	}
	@media (min-width: 40rem) {
		.face {
			min-height: 6.5rem;
			padding: var(--space-2) var(--space-2);
		}
		.back {
			font-size: 0.9rem;
		}
	}
	.services {
		display: grid;
		gap: var(--space-3);
		grid-template-columns: 1fr;
	}
	@media (min-width: 40rem) {
		.services {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 64rem) {
		.services {
			grid-template-columns: repeat(4, 1fr);
		}
	}
	.services h3 {
		margin-bottom: 0;
		overflow-wrap: anywhere;
		text-align: center;
	}
	.services h3 a {
		color: var(--color-heading);
		text-decoration: none;
	}
	.services .card {
		position: relative;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: var(--space-2) var(--space-2);
	}
	/* Stretched link: the link's clickable area covers the whole card. */
	.services h3 a::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
	}
	.services h3 a:hover,
	.services .card:hover h3 a {
		color: var(--color-primary);
		text-decoration: underline;
	}
	.services .card:hover,
	.services .card:focus-within {
		background: var(--color-muted-bg);
		border-color: var(--color-accent-soft);
	}
	@media (prefers-reduced-motion: no-preference) {
		.services .card {
			transition:
				background-color 0.15s ease,
				border-color 0.15s ease;
		}
	}
	/* Show the keyboard focus ring around the whole card instead of just the title text. */
	.services h3 a:focus-visible {
		outline: none;
	}
	.services .card:has(a:focus-visible) {
		outline: 3px solid var(--color-accent);
		outline-offset: 2px;
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
