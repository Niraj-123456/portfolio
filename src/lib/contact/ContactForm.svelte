<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section class="mt-8">
	<div class="max-w-2xl m-auto">
		<h1 class="text-2xl font-bold text-center">Contact Form</h1>

		<form class="flex flex-col mt-8 gap-6">
			<div class="flex flex-col gap-2">
				<label for="name" class="text-sm text-gray-500 font-medium">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Enter your name"
					class="p-2 rounded-sm border border-gray-400"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label for="email" class="text-sm text-gray-500 font-medium">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Enter your email"
					class="p-2 rounded-sm border border-gray-400"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label for="message" class="text-sm text-gray-500 font-medium">Message</label>
				<textarea
					name="message"
					id="message"
					rows="3"
					placeholder="Enter your message"
					class="p-2 rounded-sm border border-gray-400"
				></textarea>
			</div>
			<Button type="submit" class="btn btn-primary">Submit</Button>
		</form>
	</div>
</section>
