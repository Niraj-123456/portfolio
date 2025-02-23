<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import type { Project } from '../../types/project';

	export let featuredProject: Project;

	let activeImageIdx = 0;

	onMount(() => {
		const interval = setInterval(() => {
			activeImageIdx = (activeImageIdx + 1) % featuredProject.images?.length;
		}, 3000);

		return () => clearInterval(interval);
	});
</script>

<section id="projects" class="mt-16 py-4 w-full overflow-hidden relative">
	<h2 class="text-center text-2xl font-bold">Featured Project</h2>

	<div class="flex flex-col gap-8 mt-8 lg:flex-row">
		<div class="w-full aspect-video overflow-hidden project-images">
			{#each featuredProject.images as image, idx}
				<img
					src={image.imageUrl}
					alt={image.name}
					class={cn('aspect-video w-full h-auto', activeImageIdx === idx ? 'active' : '')}
				/>
			{/each}
		</div>

		<div class="w-full">
			<h2>
				<span class="text-xl font-bold"> {featuredProject.title}</span>
				<span class="text-gray-500">({featuredProject.subtitle})</span>
			</h2>

			<div class="pt-2">
				<p class="text-gray-500">
					{featuredProject.description}
				</p>
				<br />

				<div class="text-gray-500">
					<p class="text-gray-700"><strong> Key Features: </strong></p>

					<ul class="[&>li>strong]:text-gray-700">
						{#each featuredProject.features as feature}
							<li>
								<strong>{feature.title}:</strong>
								{feature.description}
							</li>
						{/each}
					</ul>
				</div>
				<br />

				<div class="text-gray-500">
					<p class="text-gray-700"><strong> Technologies Used:</strong></p>

					<ul class="[&>li>strong]:text-gray-700">
						{#each featuredProject.technologies as tech}
							<li><strong>{tech.title}:</strong> {tech.description}</li>
						{/each}
					</ul>
				</div>

				<br />

				{#if featuredProject.githubRepo}
					<p class="text-sm text-gray-500">
						<strong class="text-gray-700">GitHub repo: </strong>{' '}<a
							href={featuredProject.githubRepo}
							target="_blank"
							class="cursor hover:underline hover:text-blue-400">{featuredProject.githubRepo}</a
						>
					</p>
				{/if}
				{#if featuredProject.websiteUrl}
					<p class="text-sm text-gray-500">
						<strong class="text-gray-700">Website URL: </strong>
						{' '}<a
							href={featuredProject.githubRepo}
							target="_blank"
							class="cursor hover:underline hover:text-blue-400">{featuredProject.githubRepo}</a
						>
					</p>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.project-images {
		@apply p-2 relative;
	}

	.project-images img {
		@apply absolute opacity-0 -translate-y-[20px] max-w-[95%] h-auto shadow-lg;
	}

	.project-images img.active {
		@apply opacity-100 translate-y-0 transition-all duration-500 ease-in-out;
	}
</style>
