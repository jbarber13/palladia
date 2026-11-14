<script lang="ts">
	import { site } from '#lib/site.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Section from '#lib/components/Section.svelte';
</script>

<Seo
	title="FAQs"
	description="Answers to common questions about music therapy sessions with {site.name}, including scheduling, session length, group size, insurance, and credentials."
/>

<Hero
	title="FAQs"
	subtitle="These are some of the questions we get asked most often. If you have other questions or need more information about something, please ask!"
	image={null}
/>

<Section>
	<div>
		<h2>How often are sessions scheduled?</h2>
		<p>
			Everyone is different, but on average, we recommend scheduling sessions weekly to get the most
			benefits from our services.
		</p>

		<h2>How long are sessions?</h2>
		<p>
			Our average session times run 30-50 minutes long depending on the age range of the clients.
		</p>

		<h2>How many clients can be in a group?</h2>
		<p>
			Depending on the age range and acuity level of clients, our groups average between 5-15
			clients per group.
		</p>

		<h2>Do clients need to provide anything for sessions?</h2>
		<p>
			No! Palladia Music Therapy conveniently provides all necessary materials, instruments, and
			equipment for all sessions.
		</p>

		<h2>What are common music therapy interventions used in your sessions?</h2>
		<p>
			Depending on the age and abilities of our clients, we adapt many different interventions to
			fit our clients needs and help them achieve their therapeutic goals. Common interventions
			include but are not limited to variations of active music making, songwriting, music
			listening, music games, relaxation experiences, and movement.
		</p>

		<h2>Do you take insurance?</h2>
		<p>
			At this time, we are a private-pay practice and do not bill health insurance directly.
			However, we are happy to provide superbills upon request, which you can submit to your
			insurance provider for potential out-of-network reimbursement or use with HSA/FSA funds.
			Additionally, Illinois is actively working to expand state-backed coverage for music therapy,
			with broader reimbursement potentially becoming available in summer 2027.
		</p>

		<h2>Are you licensed and insured?</h2>
		<p>
			Yes! Palladia Music Therapy is fully insured with professional and general liability coverage.
			Additionally, therapists are nationally certified as Board-Certified Music Therapists (MT-BC)
			and Illinois state licensed as Licensed Professional Music Therapists (LPMT).
		</p>

		<h2>How do you protect client privacy and confidentiality?</h2>
		<p>
			Because we are a private-pay practice and do not bill health insurance directly, our practice
			does not fall under federal HIPAA regulations. However, we hold ourselves to the highest
			standards of privacy and strictly uphold all confidentiality laws and ethical guidelines
			required by the Illinois Department of Financial and Professional Regulation (IDFPR),
			Certification Board for Music Therapists (CBMT), and the American Music Therapy Association
			(AMTA). For active clients, we use secure, encrypted client portals and protected payment
			systems to keep records and personal information safe. (For your privacy, please avoid sharing
			detailed or confidential health information through our general website contact form.)
			Additionally, to further safeguard the confidentiality of all the individuals we serve, all
			photos on our website depicting client experiences are stock images.
		</p>
	</div>
</Section>

<style>
	h2 {
		font-size: 1.35rem;
		margin-top: var(--space-4);
	}
	h2:first-child {
		margin-top: 0;
	}
</style>
