<script lang="ts">
	import { site } from '#lib/site.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Section from '#lib/components/Section.svelte';
	import ContactForm from '#lib/components/ContactForm.svelte';
</script>

<Seo
	title="Contact"
	description="Contact {site.name} to schedule a consultation for individual or group music therapy in Lake County, IL."
/>

<!-- TODO: contact intro copy -->
<Hero
	title="Contact Us"
	subtitle="We are here to answer your questions and help you explore how music therapy can support your goals. Connect with us by phone, email, or the contact form below to get started."
	image={null}
	wide
/>

<Section>
	<div class="grid-2 top">
		<div>
			<h2>Contact Information</h2>
			<dl>
				<dt>Phone</dt>
				<dd><a href="tel:{site.contact.phone.replace(/[^\d+]/g, '')}">{site.contact.phone}</a></dd>
				<dt>Email</dt>
				<dd><a href="mailto:{site.contact.email}">{site.contact.email}</a></dd>
				<dt>Service Area</dt>
				<dd>{site.serviceArea.join(', ')}</dd>
				<!-- TODO: hours, if desired -->
			</dl>
		</div>

		<ContactForm />
	</div>
</Section>

<style>
	.top {
		align-items: start;
	}
	dt {
		font-weight: 700;
		margin-top: var(--space-2);
	}
	dd {
		margin: 0;
	}
</style>
