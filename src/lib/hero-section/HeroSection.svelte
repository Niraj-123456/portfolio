<script>
	import { CloudDownload } from 'lucide-svelte';
</script>

<div class="w-full h-full">
	<div class="text-center">
		<div class="py-28">
			<h1 class="text-6xl font-bold tracking-wide whitespace-nowrap slide-right">
				Hi, I'm Niraj Lama <br /><span class="text-5xl">(I'm a Software Engineer)</span>
			</h1>
			<p class="pt-6 text-lg leading-8 text-gray-500 fade-in-scale-in">
				Passionate about building awesome reponsive web apps and converting ideas into life, I have
				been a front-end developer for more than two years. During this two years, I have learned
				and taught myself about different aspect of creating a user friendly responsive websites
				using different tech stack such as React js, Nextjs, Svelte, Node Js and more.
			</p>

			<div class="mt-12 flex gap-4 items-center justify-center">
				<a
					href="/documents/Niraj-Lama-Resume.pdf"
					download="Niraj-Lama.pdf"
					class="bg-blue-500 w-max rounded-md flex px-8 py-3 justify-center items-center text-lg text-white font-semibold"
					>Resume
					<CloudDownload class="ml-2" />
				</a>
				<a
					href="/documents/Niraj-Lama-Resume.pdf"
					download="Niraj-Lama.pdf"
					class="bg-gray-200 w-max rounded-md flex px-8 py-3 justify-center items-center text-lg font-semibold"
				>
					Get in touch
				</a>
			</div>
		</div>
	</div>
</div>
