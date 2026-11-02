<!-- Generic page section with consistent spacing. Use `tone="muted"` for an alternate background. -->
<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		tone?: 'default' | 'muted' | 'tint';
		id?: string;
		children: Snippet;
	};

	let { tone = 'default', id, children }: Props = $props();
</script>

<section {id} class:muted={tone === 'muted'} class:tint={tone === 'tint'}>
	<div class="container">
		{@render children()}
	</div>
</section>

<style>
	section {
		padding-block: var(--space-5);
	}
	.muted {
		background: var(--color-muted-bg);
	}
	.tint {
		background: linear-gradient(160deg, var(--color-tint), var(--color-muted-bg));
	}
</style>
