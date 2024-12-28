<script>
	import ContactCTA from '$lib/contact/ContactCTA.svelte';
	import ContactForm from '$lib/contact/ContactForm.svelte';
	import HeroSection from '$lib/hero-section/HeroSection.svelte';
	import ProjectList from '$lib/projects/ProjectList.svelte';
	import TechStack from '$lib/tech-stack/TechStack.svelte';
</script>

<div class="w-full grid gap-8">
	<HeroSection />
	<TechStack />
	<ProjectList />
	<ContactForm />
	<ContactCTA />
</div>
