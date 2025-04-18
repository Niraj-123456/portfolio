<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { cn } from '$lib/utils';
	import classname from 'classnames';
	import { Menu } from 'lucide-svelte';
	import { onDestroy, onMount } from 'svelte';

	let top = 0;
	let open = false;

	const routes = [
		{ path: '/', name: 'Home' },
		{ path: '#about', name: 'About' },
		{ path: '#contact', name: 'Contact' },
		{ path: '#projects', name: 'Projects' }
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
		'w-full py-4 px-4 z-10 sticky top-0 border-b-2 border-opacity-0 transition-all ease-in-out duration-200 sm:px-8 lg:px-0',
		top > 0 ? 'border-opacity-100 bg-[#ffffffab] backdrop-blur-md backdrop-saturate-[180%]' : ''
	)}
>
	<div class="flex items-center mx-auto justify-between max-w-7xl">
		<div
			class="hidden text-gray-900 px-1 font-bold text-lg border-l-2 border-l-gray-900 border-b-2 border-b-gray-900 sm:block"
		>
			N
		</div>
		<nav class="hidden justify-end items-center sm:flex">
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

		<div class="hidden sm:block">
			<a
				href="#contact"
				class="py-3 bg-primary text-white px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-primary/80"
				>Contact</a
			>
		</div>

		<Button
			on:click={() => (open = true)}
			variant={'ghost'}
			class="block cursor-pointer w-8 h-8 rounded-md p-1 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-600 focus:bg-gray-200 focus:text-gray-600 sm:hidden"
		>
			<Menu />
		</Button>
	</div>
</header>

<Sheet.Root bind:open>
	<Sheet.Content side="left">
		<Sheet.Header>
			<Sheet.Title class="w-max"
				><div
					class="flex justify-start text-gray-900 px-1 font-bold text-lg border-l-2 border-l-gray-900 border-b-2 border-b-gray-900"
				>
					N
				</div></Sheet.Title
			>
			<Sheet.Description>
				<div class="mt-4">
					<ul class="flex flex-col items-start">
						{#each routes as route}
							<li
								class={classname(
									'w-[118%] px-6 text-start transition-all duration-200 ease-in-out text-md py-2 -mx-6 rounded-sm cursor-pointer hover:bg-white/10',
									$page.url.pathname === route.path ? 'font-semibold text-black' : ''
								)}
							>
								<a href={route.path}>{route.name}</a>
							</li>
						{/each}
					</ul>
				</div>
			</Sheet.Description>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>
