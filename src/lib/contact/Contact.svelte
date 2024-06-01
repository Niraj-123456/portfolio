<section class="mt-8">
	<div class="max-w-2xl m-auto">
		<h1 class="text-2xl font-bold text-center">Contact Form</h1>

		<form class="flex flex-col mt-8 gap-6">
			<div class="flex flex-col gap-2">
				<label for="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Enter your name"
					class="p-2 rounded-sm"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label for="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Enter your email"
					class="p-2 rounded-sm"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label for="message">Message</label>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="10"
					placeholder="Enter your message"
					class="p-2 rounded-sm"
				></textarea>
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</section>
