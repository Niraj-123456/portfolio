<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<SiteHeader />
<main class="min-h-screen w-full">
	<slot />
</main>
<SiteFooter />
