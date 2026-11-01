<script lang="ts">
	import { resolve } from '$app/paths';
	import { site } from '#lib/site.ts';
	import { nav } from '#lib/nav.ts';

	const year = new Date().getFullYear();
</script>

<footer>
	<div class="container cols">
		<div>
			<p class="name">{site.name}</p>
			<p>{site.tagline}</p>
		</div>

		<div>
			<p class="heading">Contact</p>
			<p>
				<a href="tel:{site.contact.phone.replace(/[^\d+]/g, '')}">{site.contact.phone}</a><br />
				<a href="mailto:{site.contact.email}">{site.contact.email}</a><br />
				Serving {site.serviceArea.join(', ')}
			</p>
		</div>

		<div>
			<p class="heading">Pages</p>
			<ul>
				{#each nav as item (item.href)}
					<li><a href={resolve(item.href)}>{item.label}</a></li>
				{/each}
			</ul>
			{#if site.social.length}
				<ul class="social">
					{#each site.social as s (s.href)}
						<li><a href={s.href} rel="noopener" target="_blank">{s.label}</a></li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
	<div class="container legal">
		<small>
			&copy; {year}
			{site.name}. All rights reserved. ·
			<a href={resolve('/privacy')}>Privacy Policy</a>
		</small>
	</div>
</footer>

<style>
	footer {
		background: var(--color-primary-dark);
		color: #e9efe9;
		padding-block: var(--space-4) var(--space-2);
		margin-top: var(--space-5);
	}
	a {
		color: inherit;
	}
	.cols {
		display: grid;
		gap: var(--space-3);
	}
	@media (min-width: 48rem) {
		.cols {
			grid-template-columns: 2fr 2fr 1fr;
		}
	}
	.name {
		font-family: var(--font-heading);
		font-size: 1.25rem;
		font-weight: 700;
	}
	.heading {
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: 0.85rem;
		margin-bottom: var(--space-1);
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.social {
		margin-top: var(--space-2);
	}
	.legal {
		border-top: 1px solid rgb(255 255 255 / 0.15);
		margin-top: var(--space-3);
		padding-top: var(--space-2);
		opacity: 0.8;
	}
</style>
