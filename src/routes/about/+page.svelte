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
			<!-- TODO: client to review and personalize the draft bio -->
			<p>
				{site.owner.name} is a board-certified and Illinois-licensed music therapist who founded
				{site.name} to bring individual and group music therapy to people across the Chicagoland area.
				She holds a Bachelor of Music Therapy from Radford University and uses music experiences — singing,
				playing instruments, songwriting, improvisation, and movement — to support each client’s goals.
			</p>
			<p>
				Each client begins with an assessment of their strengths and needs, followed by an
				individualized plan. Sessions are flexible and adapt as goals change. Families and care
				teams are kept informed along the way, and no musical background is required.
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
				<!-- Wording per CBMT (cbmt.org) -->
				<li>
					<strong>MT-BC</strong> — Music Therapist-Board Certified, Certification Board for Music Therapists
					(CBMT)
				</li>
				<!-- Wording per the Illinois Music Therapy Licensing and Practice Act, 225 ILCS 56 -->
				<li>
					<strong>LPMT</strong> — Licensed Professional Music Therapist, Illinois Department of Financial
					and Professional Regulation (IDFPR)
				</li>
			</ul>
			<h3>Professional memberships</h3>
			<ul>
				<li>American Music Therapy Association (AMTA)</li>
			</ul>
		</div>
		<div>
			<h2>Our approach</h2>
			<!-- TODO: client to review the draft philosophy / values copy -->
			<p>
				Music therapy at {site.shortName} is client-centered: it starts with who you are, what matters
				to you, and the music you connect with. Goals are clear and measurable, progress is reviewed regularly,
				and care is coordinated with families, caregivers, schools, and healthcare teams when that helps.
			</p>
			<p>
				Every session is built on respect, collaboration, and the belief that music can reach people
				in ways words sometimes can’t.
			</p>
		</div>
	</div>
</Section>

<Section tone="tint">
	<div class="grid-2 name-story">
		<div class="story-logo"><Logo size={280} /></div>
		<div>
			<h2>The name &amp; the owl</h2>
			<!-- TODO: client to confirm or replace the draft story of the name and the owl -->
			<p>
				The owl has long stood for wisdom, watchfulness, and careful listening — qualities at the
				heart of music therapy. Good therapy begins with listening closely, to the person and to the
				music they bring.
			</p>
			<p>
				In the logo, a musical staff wraps around the owl, a reminder that music is the path through
				which the work happens: a steady, supportive way to express, connect, and grow.
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
