<script lang="ts">
	import { ChevronUp } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import BrandMark from '$lib/components/shared/BrandMark.svelte';

	let showBackToTop = false;

	onMount(() => {
		const updateVisibility = () => (showBackToTop = window.scrollY > 320);
		updateVisibility();
		window.addEventListener('scroll', updateVisibility, { passive: true });

		return () => window.removeEventListener('scroll', updateVisibility);
	});
</script>

<footer class="border-t border-border bg-[var(--surface-muted)] px-6 py-10">
	<div class="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
		<div>
			<BrandMark className="inline-block" />
			<p class="mt-3 text-sm text-muted-foreground">Building digital things that matter.</p>
		</div>
		<div class="flex gap-5 text-sm font-semibold">
			<a
				href="https://github.com/Niraj-123456"
				target="_blank"
				rel="noreferrer"
				class="hover:text-muted-foreground">GitHub</a
			><a href="mailto:nirajlama@example.com" class="hover:text-muted-foreground">Email</a>
		</div>
	</div>
	<a
		href="#home"
		aria-label="Back to top"
		title="Back to top"
		aria-hidden={!showBackToTop}
		tabindex={showBackToTop ? 0 : -1}
		class="fixed bottom-16 right-10 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg shadow-black/20 transition-[opacity,transform,background-color] duration-300 ease-out hover:-translate-y-1 hover:bg-slate-800 dark:ring-1 dark:ring-white/15 {showBackToTop
			? 'translate-y-0 scale-100 opacity-100'
			: 'pointer-events-none translate-y-4 scale-90 opacity-0'}"
	>
		<ChevronUp size={22} strokeWidth={2.25} />
	</a>
</footer>
