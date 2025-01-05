<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div
	class="w-full border flex flex-col justify-center items-center gap-2 py-7 rounded-xl overflow-hidden contactCTA-container sm:py-14 sm:flex-row sm:gap-8"
>
	<p class="font-extrabold text-3xl py-4 sm:text-5xl">Let's get it touch.</p>

	<Button class="text-lg h-10 px-12 font-normal sm:text-xl sm:h-12 sm:px-6">Click me</Button>
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
