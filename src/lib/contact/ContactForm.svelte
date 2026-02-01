<section id="contact" class="py-24 px-6 bg-white">
	<div class="max-w-3xl mx-auto">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-slate-900">Let's work together</h2>
			<p class="text-slate-500 mt-4">
				Have a project in mind or just want to say hi? I'm currently open for new opportunities.
			</p>
		</div>

		<form on:submit|preventDefault={() => {}} class="space-y-6 bg-white">
			<div class="grid md:grid-cols-2 gap-6">
				<div class="space-y-2">
					<label for="name" class="text-sm font-semibold text-slate-700">Name</label>
					<input
						name="name"
						type="text"
						placeholder="John Doe"
						class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50"
					/>
				</div>
				<div class="space-y-2">
					<label for="email" class="text-sm font-semibold text-slate-700">Email</label>
					<input
						name="email"
						type="email"
						placeholder="john@example.com"
						class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50"
					/>
				</div>
			</div>
			<div class="space-y-2">
				<label for="message" class="text-sm font-semibold text-slate-700">Message</label>
				<textarea
					name="message"
					rows="5"
					placeholder="Tell me about your project..."
					class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 resize-none"
				></textarea>
			</div>
			<button
				class="w-full py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
			>
				Send Message
			</button>
		</form>
	</div>
</section>
