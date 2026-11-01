<script lang="ts">
	import { site } from '#lib/site.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Section from '#lib/components/Section.svelte';

	const formReady = site.formEndpoint !== '';
</script>

<Seo
	title="Contact"
	description="Contact {site.name} to schedule a consultation for individual or group music therapy in the Chicagoland area."
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
			<h2>Get in touch</h2>
			<dl>
				<dt>Phone</dt>
				<dd><a href="tel:{site.contact.phone.replace(/[^\d+]/g, '')}">{site.contact.phone}</a></dd>
				<dt>Email</dt>
				<dd><a href="mailto:{site.contact.email}">{site.contact.email}</a></dd>
				<dt>Service area</dt>
				<dd>{site.serviceArea.join(', ')}</dd>
				<!-- TODO: hours, if desired -->
			</dl>
		</div>

		<!--
			Form is handled by an external service (GitHub Pages is static-only).
			Set `formEndpoint` in src/lib/site.ts to enable it.
		-->
		<form class="card" action={site.formEndpoint || undefined} method="POST">
			<h2>Send a message</h2>
			{#if !formReady}
				<p class="notice">The online form isn’t connected yet — please call or email.</p>
			{/if}
			<fieldset disabled={!formReady}>
				<label>
					Name
					<input name="name" type="text" autocomplete="name" required />
				</label>
				<label>
					Email
					<input name="email" type="email" autocomplete="email" required />
				</label>
				<label>
					Phone <span class="optional">(optional)</span>
					<input name="phone" type="tel" autocomplete="tel" />
				</label>
				<label>
					I’m interested in
					<select name="interest">
						<option>Individual sessions</option>
						<option>Group sessions</option>
						<option>Not sure yet</option>
					</select>
				</label>
				<label>
					Message
					<textarea name="message" rows="5" required></textarea>
				</label>
				<button class="button" type="submit">Send</button>
			</fieldset>
		</form>
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
	fieldset {
		border: 0;
		padding: 0;
		margin: 0;
		display: grid;
		gap: var(--space-2);
	}
	label {
		display: grid;
		gap: 0.25rem;
		font-weight: 600;
	}
	.optional {
		font-weight: 400;
		color: var(--color-text-muted);
	}
	input,
	select,
	textarea {
		font: inherit;
		padding: 0.6rem 0.75rem;
		border: 1px solid var(--color-border);
		border-radius: 0.5rem;
		background: var(--color-bg);
	}
	.notice {
		background: var(--color-muted-bg);
		padding: var(--space-1) var(--space-2);
		border-radius: 0.5rem;
		font-size: 0.95rem;
	}
	button {
		justify-self: start;
	}
</style>
