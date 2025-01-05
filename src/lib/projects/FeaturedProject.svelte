<script>
	import { cn } from '$lib/utils';
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

<section id="projects" class="mt-16 py-4 w-full overflow-hidden relative">
	<h2 class="text-center text-2xl font-bold">Featured Project</h2>

	<div class="flex flex-col gap-8 mt-8 lg:flex-row">
		<div class="w-full aspect-video overflow-hidden project-images">
			{#each fakeStoreImages as fakeStoreImage, idx}
				<img
					src={fakeStoreImage}
					alt=""
					class={cn('aspect-video w-full h-auto', activeImageIdx === idx ? 'active' : '')}
				/>
			{/each}
		</div>

		<div class="w-full">
			<h2>
				<span class="text-xl font-bold"> Fake Store </span>
				<span class="text-gray-500">(Modern E-Commerce platform)</span>
			</h2>

			<div class="pt-2">
				<p class="text-gray-500">
					This project is a fully functional e-commerce website designed to provide users with a
					seamless online shopping experience. Built with modern web technologies, the platform
					offers a responsive and user-friendly interface, ensuring smooth navigation across all
					devices. Users can browse products, add them to their cart, place orders, and complete
					transactions securely using Stripe payment integration.
				</p>
				<br />

				<div class="text-gray-500">
					<p class="text-gray-700"><strong> Key Features: </strong></p>
					<ul class="[&>li>strong]:text-gray-700">
						<li>
							🛒 <strong>Add to Cart:</strong>
							Users can add and manage products in their shopping cart effortlessly.
						</li>
						<li>
							📦 <strong>Place an Order:</strong> A straightforward order placement process with real-time
							order updates.
						</li>
						<li>
							💳 <strong>Stripe Payment Integration:</strong> Secure and reliable payment gateway for
							seamless checkout.
						</li>
						<li>
							🛍️ <strong>Checkout Process:</strong> An intuitive multi-step checkout process for hassle-free
							transactions.
						</li>
						<li>
							📱 <strong>Responsive Design:</strong> Optimized for mobile, tablet, and desktop devices.
						</li>
						<li>
							🔍 <strong> Product Filtering and Search: </strong> Easily search and filter products by
							categories, price, and availability.
						</li>
						<li>
							🧾 <strong>Order Summary:</strong> Detailed order summary before finalizing the purchase.
						</li>
						<li>
							🛠️ <strong>Admin Dashboard:</strong> A robust admin panel for managing products, orders,
							inventory, and user accounts with detailed analytics and reporting tools.
						</li>
					</ul>
				</div>
				<br />

				<div class="text-gray-500">
					<p class="text-gray-700"><strong> Technologies Used:</strong></p>

					<ul class="[&>li>strong]:text-gray-700">
						<li><strong>Frontend:</strong> React.js / Next.js</li>
						<li><strong>Component UI:</strong> shadcn/ui</li>
						<li><strong>Backend:</strong> Node.js / Express.js</li>
						<li><strong>Database:</strong> MongoDB</li>
						<li><strong>Styling:</strong> Tailwind CSS</li>
						<li><strong>Payment Gateway:</strong> Stripe API</li>
					</ul>
				</div>

				<br />
				<p class="text-sm text-gray-500">
					<strong class="text-gray-700">GitHub repo: </strong><a
						href="https://github.com/Niraj-123456/fake-store"
						target="_blank">https://github.com/Niraj-123456/fake-store</a
					>
				</p>
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
