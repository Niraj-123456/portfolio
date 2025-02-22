<script lang="ts">
	import { CloudDownload } from 'lucide-svelte';

	type Profile = {
		title: string;
		subtitle: string;
		description: string;
		imageUrl: string;
		resumeUrl: string;
	};

	export let profile: Profile;
</script>

<div class="w-full h-full">
	<div class="text-center">
		<div class="py-28">
			<h1 class="text-6xl font-bold tracking-wide whitespace-nowrap slide-right">
				{profile.title} <br /><span class="text-5xl">({profile.subtitle})</span>
			</h1>
			<p class="pt-6 text-lg leading-8 text-gray-500 fade-in-scale-in">
				{profile.description}
			</p>

			<div class="mt-12 flex gap-4 items-center justify-center">
				<a
					href={`${profile.resumeUrl}?dl=`}
					download="Niraj-Lama.pdf"
					class="bg-blue-500 w-max rounded-md flex px-8 py-3 justify-center items-center text-lg text-white font-semibold"
					>Resume
					<CloudDownload class="ml-2" />
				</a>
				<a
					href="#contact"
					class="bg-gray-200 w-max rounded-md flex px-8 py-3 justify-center items-center text-lg font-semibold"
				>
					Get in touch
				</a>
			</div>

			<div
				class="mt-10 pt-16 pl-16 w-full max-w-4xl mx-auto overflow-hidden hero-image sm:pt-14 sm:pl-0"
			>
				<img src={profile.imageUrl} alt="" class="w-full h-auto" />
			</div>
		</div>
	</div>
</div>

<style>
	.hero-image {
		perspective: 2000px;
		transform-style: preserve-3d;
	}

	.hero-image img {
		transform: rotateX(35deg) rotateY(-20deg) rotate(5deg) translateZ(120px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
		transform-origin: center;
		-webkit-mask-image: linear-gradient(180deg, #000 70%, transparent);
		mask-image: linear-gradient(180deg, #000 70%, transparent);
		border: 1px solid rgba(0, 0, 0, 0.2);
	}
</style>
