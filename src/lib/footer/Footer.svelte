<script>
	import { FacebookIcon, Instagram, Twitter } from 'lucide-svelte';
</script>

<section class="bg-gray-600 w-full py-6 px-8 mt-8">
	<div class="flex items-center justify-between">
		&copy;{`copyright@${new Date().getFullYear()} `}

		<div class="flex items-center gap-4">
			<FacebookIcon class="hover:scale-110 cursor-pointer transition-all duration-200" />
			<Instagram class="hover:scale-110 cursor-pointer transition-all duration-200" />
			<Twitter class="hover:scale-110 cursor-pointer transition-all duration-200" />
		</div>
	</div>
</section>
