<script>
	import TechStack from '$lib/tech-stack/tech-stack.svelte';
	import { EnvelopeOutline, LinkedinSolid, PhoneOutline } from 'flowbite-svelte-icons';
</script>

<div class="w-full p-10 grid grid-cols-12 gap-4">
	<div class="text-center col-span-8 p-8 glass-card">
		<img src="./profile.svg" alt="profile" class="object-contain object-center" />
		<div class="mt-8">
			<h1 class="text-2xl font-semibold tracking-wide">Niraj Lama(Front-end Developer)</h1>
			<p class="text-sm pt-4 tracking-wide leading-6">
				Passionate about building awesome reponsive web apps and converting ideas into life, I have
				been a front-end developer for more than two years. During this two years, I have learned
				and taught myself about different aspect of creating a user friendly responsive websites
				using different tech stack such as React js, Nextjs, Svelte, Node Js and more.
			</p>
		</div>
	</div>
	<div class="col-span-4 glass-card">Hello world</div>

	<div class="w-full p-8 glass-card col-span-6">
		<h1 class="text-xl font-medium">You can find me on</h1>
		<ul class="text-md mt-4">
			<li class="flex items-center gap-4 mb-2">
				<EnvelopeOutline size="sm" class="text-white/40" />
				<a href="mailto:niraj.02lama@gmail.com"> niraj.02lama@gmail.com </a>
			</li>
			<li class="flex items-center gap-4 mb-2">
				<LinkedinSolid size="sm" class="text-white/40" />
				<a href="https://www.linkedin.com/in/niraj-lama-000/" target="_blank">
					https://www.linkedin.com/in/niraj-lama-000/
				</a>
			</li>
			<li class="flex items-center gap-4 mb-2">
				<PhoneOutline size="sm" class="text-white/40" />
				9843xxxxxx
			</li>
		</ul>
	</div>
	<div class="glass-card col-span-6 p-2 h-[464px]">
		<TechStack />
	</div>
</div>
