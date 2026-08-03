<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import BrandMark from '$lib/components/shared/BrandMark.svelte';
	import ThemeToggle from '$lib/components/shared/ThemeToggle.svelte';
	import { navigation } from '$lib/data/portfolio';
	let open = false;
</script>

<header class="fixed top-0 z-40 w-full px-6 py-5">
	<div
		class="section-shell flex items-center justify-between rounded-full border border-border bg-[var(--surface)]/85 px-5 py-3 shadow-sm backdrop-blur-md"
	>
		<BrandMark />
		<nav class="hidden items-center gap-7 text-sm font-semibold sm:flex">
			{#each navigation as item}<a
					href={item.href}
					class="text-muted-foreground hover:text-foreground">{item.label}</a
				>{/each}
		</nav>
		<div class="flex items-center gap-2">
			<ThemeToggle />
			<a
				href="#contact"
				class="hidden rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background hover:bg-[var(--brand-strong)] hover:text-slate-900 sm:block"
				>Let's talk <span aria-hidden="true">↗</span></a
			>
			<button
				type="button"
				aria-label={open ? 'Close navigation' : 'Open navigation'}
				aria-expanded={open}
				class="rounded-full p-2 hover:bg-muted sm:hidden"
				on:click={() => (open = !open)}
			>
				{#if open}<X size={20} />{:else}<Menu size={20} />{/if}
			</button>
		</div>
	</div>
	{#if open}
		<nav
			class="section-shell mt-2 rounded-3xl border border-border bg-[var(--surface)] p-5 shadow-lg sm:hidden"
		>
			{#each navigation as item}<a
					href={item.href}
					class="block border-b border-border py-3 font-semibold last:border-0"
					on:click={() => (open = false)}>{item.label}</a
				>{/each}
		</nav>
	{/if}
</header>
