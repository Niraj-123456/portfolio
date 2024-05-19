<script>
	import HeroSection from '$lib/hero-section/HeroSection.svelte';
	import ProjectCard from '$lib/project-card/ProjectCard.svelte';
	import TechStack from '$lib/tech-stack/tech-stack.svelte';
	import { EnvelopeOutline, LinkedinSolid, PhoneOutline } from 'flowbite-svelte-icons';
</script>

<section class="w-full">
	<HeroSection />

	<section class="col-span-6 p-4 h-[464px]">
		<TechStack />
	</section>
	<section class="glass-card col-span-12 py-4 px-32 w-full overflow-auto">
		<div class="w-max overflow-auto flex gap-6">
			{#each [0, 1, 2, 3] as idx}
				<ProjectCard />
			{/each}
		</div>
	</section>
</section>
