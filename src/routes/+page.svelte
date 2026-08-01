<script>
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import ProjectsSection from '$lib/components/sections/ProjectsSection.svelte';
	import TechStackSection from '$lib/components/sections/TechStackSection.svelte';
</script>

<svelte:head>
	<title>Niraj Lama | Software Engineer</title>
	<meta
		name="description"
		content="Niraj Lama is a software engineer building clear, useful, and memorable web experiences."
	/>
</svelte:head>

<div class="w-full overflow-hidden">
	<HeroSection />
	<TechStackSection />
	<ProjectsSection />
	<ContactSection />
</div>
