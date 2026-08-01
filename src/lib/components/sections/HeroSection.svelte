<script lang="ts">
	import { ArrowDownRight, Download, MoveUpRight } from 'lucide-svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="home" class="relative px-6 pb-24 pt-36 md:pb-36 md:pt-48">
	<div
		class="pointer-events-none absolute right-[-10rem] top-20 h-96 w-96 rounded-full bg-accent/30 blur-3xl"
	></div>
	<div class="section-shell relative grid items-end gap-14 lg:grid-cols-[1.15fr_.85fr]">
		<div use:reveal>
			<div
				class="mono mb-8 flex items-center gap-3 text-xs uppercase tracking-[.2em] text-slate-500"
			>
				<span class="h-2 w-2 rounded-full bg-[var(--brand-strong)]"></span> Software engineer / Kathmandu
			</div>
			<h1
				class="max-w-4xl text-5xl font-extrabold leading-[.98] tracking-[-.06em] text-slate-900 sm:text-7xl lg:text-[7.8rem]"
			>
				Building digital<br /><span class="text-slate-500">things that matter.</span>
			</h1>
			<div class="mt-10">
				<p class="max-w-md text-lg leading-relaxed text-slate-600">
					I'm Niraj Lama, a product-minded developer who turns complex ideas into clear, useful, and
					memorable web experiences.
				</p>
				<div class="mt-7 flex flex-wrap gap-3">
					<a
						href="#projects"
						class="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-[var(--brand-strong)] hover:text-slate-900"
						>See my work <ArrowDownRight
							size={18}
							class="transition-transform group-hover:rotate-[-45deg]"
						/></a
					>
					<a
						href="/documents/Niraj_lama-Resume.pdf"
						download="Niraj-Lama.pdf"
						class="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold hover:border-slate-900"
						>Download resume <Download size={18} /></a
					>
				</div>
			</div>
		</div>
		<div
			class="relative mx-auto w-full max-w-lg lg:mb-2"
			use:reveal={{ delay: 180, direction: 'right', distance: 90 }}
		>
			<div class="absolute -inset-3 rotate-3 rounded-[2rem] bg-accent"></div>
			<div
				class="relative overflow-hidden rounded-[2rem] border-4 border-slate-900 bg-slate-900 shadow-2xl"
			>
				<img
					src="/images/hero-abstract.svg"
					alt="Abstract illustration of a developer workspace and interface"
					class="h-[28rem] w-full object-cover sm:h-[36rem]"
				/>
				<div
					class="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-slate-900/85 px-4 py-3 text-sm text-white backdrop-blur"
				>
					<span class="mono text-xs text-accent">01 / 04</span><span
						>Selected work, 2024—25 <MoveUpRight size={16} /></span
					>
				</div>
			</div>
		</div>
	</div>
</section>
