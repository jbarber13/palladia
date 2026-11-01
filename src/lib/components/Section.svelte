<!-- Generic page section with consistent spacing. Use `tone="muted"` for an alternate background. -->
<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		tone?: 'default' | 'muted';
		id?: string;
		children: Snippet;
	};

	let { tone = 'default', id, children }: Props = $props();
</script>

<section {id} class:muted={tone === 'muted'}>
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
</style>
