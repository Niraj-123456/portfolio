<script lang="ts">
	import { page } from '$app/stores';
	import classname from 'classnames';

	const routes = [
		{ path: '/', name: 'Home' },
		{ path: '/about', name: 'About' },
		{ path: '/contact', name: 'Contact' },
		{ path: '/projects', name: 'Projects' }
	];
</script>

<header class="w-full py-4 px-32 z-10 flex items-center justify-between">
	<div
		class="textgray-900 py-0.5 px-2 font-bold text-3xl border-l-4 border-l-gray-900 border-b-4 border-b-gray-900"
	>
		N
	</div>
	<nav class="flex justify-end items-center">
		<ul class="flex items-center gap-4 text-lg">
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
</header>
