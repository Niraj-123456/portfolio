<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div
	class="border flex justify-center items-center gap-8 py-14 rounded-xl overflow-hidden contactCTA-container"
>
	<p class="font-extrabold text-5xl py-4">Let's get it touch.</p>

	<Button class="text-xl h-12 px-6 font-normal">Click me</Button>
</div>

<style>
	.contactCTA-container {
		z-index: 1;
		position: relative;
	}

	.contactCTA-container::before {
		content: '';
		position: absolute;
		inset: 0;
		opacity: 0.6;
		z-index: -1;
		background-image: url('/images/bg/bg1.jpg');
		background-repeat: no-repeat;
		background-size: 100% 400px;
		background-position: center top 10%;
	}
</style>
