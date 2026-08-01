<script lang="ts">
	import BrandMark from '$lib/components/shared/BrandMark.svelte';
</script>

<footer class="border-t border-slate-300 bg-[var(--surface-muted)] px-6 py-10">
	<div class="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
		<div>
			<BrandMark className="inline-block" />
			<p class="mt-3 text-sm text-slate-500">Designing and building from Kathmandu.</p>
		</div>
		<div class="flex gap-5 text-sm font-semibold">
			<a
				href="https://github.com/Niraj-123456"
				target="_blank"
				rel="noreferrer"
				class="hover:text-slate-500">GitHub</a
			><a href="mailto:nirajlama@example.com" class="hover:text-slate-500">Email</a><a
				href="#home"
				class="hover:text-slate-500">Back to top ↑</a
			>
		</div>
	</div>
</footer>
