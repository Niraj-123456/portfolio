<script>
	import { MailIcon, LinkedinIcon, PhoneCallIcon, CloudDownload } from 'lucide-svelte';
</script>

<div class="w-full h-full">
	<div class="flex items-center">
		<div class="py-32">
			<h1 class="text-6xl font-semibold tracking-wide leading-tight whitespace-nowrap">
				Hi, I'm Niraj Lama <br />(I'm a Software Engineer)
			</h1>
			<p class="pt-4 text-xl max-w-7xl w-full leading-8 text-gray-600">
				Passionate about building awesome reponsive web apps and converting ideas into life, I have
				been a front-end developer for more than two years. During this two years, I have learned
				and taught myself about different aspect of creating a user friendly responsive websites
				using different tech stack such as React js, Nextjs, Svelte, Node Js and more.
			</p>

			<div class="mt-10 flex gap-4 items-center">
				<a
					href="/documents/Niraj-Lama-Resume.pdf"
					download="Niraj-Lama.pdf"
					class="btn btn-primary text-lg text-white"
					>Download Resume
					<span>
						<CloudDownload />
					</span>
				</a>
			</div>
		</div>

		<img src="/images/hero.png" alt="profile" class="w-full h-full object-contain object-center" />
	</div>
</div>
