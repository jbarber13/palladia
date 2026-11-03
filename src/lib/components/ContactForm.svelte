<!--
	Contact form posting to a third-party backend (configured in src/lib/site.ts → contactForm).
	Without JavaScript it falls back to a normal POST and the provider's own thank-you page.
-->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { site } from '#lib/site.ts';
	import { providers, submitForm } from '#lib/contact-form.ts';

	const provider = providers[site.contactForm.provider];
	const formId = site.contactForm.id;
	const ready = formId !== '';

	let status: 'idle' | 'sending' | 'sent' | 'error' = $state('idle');
	let errorMessage = $state('');

	async function onsubmit(event: SubmitEvent) {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;
		status = 'sending';
		try {
			await submitForm(form);
			status = 'sent';
			form.reset();
		} catch (err) {
			errorMessage = (err as Error).message;
			status = 'error';
		}
	}
</script>

<form
	class="card"
	action={ready ? provider.action(formId) : undefined}
	method="POST"
	{onsubmit}
	aria-describedby="form-privacy"
>
	<h2>Send Us A Message!</h2>

	{#if !ready}
		<p class="notice">The online form isn’t connected yet — please call or email.</p>
	{/if}

	{#if status === 'sent'}
		<p class="notice success" role="status">
			Thank you! Your message has been sent. We’ll be in touch soon.
		</p>
	{:else}
		<fieldset disabled={!ready || status === 'sending'}>
			{#each Object.entries(provider.hidden(formId)) as [name, value] (name)}
				<input type="hidden" {name} {value} />
			{/each}
			<input type="hidden" name={provider.subjectField} value="New website inquiry — {site.name}" />

			<!-- Spam honeypot: hidden from people, bots fill it in -->
			<label class="honeypot" aria-hidden="true">
				Leave this empty
				<input name={provider.honeypot} type="text" tabindex="-1" autocomplete="off" />
			</label>

			<label>
				First &amp; Last Name
				<input name="name" type="text" autocomplete="name" required />
			</label>
			<label>
				Email
				<input name="email" type="email" autocomplete="email" required />
			</label>
			<label>
				Phone
				<input name="phone" type="tel" autocomplete="tel" />
			</label>
			<label>
				I’m Interested In:
				<select name="interest">
					<option>Individual Sessions</option>
					<option>Group Sessions</option>
					<option>Not Sure Yet</option>
				</select>
			</label>
			<label>
				Message
				<textarea name="message" rows="5" required></textarea>
			</label>

			<p id="form-privacy" class="fine-print">
				To ensure your privacy, please do not include confidential medical details or personal
				health information in this form. By sending a message you agree to our <a
					href={resolve('/privacy')}>privacy policy</a
				>.
			</p>

			{#if status === 'error'}
				<p class="notice error" role="alert">
					{errorMessage} You can also reach us at
					<a href="mailto:{site.contact.email}">{site.contact.email}</a>.
				</p>
			{/if}

			<button class="button" type="submit">
				{status === 'sending' ? 'Sending…' : 'Send'}
			</button>
		</fieldset>
	{/if}
</form>

<style>
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
	input,
	select,
	textarea {
		font: inherit;
		padding: 0.6rem 0.75rem;
		border: 1px solid var(--color-border);
		border-radius: 0.5rem;
		background: var(--color-bg);
	}
	.honeypot {
		position: absolute;
		left: -9999px;
	}
	.fine-print {
		font-size: 0.9rem;
		color: var(--color-text-muted);
		margin: 0;
	}
	.notice {
		background: var(--color-muted-bg);
		padding: var(--space-1) var(--space-2);
		border-radius: 0.5rem;
		font-size: 0.95rem;
	}
	.success {
		background: var(--color-success-bg);
	}
	.error {
		background: var(--color-error-bg);
	}
	button {
		justify-self: start;
	}
</style>
