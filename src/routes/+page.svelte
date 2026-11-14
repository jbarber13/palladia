<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { site, services } from '#lib/site.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Section from '#lib/components/Section.svelte';
	import Image from '#lib/components/Image.svelte';
	import logo from '#assets/logo-640.webp';
	import Logo from '#lib/components/Logo.svelte';

	const benefits = [
		{
			emoji: '💚',
			title: 'Overall Health & Well-Being',
			back: 'Singing, playing instruments, and guided listening lower blood pressure, boost immunity, and promote holistic wellness.'
		},
		{
			emoji: '🧠',
			title: 'Memory Recall',
			back: 'Familiar songs and rhythmic cues activate brain pathways to unlock memories and strengthen recall.'
		},
		{
			emoji: '💡',
			title: 'Mental Acuity',
			back: 'Learning rhythms, improvising, and lyric analysis sharpen focus, attention, and cognitive processing speed.'
		},
		{
			emoji: '🌊',
			title: 'Emotional Regulation & Mood Support',
			breakAfter: 'Emotional Regulation',
			back: 'Personalized playlists, songwriting, and lyric reflection help lift your mood and safely navigate overwhelming feelings.'
		},
		{
			emoji: '🛑',
			title: 'Impulse Control',
			back: 'Stop-and-play rhythm games strengthen impulse control, cognitive flexibility, and mindful decision-making.'
		},
		{
			emoji: '🎵',
			title: 'Creative Self-Expression',
			back: "Songwriting and instrument play offer a safe, judgment-free outlet when words alone aren't enough."
		},
		{
			emoji: '💪',
			title: 'Empowerment',
			back: 'Trying new instruments, leading rhythms, and stepping outside your comfort zone build confidence and autonomy.'
		},
		{
			emoji: '🖐️',
			title: 'Fine & Gross Motor Function',
			back: 'Instrument play, finger movement games, and scarf dancing builds coordination, balance, grip strength, and physical mobility.'
		},
		{
			emoji: '🗣️',
			title: 'Speech Recovery',
			back: 'Singing can bypass damaged language centers by activating shared musical and speech pathways in the brain.'
		},
		{
			emoji: '🎤',
			title: 'Vocal Strength',
			back: 'Targeted breathing exercises and vocal warmups strengthen respiratory muscles, vocal projection, and articulation.'
		},
		{
			emoji: '🤝',
			title: 'Social Connection',
			back: 'Group music making fosters teamwork, empathy, and welcoming community spaces where everyone feels genuinely heard.'
		},
		{
			emoji: '🌈',
			title: 'Reduced Isolation',
			back: 'Regular weekly sessions offer consistent human connection, meaningful engagement, and relief from loneliness.'
		},
		{
			emoji: '🍃',
			title: 'Stress & Anxiety Relief',
			back: 'Guided relaxation and drumming quiet racing thoughts, release physical tension, and reset your nervous system.'
		},
		{
			emoji: '🩹',
			title: 'Pain Management',
			back: 'Music-assisted relaxation and rhythmic entrainment distract the brain from pain signals and ease physical tension.'
		},
		{
			emoji: '🎉',
			title: 'Have Fun!',
			back: 'Engaging music interventions spark joy while actively moving you toward meaningful therapeutic goals.'
		},
		{
			emoji: '✨',
			title: 'And More!',
			back: 'These are just some of the many benefits of music therapy! Contact us to explore what’s possible!'
		}
	];

	// Each benefits card flips over to show how music therapy helps. Every card keeps its own state, keyed by title.
	let flipped = $state<Record<string, boolean>>({});
	// True only while a mouse or pen is over that card (touch never sets it, so taps don't stick).
	let hovering = $state<Record<string, boolean>>({});
	function trackHover(event: PointerEvent, title: string) {
		hovering[title] = event.pointerType === 'mouse' || event.pointerType === 'pen';
	}

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
	<h2 class="benefits-heading">What Are the Benefits of Music Therapy?</h2>
	<p class="benefits-intro">
		This section is interactive! Tap or click on the different cards to see how music therapy can
		help!
	</p>
	<ul class="benefits">
		{#each benefits as card (card.title)}
			<li
				class="card flip-card"
				class:flipped={flipped[card.title]}
				class:hovering={hovering[card.title]}
				onpointerenter={(event) => trackHover(event, card.title)}
				onpointermove={(event) => trackHover(event, card.title)}
				onpointerleave={() => (hovering[card.title] = false)}
				onpointercancel={() => (hovering[card.title] = false)}
			>
				<button
					type="button"
					class="flip"
					aria-expanded={!!flipped[card.title]}
					onclick={() => (flipped[card.title] = !flipped[card.title])}
				>
					<span class="flip-inner">
						<span class="face front">
							<span class="emoji" aria-hidden="true">{card.emoji}</span><span
								class="title"
								class:two-line={card.breakAfter}
								>{#if card.breakAfter}{card.breakAfter}{' '}<br />{card.title.slice(
										card.breakAfter.length + 1
									)}{:else}{card.title}{/if}</span
							>
						</span>
						<span class="face back" aria-hidden={!flipped[card.title]}>{card.back}</span>
					</span>
				</button>
			</li>
		{/each}
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
			<h3><a href={resolve('/services') + '#who-we-serve'}>Who Do We Serve?</a></h3>
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
		margin-bottom: var(--space-1);
	}
	.benefits-intro {
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
	/* Title with a forced line break: a bit smaller on phones so "Emotional Regulation" fits on one line. */
	.benefits .title.two-line {
		font-size: 0.7rem;
		margin-inline: -0.4rem;
	}
	@media (min-width: 40rem) {
		.benefits-heading {
			margin-top: var(--space-3);
			margin-bottom: var(--space-1);
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
		.benefits .title.two-line {
			font-size: inherit;
			margin-inline: 0;
		}
	}
	@media (min-width: 64rem) {
		.benefits {
			grid-template-columns: repeat(4, 1fr);
		}
		.benefits li {
			font-size: 1.1rem;
		}
		.benefits .title.two-line {
			font-size: 1rem;
		}
	}
	/* Flip cards. Faces share one grid cell so the card is as tall as the longer face, and
	   cards in the same row stretch to the tallest one. */
	.benefits li.flip-card {
		display: grid;
		padding: 0;
		position: relative;
	}
	.benefits li.flip-card.hovering {
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
