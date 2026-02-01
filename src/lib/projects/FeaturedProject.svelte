<script>
	import { cn } from '$lib/utils';
	import { ExternalLink } from 'lucide-svelte';
	import { onMount } from 'svelte';

	const fakeStoreImages = [
		'/images/projects/fake-store/fake-store1.png',
		'/images/projects/fake-store/fake-store2.png',
		'/images/projects/fake-store/fake-store3.png',
		'/images/projects/fake-store/fake-store4.png',
		'/images/projects/fake-store/fake-store5.png',
		'/images/projects/fake-store/fake-store6.png',
		'/images/projects/fake-store/fake-store-admin1.png',
		'/images/projects/fake-store/fake-store-admin2.png',
		'/images/projects/fake-store/fake-store-admin3.png'
	];

	let activeImageIdx = 0;

	onMount(() => {
		const interval = setInterval(() => {
			activeImageIdx = (activeImageIdx + 1) % fakeStoreImages?.length;
		}, 3000);

		return () => clearInterval(interval);
	});
</script>

<section id="projects" class="py-24 px-6 bg-slate-50 overflow-hidden relative">
	<div class="max-w-7xl mx-auto">
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
			<p class="text-slate-500 max-w-2xl">
				A selection of projects I've worked on, ranging from e-commerce platforms to real-time
				communication apps.
			</p>
		</div>

		<div class="grid gap-20">
			<!-- Project 1 -->
			<div class="group grid md:grid-cols-12 gap-8 items-center">
				<div class="w-full aspect-video overflow-hidden project-images md:col-span-7 relative">
					{#each fakeStoreImages as fakeStoreImage, idx}
						<img
							src={fakeStoreImage}
							alt=""
							class={cn('aspect-video w-full h-auto', activeImageIdx === idx ? 'active' : '')}
						/>
					{/each}
				</div>

				<div class="md:col-span-5 space-y-6">
					<div class="flex items-center gap-3">
						<span class="px-3 py-1 text-xs font-bold text-blue-600 bg-blue-100 rounded-full"
							>E-Commerce</span
						>
						<span class="text-slate-400 text-sm">2024</span>
					</div>
					<h3 class="text-3xl font-bold text-slate-900">Fake Store</h3>
					<p class="text-slate-600 leading-relaxed">
						A fully functional e-commerce platform with real-time cart management, Stripe payments,
						and a robust admin dashboard for analytics.
					</p>

					<!-- Tech Badges -->
					<div class="flex flex-wrap gap-2">
						<span
							class="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600"
							>React.js</span
						>
						<span
							class="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600"
							>Redux</span
						>
						<span
							class="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600"
							>Stripe</span
						>
						<span
							class="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600"
							>Tailwind</span
						>
					</div>

					<div class="flex gap-4 pt-2">
						<a
							href="#"
							class="text-sm font-bold text-slate-900 hover:text-primary flex items-center gap-1 border-b-2 border-transparent hover:border-primary transition-all"
						>
							View Live
							<ExternalLink class="w-4 h-3" />
						</a>
						<a
							href="https://github.com/Niraj-123456/fake-store"
							target="_blank"
							class="text-sm font-bold text-slate-900 hover:text-primary flex items-center gap-1 border-b-2 border-transparent hover:border-primary transition-all"
						>
							GitHub Repo
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								data-lucide="github"
								aria-hidden="true"
								class="lucide lucide-github"
								><path
									d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
								></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg
							>
						</a>
					</div>
				</div>
			</div>

			<!-- Project 2 -->
			<div class="group grid md:grid-cols-12 gap-8 items-center">
				<!-- Text First on Desktop for layout variety -->
				<div class="md:col-span-5 order-2 md:order-1 space-y-6">
					<div class="flex items-center gap-3">
						<span class="px-3 py-1 text-xs font-bold text-green-600 bg-green-100 rounded-full"
							>Mobile Web</span
						>
						<span class="text-slate-400 text-sm">2024</span>
					</div>
					<h3 class="text-3xl font-bold text-slate-900">Recipe Finder</h3>
					<p class="text-slate-600 leading-relaxed">
						A mobile-first application for food enthusiasts to discover recipes by ingredients.
						Features create-profile functionality and detailed cooking steps.
					</p>
					<div class="flex flex-wrap gap-2">
						<span
							class="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600"
							>SvelteKit</span
						>
						<span
							class="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600"
							>MealDB API</span
						>
						<span
							class="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600"
							>Tailwind</span
						>
					</div>
					<div class="flex gap-4 pt-2">
						<a
							href="https://foodapp-mobile.vercel.app/"
							target="_blank"
							class="text-sm font-bold text-slate-900 hover:text-primary flex items-center gap-1"
							>View Live
							<ExternalLink class="w-4 h-3" />
						</a>
						<a
							href="https://github.com/Niraj-123456/foodapp"
							target="_blank"
							class="text-sm font-bold text-slate-900 hover:text-primary flex items-center gap-1"
							>GitHub Repo <svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								data-lucide="github"
								aria-hidden="true"
								class="lucide lucide-github"
								><path
									d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
								></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg
							></a
						>
					</div>
				</div>

				<div
					class="md:col-span-7 order-1 md:order-2 flex justify-center relative bg-slate-200 rounded-3xl p-8"
				>
					<!-- Phone Mockup Container -->
					<div
						class="relative w-64 h-[500px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden"
					>
						<!-- Notch -->
						<div
							class="absolute top-0 inset-x-0 h-6 bg-slate-900 z-10 w-32 mx-auto rounded-b-xl"
						></div>
						<!-- Screen -->
						<img
							src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"
							class="w-full h-full object-cover"
							alt="Mobile App"
						/>
						<!-- UI Overlay -->
						<div class="absolute bottom-10 left-4 right-4 text-white text-center">
							<h4 class="text-2xl font-bold">Get Cooking</h4>
							<button
								class="mt-4 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold w-full"
								>Start Now</button
							>
						</div>
					</div>
				</div>
			</div>

			<!-- Project 3 -->
			<div class="group grid md:grid-cols-12 gap-8 items-center">
				<div class="md:col-span-7 relative p-8">
					<img
						src="/images/projects/chat-app.jpg"
						class="w-full h-full object-cover shadow-sm"
						alt="Chat App"
					/>
				</div>
				<div class="md:col-span-5 space-y-6">
					<div class="flex items-center gap-3">
						<span class="px-3 py-1 text-xs font-bold text-purple-600 bg-purple-100 rounded-full"
							>Real-time</span
						>
						<span class="text-slate-400 text-sm">2023</span>
					</div>
					<h3 class="text-3xl font-bold text-slate-900">Chat Application</h3>
					<p class="text-slate-600 leading-relaxed">
						Dynamic chat app offering real-time messaging, multimedia sharing, and secure user
						management via Firebase.
					</p>
					<div class="flex flex-wrap gap-2">
						<span
							class="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600"
							>Firebase</span
						>
						<span
							class="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600"
							>React</span
						>
						<span
							class="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600"
							>Shadcn UI</span
						>
					</div>
					<div class="flex gap-4 pt-2">
						<a
							href="#"
							class="text-sm font-bold text-slate-900 hover:text-primary flex items-center gap-1"
							>View Live
							<ExternalLink class="w-4 h-3" />
						</a>
						<a
							href="https://github.com/Niraj-123456/messenger-app"
							target="_blank"
							class="text-sm font-bold text-slate-900 hover:text-primary flex items-center gap-1"
							>GitHub Repo <svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								data-lucide="github"
								aria-hidden="true"
								class="lucide lucide-github"
								><path
									d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
								></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg
							></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.project-images {
		@apply p-2 relative;
	}

	.project-images img {
		@apply absolute opacity-0 -translate-y-[20px] max-w-[95%] h-auto shadow-lg;
	}

	.project-images img.active {
		@apply opacity-100 translate-y-0 transition-all duration-500 ease-in-out;
	}
</style>
