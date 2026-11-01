<script lang="ts">
	import { resolve } from '$app/paths';
	import { site } from '#lib/site.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Section from '#lib/components/Section.svelte';
	import Image from '#lib/components/Image.svelte';
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
			<!-- TODO: real credentials -->
			<ul>
				<li>Board-Certified Music Therapist (MT-BC), Certification Board for Music Therapists</li>
				<li>Degree, University — placeholder</li>
				<li>Additional training or certifications — placeholder</li>
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

<Section>
	<div class="cta">
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
	.role {
		color: var(--color-text-muted);
		font-style: italic;
	}
	.cta {
		text-align: center;
	}
</style>
