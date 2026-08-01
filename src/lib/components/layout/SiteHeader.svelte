<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import BrandMark from '$lib/components/shared/BrandMark.svelte';
	import { navigation } from '$lib/data/portfolio';
	let open = false;
</script>

<header class="fixed top-0 z-40 w-full px-6 py-5">
	<div
		class="section-shell flex items-center justify-between rounded-full border border-slate-300/70 bg-[var(--surface)]/85 px-5 py-3 shadow-sm backdrop-blur-md"
	>
		<BrandMark />
		<nav class="hidden items-center gap-7 text-sm font-semibold sm:flex">
			{#each navigation as item}<a href={item.href} class="text-slate-600 hover:text-slate-900"
					>{item.label}</a
				>{/each}
		</nav>
		<a
			href="#contact"
			class="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--brand-strong)] hover:text-slate-900 sm:block"
			>Let's talk <span aria-hidden="true">↗</span></a
		>
		<button
			type="button"
			aria-label={open ? 'Close navigation' : 'Open navigation'}
			aria-expanded={open}
			class="rounded-full p-2 hover:bg-slate-200 sm:hidden"
			on:click={() => (open = !open)}
			>{#if open}<X size={20} />{:else}<Menu size={20} />{/if}</button
		>
	</div>
	{#if open}
		<nav
			class="section-shell mt-2 rounded-3xl border border-slate-300 bg-[var(--surface)] p-5 shadow-lg sm:hidden"
		>
			{#each navigation as item}<a
					href={item.href}
					class="block border-b border-slate-200 py-3 font-semibold last:border-0"
					on:click={() => (open = false)}>{item.label}</a
				>{/each}
		</nav>
	{/if}
</header>
