<script>
	import { FacebookIcon, Instagram, Twitter } from 'lucide-svelte';
</script>

<section class="w-full py-8 mt-12 border-t border-gray-300">
	<div class="max-w-7xl mx-auto">
		<div class="flex gap-48">
			<div>
				<div
					class="text-gray-900 px-1 font-bold text-lg border-l-2 border-l-gray-900 border-b-2 border-b-gray-900"
				>
					N
				</div>
			</div>

			<div class="flex gap-48">
				<div>
					<h2 class="font-bold p-0">Projects</h2>
					<ul
						class="flex flex-col gap-2 mt-2 *:text-sm *:text-gray-800 *:cursor-pointer hover:[&>*]:text-gray-600"
					>
						<li>Fake Store</li>
						<li>Recipe App</li>
						<li>Chat App</li>
						<li>Next Login</li>
					</ul>
				</div>
				<div>
					<h2 class="font-bold p-0">More</h2>
					<ul class="flex flex-col gap-2 mt-2 *:text-sm *:text-gray-800 *:cursor-pointer">
						<li>About</li>
						<li>Blogs</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-4 mt-4">
			<div
				class="flex items-center gap-3 *:text-gray-600 *:cursor-pointer *:transition-all *:duration-300 *:ease-in-out hover:[&>*]:scale-110 hover:[&>*]:text-gray-800"
			>
				<FacebookIcon />
				<Instagram />
				<Twitter />
			</div>

			<p class="text-sm text-gray-700">
				&copy;{` ${new Date().getFullYear()}, Niraj Lama`}
			</p>
		</div>
	</div>
</section>
