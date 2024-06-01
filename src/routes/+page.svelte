<script>
	import Contact from '$lib/contact/Contact.svelte';
	import HeroSection from '$lib/hero-section/HeroSection.svelte';
	import ProjectList from '$lib/projects/ProjectList.svelte';
	import TechStack from '$lib/tech-stack/TechStack.svelte';
</script>

<div class="w-full">
	<HeroSection />

	<TechStack />

	<ProjectList />

	<Contact />
</div>
