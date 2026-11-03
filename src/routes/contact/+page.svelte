<script lang="ts">
	import { site } from '#lib/site.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Section from '#lib/components/Section.svelte';
	import ContactForm from '#lib/components/ContactForm.svelte';
</script>

<Seo
	title="Contact"
	description="Contact {site.name} to schedule a consultation for individual or group music therapy in Lake County, IL & Kenosha County, WI."
/>

<!-- TODO: contact intro copy -->
<Hero
	title="Contact"
	subtitle="Questions or ready to schedule? Reach out by phone, email, or the form below."
	image={null}
/>

<Section>
	<div class="grid-2 top">
		<div>
			<h2>Get in Touch</h2>
			<dl>
				<dt>Phone</dt>
				<dd><a href="tel:{site.contact.phone.replace(/[^\d+]/g, '')}">{site.contact.phone}</a></dd>
				<dt>Email</dt>
				<dd><a href="mailto:{site.contact.email}">{site.contact.email}</a></dd>
				<dt>Service area</dt>
				<dd>{site.serviceArea.join(' & ')}</dd>
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
