<script lang="ts">
	import { imageReveal } from '$lib/actions/reveal';

	export let images: string[];
	export let title: string;
	export let index: number;
</script>

<div
	class="group relative min-h-[22rem] overflow-hidden rounded-2xl bg-slate-800 p-3 sm:min-h-[30rem]"
>
	{#each images as image, imageIndex}
		<div
			class="absolute overflow-hidden rounded-xl shadow-2xl {imageIndex === 0
				? 'inset-3 z-10'
				: imageIndex === 1
					? 'bottom-5 right-5 z-20 w-[52%] rotate-2 border-4 border-slate-900'
					: 'left-6 top-6 z-30 w-[42%] -rotate-2 border-4 border-slate-900'}"
		>
			<img
				use:imageReveal={140 + imageIndex * 220 + index * 60}
				src={image}
				alt={imageIndex === 0 ? `${title} project overview` : `${title} screen ${imageIndex + 1}`}
				loading={index === 0 && imageIndex === 0 ? 'eager' : 'lazy'}
				class="w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] {imageIndex ===
				0
					? 'h-full aspect-[16/10]'
					: 'aspect-[16/10]'}"
			/>
		</div>
	{/each}
	<span
		class="mono absolute bottom-7 left-7 z-40 rounded-full bg-slate-950/90 px-3 py-1 text-xs text-accent backdrop-blur"
	>
		{String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
	</span>
</div>
