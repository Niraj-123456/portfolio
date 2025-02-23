<script lang="ts">
	import ContactCTA from '$lib/contact/ContactCTA.svelte';
	import ContactForm from '$lib/contact/ContactForm.svelte';
	import HeroSection from '$lib/hero-section/HeroSection.svelte';
	import FeaturedProject from '$lib/projects/FeaturedProject.svelte';
	import OtherProjects from '$lib/projects/OtherProjects.svelte';
	import TechStack from '$lib/tech-stack/TechStack.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="w-full grid gap-12">
	<HeroSection profile={data.profile} />
	<TechStack techStack={data.techStack.images} />
	<FeaturedProject featuredProject={data.featuredProject} />
	<OtherProjects projects={data.projects} />
	<ContactForm />
	<ContactCTA />
</div>
