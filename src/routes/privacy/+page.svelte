<!--
	BOILERPLATE PRIVACY POLICY — TODO: have the owner (and ideally an attorney) review before launch.
	This is a general template, not legal advice. It covers the website only; it is NOT a HIPAA
	Notice of Privacy Practices, which the practice may need separately for clinical services.
	If you add analytics, cookies, embeds (maps, video), or newsletter signup, update this page.
-->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { site } from '#lib/site.ts';
	import { providers } from '#lib/contact-form.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Section from '#lib/components/Section.svelte';

	const formProvider = providers[site.contactForm.provider];
	const updated = new Date(`${site.privacyPolicyUpdated}T12:00:00`).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	const domain = site.url.replace(/^https?:\/\//, '');
</script>

<Seo
	title="Privacy Policy"
	description="How {site.name} handles information shared through this website."
/>

<Section>
	<article class="prose">
		<h1>Privacy Policy</h1>
		<p class="updated">Last updated: {updated}</p>

		<p>
			{site.name} (“{site.shortName},” “we,” “us”) respects your privacy. This policy explains what
			information we collect through this website ({domain}), how we use it, and the choices you
			have.
		</p>

		<h2>Information we collect</h2>
		<p><strong>Information you give us.</strong> When you use our contact form, we collect:</p>
		<ul>
			<li>Your name and email address</li>
			<li>Your phone number, if you choose to provide it</li>
			<li>The service you’re interested in and the contents of your message</li>
		</ul>
		<p>
			We also receive whatever information you include when you contact us directly by phone or
			email.
		</p>
		<p>
			<strong>Information collected automatically.</strong> This website does not use cookies, analytics,
			advertising trackers, or similar technologies. Our hosting provider may automatically log technical
			information such as your IP address and browser type for security and operational purposes (see
			“Service providers” below).
		</p>

		<h2>Please don’t send health information through this website</h2>
		<p>
			The contact form and email are intended for general inquiries and scheduling. Please do not
			include detailed medical, diagnostic, or other sensitive health information. We’re happy to
			discuss those details privately by phone or during a consultation. Any health information you
			share as part of receiving music therapy services is handled separately under our clinical
			privacy practices.
		</p>

		<h2>How we use your information</h2>
		<ul>
			<li>To respond to your inquiry and schedule consultations or sessions</li>
			<li>To communicate with you about services you’ve asked about</li>
			<li>To keep this website secure and working properly</li>
		</ul>
		<p>
			We do <strong>not</strong> sell, rent, or trade your personal information, and we do not use it
			for advertising. We won’t add you to a mailing list without your permission.
		</p>

		<h2>Service providers</h2>
		<p>We use a small number of trusted third parties to operate this website:</p>
		<ul>
			<li>
				<strong>{formProvider.name}</strong> processes contact form submissions and delivers them to
				us by email. See the
				<a href={formProvider.privacyUrl} rel="noopener" target="_blank"
					>{formProvider.name} privacy policy</a
				>.
			</li>
			<li>
				<strong>GitHub Pages</strong> hosts this website and may log visitor IP addresses for
				security purposes. See the
				<a
					href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
					rel="noopener"
					target="_blank">GitHub privacy statement</a
				>.
			</li>
		</ul>
		<p>
			We may also disclose information if required by law, or to protect the safety of our clients
			or others.
		</p>

		<h2>How long we keep information</h2>
		<p>
			We keep inquiry messages only as long as needed to respond and for reasonable business
			records, and then delete them. <!-- TODO: confirm retention practice -->
		</p>

		<h2>Security</h2>
		<p>
			This website is served over an encrypted (HTTPS) connection, and we take reasonable steps to
			protect the information you send us. However, no method of transmission over the internet or
			email is completely secure.
		</p>

		<h2>Children’s privacy</h2>
		<p>
			This website is intended for adults, including parents and caregivers seeking services on
			behalf of a child. We do not knowingly collect personal information directly from children
			under 13. If you believe a child has submitted information to us, please contact us and we
			will delete it.
		</p>

		<h2>Your choices</h2>
		<p>
			You may ask us to access, correct, or delete the personal information you’ve sent us through
			this website by contacting us using the details below.
		</p>

		<h2>Links to other websites</h2>
		<p>
			This website may link to other sites. We are not responsible for the privacy practices of
			those sites.
		</p>

		<h2>Changes to this policy</h2>
		<p>
			We may update this policy from time to time. The “Last updated” date above shows when it was
			last changed.
		</p>

		<h2>Contact us</h2>
		<p>
			{site.name}<br />
			{site.contact.city}, {site.contact.region}<br />
			<a href="mailto:{site.contact.email}">{site.contact.email}</a><br />
			<a href="tel:{site.contact.phone.replace(/[^\d+]/g, '')}">{site.contact.phone}</a>
		</p>
		<p><a href={resolve('/contact')}>Contact page</a></p>
	</article>
</Section>

<style>
	.prose {
		max-width: 46rem;
	}
	.prose h2 {
		margin-top: var(--space-4);
		font-size: 1.4rem;
	}
	.updated {
		color: var(--color-text-muted);
	}
</style>
