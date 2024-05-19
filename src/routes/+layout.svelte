<script>
	import '../app.css';
	import Header from '$lib/header/header.svelte';
</script>

<main class="w-full min-h-screen">
	<Header />
	<div class="w-full m-auto">
		<slot />
	</div>
</main>
