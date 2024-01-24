<script>
	import '../app.css';
	import Header from '$lib/header/header.svelte';
</script>

<div class="w-full min-h-screen">
	<Header />
	<div class="max-w-5xl m-auto">
		<slot />
	</div>
</div>
