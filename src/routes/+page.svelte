<script>
	import ContactForm from '$lib/contact/ContactForm.svelte';
	import HeroSection from '$lib/hero-section/HeroSection.svelte';
	import FeaturedProject from '$lib/projects/FeaturedProject.svelte';
	import TechStack from '$lib/tech-stack/TechStack.svelte';
</script>

<div class="w-full grid gap-12">
	<HeroSection />
	<TechStack />
	<FeaturedProject />
	<ContactForm />
</div>
