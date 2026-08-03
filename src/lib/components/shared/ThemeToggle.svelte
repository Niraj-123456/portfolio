<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let dark = false;
	let mounted = false;

	onMount(() => {
		dark = document.documentElement.classList.contains('dark');
		mounted = true;
	});

	function toggleTheme() {
		dark = !dark;
		document.documentElement.classList.toggle('dark', dark);
		document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
		localStorage.setItem('theme', dark ? 'dark' : 'light');
	}
</script>

<button
	type="button"
	class="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition hover:-translate-y-0.5 hover:bg-muted"
	aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
	title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
	on:click={toggleTheme}
>
	{#if mounted && dark}<Sun size={17} />{:else}<Moon size={17} />{/if}
</button>
