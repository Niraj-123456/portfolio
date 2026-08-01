<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { technologies } from '$lib/data/portfolio';
</script>

<section class="border-y border-slate-300/70 bg-[var(--surface-muted)] px-6 py-8" use:reveal>
	<div class="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
		<p class="mono shrink-0 text-xs uppercase tracking-[.18em] text-slate-500">
			Tools I use to<br class="hidden sm:block" /> make it real
		</p>
		<div
			class="flex flex-wrap items-center gap-x-8 gap-y-4 text-lg font-bold text-slate-700 sm:justify-end"
		>
			{#each technologies as technology}<span>{technology}</span>{/each}<span class="text-slate-400"
				>+ more</span
			>
		</div>
	</div>
</section>
