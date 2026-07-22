<script lang="ts">
	let firstName = '';
	let lastName = '';
	let email = '';
	let phoneNumber = '';
	let message = '';
	let firstNameError = '';
	let lastNameError = '';
	let emailError = '';
	let messageError = '';
	let isSubmitting = false;
	let submissionSuccess = false;

	const handleFormValidation = () => {
		let isValid = true;
		if (!firstName.trim()) {
			isValid = false;
			firstNameError = 'First name is required.';
		}
		if (!lastName.trim()) {
			isValid = false;
			lastNameError = 'Last name is required.';
		}
		if (!email.trim()) {
			isValid = false;
			emailError = 'Email is required.';
		} else if (!/^\S+@\S+\.\S+$/.test(email)) {
			isValid = false;
			emailError = 'Please enter a valid email address.';
		}
		if (!message.trim()) {
			isValid = false;
			messageError = 'Message is required.';
		}
		return isValid;
	};

	const resetValidationErrors = () => {
		firstNameError = '';
		lastNameError = '';
		emailError = '';
		messageError = '';
	};

	const resetForm = () => {
		firstName = '';
		lastName = '';
		email = '';
		phoneNumber = '';
		message = '';
	};

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		submissionSuccess = false;
		resetValidationErrors();
		if (!handleFormValidation()) {
			return;
		}

		const formData = {
			firstName,
			lastName,
			email,
			phoneNumber,
			message
		};
		isSubmitting = true;

		try {
			const res = await fetch(`https://formspree.io/f/xkodvjye`, {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await res.json();
			console.log('Form submitted successfully:', data);
			resetForm();
			submissionSuccess = true;
		} catch (error) {
			console.error('Error submitting form:', error);
		} finally {
			isSubmitting = false;
		}
	};
</script>

<section id="contact" class="py-24 px-6 bg-white">
	<div class="max-w-3xl mx-auto">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-slate-900">Let's work together</h2>
			<p class="text-slate-500 mt-4">
				Have a project in mind or just want to say hi? I'm currently open for new opportunities.
			</p>
		</div>

		<form on:submit={handleSubmit} class="space-y-6 bg-white">
			<div class="grid md:grid-cols-2 gap-6">
				<div class="space-y-2">
					<label for="firstName" class="text-sm font-semibold text-slate-700">First Name</label>
					<input
						bind:value={firstName}
						name="firstName"
						type="text"
						placeholder="John"
						class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50"
					/>
					{#if firstNameError}
						<p class="text-red-500 text-sm">{firstNameError}</p>
					{/if}
				</div>
				<div class="space-y-2">
					<label for="lastName" class="text-sm font-semibold text-slate-700">Last Name</label>
					<input
						bind:value={lastName}
						name="lastName"
						type="text"
						placeholder="Doe"
						class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50"
					/>
					{#if lastNameError}
						<p class="text-red-500 text-sm">{lastNameError}</p>
					{/if}
				</div>
			</div>
			<div class="grid md:grid-cols-2 gap-6">
				<div class="space-y-2">
					<label for="email" class="text-sm font-semibold text-slate-700">Email</label>
					<input
						bind:value={email}
						name="email"
						type="email"
						placeholder="john@example.com"
						class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50"
					/>
					{#if emailError}
						<p class="text-red-500 text-sm">{emailError}</p>
					{/if}
				</div>
				<div class="space-y-2">
					<label for="phoneNumber" class="text-sm font-semibold text-slate-700">Phone Number</label>
					<input
						bind:value={phoneNumber}
						name="phoneNumber"
						type="text"
						placeholder="Enter phone number"
						class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50"
					/>
				</div>
			</div>

			<div class="space-y-2">
				<label for="message" class="text-sm font-semibold text-slate-700">Message</label>
				<textarea
					bind:value={message}
					name="message"
					rows="5"
					placeholder="Tell me about your project..."
					class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 resize-none"
				></textarea>
				{#if messageError}
					<p class="text-red-500 text-sm">{messageError}</p>
				{/if}
			</div>
			{#if submissionSuccess}
				<div class="flex items-center justify-between bg-green-50 px-4 py-3">
					<p class="text-green-500 text-sm">Your message has been sent successfully!</p>
					<button
						type="button"
						on:click={() => (submissionSuccess = false)}
						class="px-1.5 py-0.5 text-xs bg-red-400 text-white rounded hover:bg-red-600 transition-all"
					>
						X
					</button>
				</div>
			{/if}
			<button
				disabled={isSubmitting}
				type="submit"
				class="w-full py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
			>
				Send Message
			</button>
		</form>
	</div>
</section>
