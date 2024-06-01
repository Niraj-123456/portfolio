<script>
	import '../app.css';
	import Header from '$lib/header/header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<main class="w-full min-h-screen">
	<Header />
	<div class="w-full m-auto">
		<slot />
	</div>
	<Footer />
</main>
