<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import classname from 'classnames';
	import { onDestroy, onMount } from 'svelte';

	let top = 0;

	const routes = [
		{ path: '/', name: 'Home' },
		{ path: '/about', name: 'About' },
		{ path: '/contact', name: 'Contact' },
		{ path: '/projects', name: 'Projects' }
	];

	const handleScroll = () => {
		const target = document.scrollingElement || document.documentElement;

		const { scrollTop } = target;

		top = scrollTop;
	};

	onMount(() => {
		if (browser) document.addEventListener('scroll', handleScroll);
	});

	onDestroy(() => {
		if (browser) document.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class={cn(
		'w-full py-4 z-10 sticky top-0 border-b-2 border-opacity-0 transition-all ease-in-out duration-200',
		top > 0 ? 'border-opacity-100 bg-[#ffffffbf] backdrop-blur-md backdrop-saturate-[180%]' : ''
	)}
>
	<div class="flex items-center mx-auto justify-between max-w-7xl">
		<div
			class="text-gray-900 px-1 font-bold text-lg border-l-2 border-l-gray-900 border-b-2 border-b-gray-900"
		>
			N
		</div>
		<nav class="flex justify-end items-center">
			<ul class="flex items-center gap-4 text-base">
				{#each routes as route}
					<li
						class={classname(
							'transition-all duration-200 ease-in-out py-2 px-4 rounded-sm cursor-pointer hover:bg-white/10',
							$page.url.pathname === route.path ? 'font-semibold' : ''
						)}
					>
						<a href={route.path}>{route.name}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div>
			<Button class="py-5">Contact</Button>
		</div>
	</div>
</header>
