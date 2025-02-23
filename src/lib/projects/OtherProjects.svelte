<script lang="ts">
	import type { Project } from '../../types/project';

	export let projects: Project[];
</script>

<section class="">
	<h2 class="text-center text-2xl font-bold">More Projects</h2>
	<div class="mt-8 flex flex-col gap-12">
		{#each projects as project}
			<div class="w-full flex flex-col gap-4 items-center justify-center">
				<div class="w-full max-w-96 aspect-auto flex justify-center sm:w-full">
					<img src="/images/projects/foodapp.png" alt="" class="w-full h-auto aspect-auto" />
				</div>

				<div class="pt-6">
					<h2 class="text-2xl font-bold">{project.title}</h2>

					<p class="pt-3 text-gray-500">
						{project.description}
					</p>

					<br />

					<div class="text-gray-500">
						<p class="text-gray-700"><strong> Key Features: </strong></p>
						<ul class="[&>li>strong]:text-gray-700">
							{#each project.features as feature}
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
							{#each project.technologies as tech}
								<li><strong>{tech.title}:</strong> {tech.description}</li>
							{/each}
						</ul>
					</div>

					<br />

					{#if project.githubRepo}
						<p class="text-sm text-gray-500">
							<strong class="text-gray-700">GitHub repo: </strong>{' '}
							<a
								href={project.githubRepo}
								target="_blank"
								class="cursor hover:underline hover:text-blue-400"
								>{[project.githubRepo]}
							</a>
						</p>
					{/if}

					{#if project.websiteUrl}
						<p class="text-sm text-gray-500">
							<strong class="text-gray-700">Website URL: </strong>{' '}
							<a
								href={project.websiteUrl}
								target="_blank"
								class="cursor hover:underline hover:text-blue-400"
								>{[project.websiteUrl]}
							</a>
						</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
