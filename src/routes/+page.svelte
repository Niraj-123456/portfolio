<script>
	import ContactCTA from '$lib/contact/ContactCTA.svelte';
	import ContactForm from '$lib/contact/ContactForm.svelte';
	import HeroSection from '$lib/hero-section/HeroSection.svelte';
	import FeaturedProject from '$lib/projects/FeaturedProject.svelte';
	import OtherProjects from '$lib/projects/OtherProjects.svelte';
	import TechStack from '$lib/tech-stack/TechStack.svelte';
</script>

<div class="w-full grid gap-12">
	<HeroSection />
	<TechStack />
	<FeaturedProject />
	<OtherProjects />
	<ContactForm />
	<ContactCTA />
</div>
