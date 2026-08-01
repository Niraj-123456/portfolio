<script lang="ts">
	import { ArrowUpRight, Github } from 'lucide-svelte';
	import { reveal } from '$lib/actions/reveal';
	import { projects } from '$lib/data/portfolio';
</script>

<section id="projects" class="bg-slate-900 px-6 py-24 text-white md:py-32">
	<div class="section-shell">
		<div
			class="mb-16 flex flex-col gap-5 border-b border-white/15 pb-10 md:flex-row md:items-end md:justify-between"
		>
			<div>
				<p class="eyebrow mb-4 text-accent">Selected work</p>
				<h2 class="text-4xl font-extrabold tracking-tight sm:text-6xl">
					A few things<br /><span class="text-slate-500">I've shipped.</span>
				</h2>
			</div>
			<p class="max-w-sm leading-relaxed text-slate-400">
				Thoughtful interfaces, reliable systems, and a healthy obsession with the details that make
				products feel good.
			</p>
		</div>
		<div class="space-y-20">
			{#each projects as project, index}
				<article
					use:reveal={{
						delay: index * 100,
						direction: index % 2 ? 'right' : 'left',
						distance: 110
					}}
					class="grid items-center gap-8 lg:grid-cols-[1.15fr_.85fr] {index % 2
						? 'lg:[&>div:first-child]:order-2'
						: ''}"
				>
					<div class="group relative overflow-hidden rounded-2xl bg-slate-800 p-3">
						<img
							src={project.image}
							alt={`${project.title} project preview`}
							loading={index === 0 ? 'eager' : 'lazy'}
							class="aspect-[16/10] w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.03]"
						/>
						<span
							class="mono absolute left-7 top-7 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-accent"
							>{project.number}</span
						>
					</div>
					<div class="max-w-lg">
						<p class="mono mb-4 text-xs uppercase tracking-[.16em] text-accent">
							{project.type}
						</p>
						<h3 class="text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h3>
						<p class="mt-5 leading-relaxed text-slate-400">{project.description}</p>
						<div class="mt-6 flex flex-wrap gap-2">
							{#each project.tags as tag}<span
									class="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300"
									>{tag}</span
								>{/each}
						</div>
						<div class="mt-8 flex gap-5 text-sm font-semibold">
							<a
								href={project.live || project.repo}
								target="_blank"
								rel="noreferrer"
								class="inline-flex items-center gap-1 hover:text-accent"
								>{project.live ? 'View live' : 'View project'} <ArrowUpRight size={16} /></a
							>{#if project.live}<a
									href={project.repo}
									target="_blank"
									rel="noreferrer"
									class="inline-flex items-center gap-1 text-slate-400 hover:text-white"
									>Source <Github size={16} /></a
								>{/if}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
