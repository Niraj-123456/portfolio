<script>
	import ProjectCard from '$lib/project-card/ProjectCard.svelte';
	import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-svelte';

	const defaultScrollValue = 420;
	const handleRightScroll = () => {
		const container = document.getElementById('project-list-container');
		if (container) {
			const { scrollLeft, clientWidth, scrollWidth } = container;
			if (scrollLeft + clientWidth < scrollWidth) container.scrollLeft += defaultScrollValue;
		}
	};

	const handleLeftScroll = () => {
		const container = document.getElementById('project-list-container');
		if (container && container.scrollLeft > 0) container.scrollLeft -= defaultScrollValue;
	};
</script>

<section class="mt-16 py-4 px-36 w-full overflow-hidden relative">
	<div class="flex gap-6 w-full py-4 overflow-auto scrollbar_hidden" id="project-list-container">
		<div class="w-max flex flex-shrink-0 gap-6">
			{#each [0, 1, 2, 3, 4, 5, 6, 7, 8] as idx}
				<ProjectCard />
			{/each}
		</div>
	</div>

	<button on:click={handleLeftScroll}>
		<ChevronLeftCircle
			class="absolute top-1/2 left-24 w-8 h-8 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 hover:text-white/60"
		/>
	</button>

	<button on:click={handleRightScroll}>
		<ChevronRightCircle
			class="absolute top-1/2 right-24 w-8 h-8 cursor-pointer z-50 transition-all duration-300 ease-in-out hover:scale-125 hover:text-white/60"
		/>
	</button>
</section>
