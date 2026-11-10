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

<!-- TODO: client to review the draft philosophy / values copy -->
<Hero
	title="About {site.shortName}"
	subtitle="At Palladia Music Therapy, our approach is rooted in a person-centered, strength-based, and humanistic philosophy. We view every client as a whole person with unique strengths and inherent potential, prioritizing empathy, respect, and deep connection above all else. Because no two journeys are the same, we adapt to what serves you best in the moment. For a more in-depth conversation about how we can support your specific needs, please feel free to reach out to us."
	image={null}
	wide
/>

<Section tone="muted">
	<!-- TODO: add a headshot beside the bio (see README → Images) -->
	<div class="bio">
		<div>
			<h2>{site.owner.name}, {site.owner.credentials}</h2>
			<p class="role">{site.owner.title}</p>
			<!-- TODO: client to review and personalize the draft bio -->
			<p>
				Gwen is a nationally board-certified and Illinois state-licensed music therapist based in
				Lake County, IL. She is the owner of Palladia Music Therapy LLC. She holds a Bachelor of
				Music Therapy from Radford University and has a background in music education from James
				Madison University. Originally from Virginia, Gwen moved to Lake County, Illinois with her
				husband and dogs in 2021 and loves this area! She is proud to bring more music therapy and
				mental health awareness to the community she now calls home.
			</p>
			<p>
				Gwen has had the joy of working as a music therapist in many settings with a variety of
				populations including children and pre-teens in schools, older adults in nursing facilities,
				teens and adults in inpatient psychiatric settings, and with children and infants in
				children’s hospital settings. Across all settings, Gwen’s work centers on enhancing daily
				quality of life and empowering clients to reach their fullest potential. Her clinical
				practice focuses on building confidence, developing healthy coping skills, increasing
				positive communication and social connection, and encouraging positive self-expression
				through music.
			</p>
			<p>Gwen’s Favorite Things: Dogs, daily NYT games, and ballroom dancing with her husband.</p>
		</div>
	</div>
</Section>

<Section>
	<div class="education">
		<h2>Education &amp; Credentials</h2>
		<div class="grid-2 credentials">
			<div>
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
			</div>
			<div>
				<h3>Education</h3>
				<ul>
					<li>Bachelor of Music Therapy, Radford University</li>
				</ul>
				<h3>Professional Memberships</h3>
				<ul>
					<li>American Music Therapy Association (AMTA)</li>
				</ul>
			</div>
		</div>
	</div>
</Section>

<Section tone="tint">
	<div class="grid-2 name-story">
		<div class="story-logo"><Logo size={280} /></div>
		<div>
			<h2>The Name &amp; The Owl</h2>
			<!-- TODO: client to confirm or replace the draft story of the name and the owl -->
			<p>
				Our choice of the owl started with its link to wisdom and its musical call. When researching
				more into the traditional folklore of the owl, we found that many cultures associate the owl
				with qualities that resonate also with therapeutic work such as empathy, deep listening,
				introspection, and navigating through darkness.
			</p>
			<p>
				The Owl of Pallas is famously known as the companion and symbol of Athena, the Greek goddess
				of wisdom. This history inspired the name, Palladia, chosen for its musical sound, as well
				as our color palette of blues and greens. Wrapped around the owl in our logo, the musical
				lines represent music as a steady foundation that supports and uplifts you on your journey.
			</p>
			<p>
				Just as we chose our name and symbol with deep care, we approach every client with that same
				thoughtful intention, viewing you as a whole person and prioritizing genuine connection
				every step of the way.
			</p>
		</div>
	</div>
</Section>

<Section>
	<div class="cta">
		<div class="cta-logo"><Logo size={72} alt="" /></div>
		<h2>Let’s Talk!</h2>
		<a class="button" href={resolve('/contact')}>Contact {site.shortName}</a>
	</div>
</Section>

<style>
	.bio {
		max-width: 46rem;
	}
	h3 {
		font-size: 1.05rem;
		margin: var(--space-3) 0 var(--space-1);
	}
	.credentials {
		align-items: start;
		gap: var(--space-2) var(--space-4);
	}
	.credentials h3:first-child {
		margin-top: 0;
	}
	@media (min-width: 48rem) {
		.credentials {
			grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
		}
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
