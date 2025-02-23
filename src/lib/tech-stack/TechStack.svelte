<script lang="ts">
	type Stack = {
		imageUrl: string;
		name: string;
	};

	export let techStack: Stack[];
</script>

<section class="h-full w-full">
	<div class="text-center text-2xl font-bold">Tech stack</div>
	<div class="w-full h-28 overflow-hidden relative marquee-container">
		<div class="w-full h-full flex gap-12 items-center absolute marquee">
			{#each techStack as stack}
				<img src={stack.imageUrl} alt={stack.name} />
			{/each}
		</div>
		<div class="w-full h-full flex gap-12 items-center absolute marquee" style="left: 1264px">
			{#each techStack as stack}
				<img src={stack.imageUrl} alt={stack.name} />
			{/each}
		</div>
	</div>
</section>

<style>
	.marquee-container {
		filter: grayscale(1);
		opacity: 0.7;
		-webkit-mask-image: linear-gradient(
			90deg,
			hsla(0, 0%, 100%, 0),
			#fff 20%,
			#fff 80%,
			hsla(0, 0%, 100%, 0)
		);
		mask-image: linear-gradient(
			90deg,
			hsla(0, 0%, 100%, 0),
			#fff 20%,
			#fff 80%,
			hsla(0, 0%, 100%, 0)
		);
	}
	.marquee {
		animation: marquee 10s linear infinite;
	}

	.marquee img {
		max-width: 100px;
		max-height: 80px;
		height: auto;
		margin: auto;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-1264px);
		}
	}
</style>
