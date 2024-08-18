<script>
	import '../app.css';
	import Header from '$lib/header/header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<main class="w-full min-h-screen">
	<Header />
	<div class="w-full px-32">
		<slot />
	</div>
	<Footer />
</main>
