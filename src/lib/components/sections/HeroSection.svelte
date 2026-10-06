<script lang="ts">
	import { ArrowDownRight, Download, MoveUpRight } from 'lucide-svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section
	id="home"
	class="relative flex h-[100svh] items-center overflow-hidden px-6 pb-6 pt-28 sm:pb-8 sm:pt-32"
>
	<div
		class="pointer-events-none absolute right-[-10rem] top-20 h-96 w-96 rounded-full bg-accent/30 blur-3xl"
	></div>
	<div
		class="section-shell relative grid max-h-full items-center gap-6 sm:gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-12"
	>
		<div use:reveal>
			<div
				class="mono mb-4 flex items-center gap-3 text-xs uppercase tracking-[.2em] text-muted-foreground sm:mb-6"
			>
				<span class="h-2 w-2 rounded-full bg-[var(--brand-strong)]"></span> Software engineer / Kathmandu
			</div>
			<h1
				class="max-w-4xl text-4xl font-extrabold leading-[.98] tracking-[-.06em] text-foreground sm:text-5xl lg:text-[clamp(4.5rem,7.5vw,7rem)]"
			>
				Building digital<br /><span class="text-muted-foreground">things that matter.</span>
			</h1>
			<div class="mt-5 sm:mt-7">
				<p class="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
					I'm Niraj Lama, a product-minded developer who turns complex ideas into clear, useful, and
					memorable web experiences.
				</p>
				<div class="mt-4 flex flex-wrap gap-3 sm:mt-6">
					<a
						href="#projects"
						class="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-background hover:bg-[var(--brand-strong)] hover:text-slate-900"
						>See my work <ArrowDownRight
							size={18}
							class="transition-transform group-hover:rotate-[-45deg]"
						/></a
					>
					<a
						href="/documents/Niraj_lama-Resume.pdf"
						download="Niraj-Lama.pdf"
						class="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold hover:border-foreground"
						>Download resume <Download size={18} /></a
					>
				</div>
			</div>
		</div>
		<div
			class="relative mx-auto w-full max-w-xs sm:max-w-sm lg:mb-2 lg:max-w-lg"
			use:reveal={{ delay: 180, direction: 'right', distance: 90 }}
		>
			<div class="absolute -inset-3 rotate-3 rounded-[2rem] bg-accent"></div>
			<div
				class="relative overflow-hidden rounded-[2rem] border-4 border-slate-900 bg-slate-900 shadow-2xl dark:border-slate-700"
			>
				<img
					src="/images/hero-abstract.svg"
					alt="Abstract illustration of a developer workspace and interface"
					class="h-[clamp(10rem,26svh,17rem)] w-full object-cover sm:h-[clamp(16rem,34svh,24rem)] lg:h-[min(32rem,calc(100svh-10rem))]"
				/>
				<div
					class="absolute bottom-3 left-3 right-3 hidden items-center justify-between rounded-xl bg-slate-900/85 px-4 py-3 text-sm text-white backdrop-blur sm:flex"
				>
					<span class="mono text-xs text-accent">01 / 04</span><span
						>Selected work, 2024—25 <MoveUpRight size={16} /></span
					>
				</div>
			</div>
		</div>
	</div>
</section>
