<script lang="ts">
	import { resolve } from '$app/paths';
	import { site } from '#lib/site.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Section from '#lib/components/Section.svelte';
	import Logo from '#lib/components/Logo.svelte';
</script>

<Seo
	title="About"
	description="Learn about {site.owner.name}, {site.owner
		.credentials}, the music therapist behind {site.name}."
/>

<Hero title="About {site.shortName}" image={null} />

<Section>
	<div class="approach">
		<h2>Our Approach</h2>
		<!-- TODO: client to review the draft philosophy / values copy -->
		<p>
			At Palladia Music Therapy, our approach is rooted in a person-centered, strength-based, and
			humanistic philosophy. We view every client as a whole person with unique strengths and
			inherent potential, prioritizing empathy, respect, and deep connection above all else. Because
			no two journeys are the same, we adapt to what serves you best in the moment. For a more
			in-depth conversation about how we can support your specific needs, please feel free to reach
			out to us.
		</p>
	</div>
</Section>

<Section tone="muted">
	<!-- TODO: add a headshot beside the bio (see README → Images) -->
	<div class="bio">
		<div>
			<h2>{site.owner.name}, {site.owner.credentials}</h2>
			<p class="role">{site.owner.title}</p>
			<!-- TODO: client to review and personalize the draft bio -->
			<p>
				{site.owner.name} is a board-certified and Illinois-licensed music therapist who founded
				{site.name} to bring individual and group music therapy to people across Lake County, IL. She
				holds a Bachelor of Music Therapy from Radford University and uses music experiences — singing,
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

<Section>
	<div class="education">
		<h2>Education &amp; Credentials</h2>
		<h3>Education</h3>
		<ul>
			<li>Bachelor of Music Therapy, Radford University</li>
		</ul>
		<h3>Certification &amp; Licensure</h3>
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
		<h3>Professional Memberships</h3>
		<ul>
			<li>American Music Therapy Association (AMTA)</li>
		</ul>
	</div>
</Section>

<Section tone="tint">
	<div class="grid-2 name-story">
		<div class="story-logo"><Logo size={280} /></div>
		<div>
			<h2>The Name &amp; the Owl</h2>
			<!-- TODO: client to confirm or replace the draft story of the name and the owl -->
			<p>
				The name Palladia draws on Pallas Athena, the Greek goddess of wisdom, whose constant
				companion was the owl. In Greek myth and across many cultures since, the owl has stood for
				wisdom, guidance, and the ability to see clearly where others cannot.
			</p>
			<p>
				Those qualities are at the heart of music therapy, which begins with attentive listening —
				to the person and to the music they bring. In the logo, a musical staff wraps around the
				owl, a reminder that music is the path through which the work happens: a steady, supportive
				way to express, connect, and grow.
			</p>
		</div>
	</div>
</Section>

<Section>
	<div class="cta">
		<div class="cta-logo"><Logo size={72} alt="" /></div>
		<h2>Let’s Talk</h2>
		<a class="button" href={resolve('/contact')}>Contact {site.shortName}</a>
	</div>
</Section>

<style>
	.approach,
	.bio,
	.education {
		max-width: 46rem;
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
