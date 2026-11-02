<script lang="ts">
	import { resolve } from '$app/paths';
	import { site } from '#lib/site.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Section from '#lib/components/Section.svelte';
	import Image from '#lib/components/Image.svelte';
	import Logo from '#lib/components/Logo.svelte';
</script>

<Seo
	title="About"
	description="Learn about {site.owner.name}, {site.owner
		.credentials}, the music therapist behind {site.name}."
/>

<Hero title="About {site.shortName}" subtitle={site.tagline} image={null} />

<Section>
	<div class="grid-2 bio">
		<Image alt="Photo of {site.owner.name}" ratio="4 / 5" label="Headshot placeholder" />
		<div>
			<h2>{site.owner.name}, {site.owner.credentials}</h2>
			<p class="role">{site.owner.title}</p>
			<!-- TODO: bio copy -->
			<p>
				Placeholder bio. Introduce yourself, your background in music and therapy, and what led you
				to start {site.name}.
			</p>
			<p>
				Placeholder: describe your therapeutic approach, the populations you work with, and what a
				client or family can expect.
			</p>
		</div>
	</div>
</Section>

<Section tone="muted">
	<div class="grid-2 top">
		<div>
			<h2>Education &amp; credentials</h2>
			<h3>Education</h3>
			<ul>
				<li>Bachelor of Music Therapy, Radford University</li>
			</ul>
			<h3>Certification &amp; licensure</h3>
			<ul>
				<li>
					<strong>MT-BC</strong> — Music Therapist–Board Certified, a national credential from the Certification
					Board for Music Therapists (CBMT)
				</li>
				<li>
					<!-- TODO: confirm exact license title with client -->
					<strong>LPMT</strong> — Licensed Practicing Music Therapist, State of Illinois
				</li>
			</ul>
			<h3>Professional memberships</h3>
			<ul>
				<li>American Music Therapy Association (AMTA)</li>
			</ul>
		</div>
		<div>
			<h2>Our approach</h2>
			<!-- TODO: philosophy / values copy -->
			<p>
				Placeholder: a short paragraph about values — client-centered care, collaboration with
				families and care teams, measurable goals, etc.
			</p>
		</div>
	</div>
</Section>

<Section tone="tint">
	<div class="grid-2 name-story">
		<div class="story-logo"><Logo size={280} /></div>
		<div>
			<h2>The name &amp; the owl</h2>
			<!-- TODO: client to explain the meaning of "Palladia" and the owl logo -->
			<p>
				Placeholder: the story behind the name “Palladia” and the owl, e.g. what it represents —
				wisdom, attentive listening, guidance — and how that connects to the practice.
			</p>
			<p>
				Placeholder: a sentence about the musical staff that wraps the owl and the role of music in
				the work.
			</p>
		</div>
	</div>
</Section>

<Section>
	<div class="cta">
		<div class="cta-logo"><Logo size={72} alt="" /></div>
		<h2>Let’s talk</h2>
		<a class="button" href={resolve('/contact')}>Contact {site.shortName}</a>
	</div>
</Section>

<style>
	.bio {
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.5fr);
	}
	@media (max-width: 48rem) {
		.bio {
			grid-template-columns: 1fr;
		}
	}
	.top {
		align-items: start;
	}
	h3 {
		font-size: 1.05rem;
		margin: var(--space-3) 0 var(--space-1);
	}
	.role {
		color: var(--color-text-muted);
		font-style: italic;
	}
	.name-story {
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.5fr);
	}
	.story-logo {
		display: flex;
		justify-content: center;
	}
	@media (max-width: 48rem) {
		.name-story {
			grid-template-columns: 1fr;
		}
		.story-logo :global(img) {
			width: 12rem;
		}
	}
	.cta-logo {
		display: flex;
		justify-content: center;
		margin-bottom: var(--space-2);
	}
	.cta {
		text-align: center;
	}
</style>
