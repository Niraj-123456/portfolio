<script>
	import { CloudDownload } from 'lucide-svelte';
</script>

<div class="w-full h-full">
	<div class="flex items-center">
		<div class="py-32">
			<h1 class="text-6xl font-semibold tracking-wide whitespace-nowrap slide-right">
				Hi, I'm Niraj Lama <br /><span class="text-5xl">(I'm a Software Engineer)</span>
			</h1>
			<p class="pt-4 text-xl max-w-7xl w-full leading-8 text-gray-600 fade-in-scale-in">
				Passionate about building awesome reponsive web apps and converting ideas into life, I have
				been a front-end developer for more than two years. During this two years, I have learned
				and taught myself about different aspect of creating a user friendly responsive websites
				using different tech stack such as React js, Nextjs, Svelte, Node Js and more.
			</p>

			<div class="mt-10 flex gap-4 items-center">
				<a
					href="/documents/Niraj-Lama-Resume.pdf"
					download="Niraj-Lama.pdf"
					class="btn btn-primary text-lg text-white animate-grow"
					>Download Resume
					<span>
						<CloudDownload />
					</span>
				</a>
			</div>
		</div>

		<img
			src="/images/hero.png"
			alt="profile"
			class="w-full h-full object-contain object-center fade-in-scale-in"
		/>
	</div>
</div>

<style>
	.animate-grow {
		width: 15rem;
		animation: grow 1s ease-in-out;
	}

	@keyframes grow {
		from {
			width: 0%;
			opacity: 0;
			font-size: 8px;
		}
		to {
			width: 15rem;
			opacity: 1;
			font-size: 1.125rem;
		}
	}
</style>
