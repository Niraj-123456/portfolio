<script>
	import { MailIcon, LinkedinIcon, PhoneCallIcon } from 'lucide-svelte';
</script>

<div class="w-full text-center relative">
	<div class="relative w-full h-screen overflow-hidden opacity-50">
		<img
			src="/images/hero.svg"
			alt="profile"
			class="object-cover object-top w-full h-full absolute top-0 left-0"
		/>
	</div>
	<div class="absolute top-1/3 left-1/2 -translate-x-1/2 translate-y-0">
		<h1 class="text-6xl font-semibold tracking-wide whitespace-nowrap">
			Niraj Lama <br />(Front-end Developer)
		</h1>
		<p class="pt-8 text-xl">
			Passionate about building awesome reponsive web apps and converting ideas into life, I have
			been a front-end developer for more than two years. During this two years, I have learned and
			taught myself about different aspect of creating a user friendly responsive websites using
			different tech stack such as React js, Nextjs, Svelte, Node Js and more.
		</p>
		<ul class="text-md mt-6 flex gap-8 justify-center">
			<li
				class="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-white/70"
			>
				<MailIcon />
				<a href="mailto:niraj.02lama@gmail.com"> niraj.02lama@gmail.com </a>
			</li>
			<li
				class="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-white/70"
			>
				<LinkedinIcon />
				<a href="https://www.linkedin.com/in/niraj-lama-000/" target="_blank">
					https://www.linkedin.com/in/niraj-lama-000/
				</a>
			</li>
			<li
				class="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-white/70"
			>
				<PhoneCallIcon />
				<a href="tel:9841752015"> 9843xxxxxx </a>
			</li>
		</ul>
		<div class="mt-8 flex gap-4 items-center justify-center">
			<a
				href="/documents/Niraj-Lama-Resume.pdf"
				download="Niraj-Lama.pdf"
				class="btn btn-primary text-lg text-white">Download Resume</a
			>
			<a href="/contact" class="btn btn-outline text-lg text-white">Contact</a>
		</div>
	</div>
</div>
