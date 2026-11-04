<!-- Page banner: heading, optional intro text, optional buttons/content, optional image. -->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import Image from './Image.svelte';

	type Props = {
		title: string;
		subtitle?: string;
		/** Image URL. Omit or pass `null` for a text-only banner. */
		image?: string | null;
		imageAlt?: string;
		imageRatio?: string;
		imageFit?: 'cover' | 'contain';
		/** Center the text block (headline, intro, buttons). */
		centered?: boolean;
		children?: Snippet;
	};

	let {
		title,
		subtitle,
		image,
		imageAlt = 'Hero image',
		imageRatio,
		imageFit,
		centered = false,
		children
	}: Props = $props();

	const lines = $derived(title.split('\n'));
	const subtitleLines = $derived(subtitle?.split('\n') ?? []);
</script>

<section class="hero">
	<div class="container" class:grid-2={!!image} class:wide-text={centered && !!image}>
		<div class:centered>
			<!-- A newline in the title becomes a line break; the space keeps words apart for screen readers. -->
			<h1>
				{#each lines as line, i (i)}{line}{#if i < lines.length - 1}{' '}<br />{/if}{/each}
			</h1>
			{#if subtitle}<p class="subtitle">
					{#each subtitleLines as line, i (i)}{line}{#if i < subtitleLines.length - 1}{' '}<br
							/>{/if}{/each}
				</p>{/if}
			{#if children}<div class="actions">{@render children()}</div>{/if}
		</div>
		{#if image}
			<div class="media">
				<Image src={image} alt={imageAlt} ratio={imageRatio} fit={imageFit} loading="eager" />
			</div>
		{/if}
	</div>
</section>

<style>
	.hero {
		padding-block: var(--space-5);
		background:
			radial-gradient(circle at 85% 20%, var(--color-tint), transparent 55%),
			linear-gradient(160deg, var(--color-muted-bg), var(--color-bg) 70%);
	}
	.media {
		max-width: 30rem;
		justify-self: center;
		width: 100%;
	}
	.subtitle {
		font-size: 1.2rem;
		color: var(--color-text-muted);
		max-width: 40rem;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-top: var(--space-3);
	}
	/* Give the centered text a wider column on desktop so its manual line breaks aren't re-wrapped. */
	@media (min-width: 48rem) {
		.wide-text {
			grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
		}
	}
	.centered {
		text-align: center;
	}
	.centered .subtitle {
		margin-inline: auto;
	}
	.centered .actions {
		justify-content: center;
	}
</style>
