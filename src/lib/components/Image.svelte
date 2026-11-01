<!--
	Image with a built-in placeholder.
	- No `src`: renders a labelled grey box so layouts look right before photos exist.
	- With `src`: renders the image. Put files in static/images/ and pass
	  src={asset('/images/photo.jpg')}  (import { asset } from '$app/paths').
-->
<script lang="ts">
	type Props = {
		src?: string;
		alt: string;
		/** CSS aspect-ratio, e.g. '4 / 3', '1 / 1', '16 / 9' */
		ratio?: string;
		/** Text shown inside the placeholder box */
		label?: string;
	};

	let { src, alt, ratio = '4 / 3', label }: Props = $props();
</script>

{#if src}
	<img {src} {alt} style:aspect-ratio={ratio} loading="lazy" />
{:else}
	<div class="placeholder" style:aspect-ratio={ratio} role="img" aria-label={alt}>
		<span>{label ?? alt}</span>
	</div>
{/if}

<style>
	img,
	.placeholder {
		width: 100%;
		border-radius: var(--radius);
		object-fit: cover;
	}
	.placeholder {
		display: grid;
		place-items: center;
		background: repeating-linear-gradient(
			45deg,
			var(--color-muted-bg),
			var(--color-muted-bg) 12px,
			#ebe4d8 12px,
			#ebe4d8 24px
		);
		border: 2px dashed var(--color-border);
		color: var(--color-text-muted);
		font-size: 0.9rem;
		text-align: center;
		padding: var(--space-2);
	}
</style>
