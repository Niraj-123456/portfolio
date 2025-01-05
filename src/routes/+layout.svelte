<script>
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<main class="w-full min-h-screen">
	<Header />
	<div class="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-0">
		<slot />
	</div>
	<Footer />
</main>
