<section class="py-10 border-y border-slate-200 bg-white">
	<p class="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
		Tech Stack &amp; Tools
	</p>
	<div class="w-full h-28 overflow-hidden relative marquee-container max-w-7xl mx-auto">
		<div class="w-full h-full flex gap-12 items-center absolute marquee">
			<img src="images/tech-stack/mui.png" alt="Mui" />

			<img src="images/tech-stack/nextjs.png" alt="Nextjs" />

			<img src="images/tech-stack/svelte.png" alt="Svelte" />

			<img src="images/tech-stack/node.png" alt="Nodejs" />

			<img src="images/tech-stack/react.png" alt="React" />

			<img src="images/tech-stack/tailwind.png" alt="Tailwindcss" />

			<img src="images/tech-stack/sass.png" alt="Sass" />

			<img src="images/tech-stack/antd.png" alt="Antd" />

			<img src="images/tech-stack/rest-api.svg" alt="REST" />
		</div>
		<div class="w-full h-full flex gap-12 items-center absolute marquee" style="left: 1264px">
			<img src="images/tech-stack/mui.png" alt="Mui" />

			<img src="images/tech-stack/nextjs.png" alt="Nextjs" />

			<img src="images/tech-stack/svelte.png" alt="Svelte" />

			<img src="images/tech-stack/node.png" alt="Nodejs" />

			<img src="images/tech-stack/react.png" alt="React" />

			<img src="images/tech-stack/tailwind.png" alt="Tailwindcss" />

			<img src="images/tech-stack/sass.png" alt="Sass" />

			<img src="images/tech-stack/antd.png" alt="Antd" />

			<img src="images/tech-stack/rest-api.svg" alt="REST" />
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
