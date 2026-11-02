<!-- Page banner: heading, optional intro text, optional buttons/content, optional image. -->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import Image from './Image.svelte';

	type Props = {
		title: string;
		subtitle?: string;
		/** Image URL. Omit to show a placeholder; pass `null` to hide the image column entirely. */
		image?: string | null;
		imageAlt?: string;
		imageRatio?: string;
		imageFit?: 'cover' | 'contain';
		children?: Snippet;
	};

	let {
		title,
		subtitle,
		image,
		imageAlt = 'Hero image',
		imageRatio,
		imageFit,
		children
	}: Props = $props();
</script>

<section class="hero">
	<div class="container" class:grid-2={image !== null}>
		<div>
			<h1>{title}</h1>
			{#if subtitle}<p class="subtitle">{subtitle}</p>{/if}
			{#if children}<div class="actions">{@render children()}</div>{/if}
		</div>
		{#if image !== null}
			<div class="media">
				<Image
					src={image}
					alt={imageAlt}
					ratio={imageRatio}
					fit={imageFit}
					loading="eager"
					label="Hero image placeholder"
				/>
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
</style>
