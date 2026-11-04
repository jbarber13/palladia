<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import { site } from '#lib/site.ts';
	import { nav } from '#lib/nav.ts';
	import Logo from './Logo.svelte';

	let open = $state(false);

	// Close the mobile menu after clicking a link
	afterNavigate(() => (open = false));
</script>

<header>
	<div class="container bar">
		<a class="brand" href={resolve('/')}>
			<!-- alt is empty because the visible name next to it already labels the link -->
			<Logo size={56} alt="" loading="eager" />
			<span>{site.name}</span>
		</a>

		<button
			class="menu-toggle"
			aria-expanded={open}
			aria-controls="site-nav"
			onclick={() => (open = !open)}
		>
			<span class="visually-hidden">Menu</span>
			<span class="bars" aria-hidden="true"></span>
		</button>

		<nav id="site-nav" class:open aria-label="Main">
			<ul>
				{#each nav as item (item.href)}
					<li>
						<a
							href={resolve(item.href)}
							aria-current={page.route.id === item.href ? 'page' : undefined}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		background: var(--color-surface);
		border-bottom: 1px solid var(--color-border);
		position: sticky;
		top: 0;
		z-index: 10;
	}
	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 4.5rem;
		flex-wrap: wrap;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-family: var(--font-heading);
		font-size: 1.35rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-heading);
		text-decoration: none;
		padding-block: 0.5rem;
	}
	@media (max-width: 24rem) {
		.brand {
			font-size: 1.1rem;
		}
		.brand :global(img) {
			width: 2.75rem;
		}
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: var(--space-3);
	}
	nav a {
		text-decoration: none;
		color: var(--color-text);
		font-weight: 500;
		padding-block: 0.25rem;
		border-bottom: 2px solid transparent;
	}
	nav a:hover,
	nav a[aria-current='page'] {
		color: var(--color-primary);
		border-bottom-color: var(--color-accent);
	}

	.menu-toggle {
		display: none;
		background: none;
		border: 0;
		padding: 0.75rem;
		cursor: pointer;
	}
	.bars,
	.bars::before,
	.bars::after {
		display: block;
		width: 1.5rem;
		height: 2px;
		background: var(--color-text);
		position: relative;
	}
	.bars::before,
	.bars::after {
		content: '';
		position: absolute;
	}
	.bars::before {
		top: -7px;
	}
	.bars::after {
		top: 7px;
	}

	@media (max-width: 40rem) {
		.menu-toggle {
			display: block;
			flex: none;
		}
		.brand {
			/* let the title shrink/wrap so the menu button stays on the same row */
			flex: 1 1 0;
			min-width: 0;
		}
		nav {
			display: none;
			width: 100%;
			padding-bottom: var(--space-2);
		}
		nav.open {
			display: block;
		}
		ul {
			flex-direction: column;
			gap: var(--space-1);
		}
	}
</style>
