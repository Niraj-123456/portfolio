<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { contactEndpoint } from '$lib/data/portfolio';
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
	let submissionError = '';

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
		submissionError = '';
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
			const res = await fetch(contactEndpoint, {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (!res.ok) throw new Error('Unable to submit the form.');
			resetForm();
			submissionSuccess = true;
		} catch (error) {
			submissionError = 'Something went wrong. Please try again or email me directly.';
		} finally {
			isSubmitting = false;
		}
	};
</script>

<section id="contact" class="px-6 py-24 md:py-32" use:reveal>
	<div class="section-shell grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
		<div>
			<p class="mono mb-4 text-xs uppercase tracking-[.2em] text-slate-500">Start a conversation</p>
			<h2 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
				Have an idea?<br /><span class="text-slate-400">Let's make it real.</span>
			</h2>
			<p class="mt-6 max-w-sm leading-relaxed text-slate-600">
				Have a project in mind or just want to say hi? I'm currently open for new opportunities.
			</p>
		</div>

		<form
			on:submit={handleSubmit}
			class="space-y-6 rounded-2xl border border-slate-300 bg-[var(--surface)] p-6 shadow-sm sm:p-8"
		>
			<div class="grid md:grid-cols-2 gap-6">
				<div class="space-y-2">
					<label for="firstName" class="text-sm font-semibold text-slate-700">First Name</label>
					<input
						id="firstName"
						aria-invalid={!!firstNameError}
						aria-describedby={firstNameError ? 'firstName-error' : undefined}
						bind:value={firstName}
						name="firstName"
						type="text"
						placeholder="John"
						class="form-control"
					/>
					{#if firstNameError}
						<p id="firstName-error" class="text-sm text-red-600">{firstNameError}</p>
					{/if}
				</div>
				<div class="space-y-2">
					<label for="lastName" class="text-sm font-semibold text-slate-700">Last Name</label>
					<input
						id="lastName"
						aria-invalid={!!lastNameError}
						aria-describedby={lastNameError ? 'lastName-error' : undefined}
						bind:value={lastName}
						name="lastName"
						type="text"
						placeholder="Doe"
						class="form-control"
					/>
					{#if lastNameError}
						<p id="lastName-error" class="text-sm text-red-600">{lastNameError}</p>
					{/if}
				</div>
			</div>
			<div class="grid md:grid-cols-2 gap-6">
				<div class="space-y-2">
					<label for="email" class="text-sm font-semibold text-slate-700">Email</label>
					<input
						id="email"
						aria-invalid={!!emailError}
						aria-describedby={emailError ? 'email-error' : undefined}
						bind:value={email}
						name="email"
						type="email"
						placeholder="john@example.com"
						class="form-control"
					/>
					{#if emailError}
						<p id="email-error" class="text-sm text-red-600">{emailError}</p>
					{/if}
				</div>
				<div class="space-y-2">
					<label for="phoneNumber" class="text-sm font-semibold text-slate-700">Phone Number</label>
					<input
						id="phoneNumber"
						bind:value={phoneNumber}
						name="phoneNumber"
						type="text"
						placeholder="Enter phone number"
						class="form-control"
					/>
				</div>
			</div>

			<div class="space-y-2">
				<label for="message" class="text-sm font-semibold text-slate-700">Message</label>
				<textarea
					id="message"
					aria-invalid={!!messageError}
					aria-describedby={messageError ? 'message-error' : undefined}
					bind:value={message}
					name="message"
					rows="5"
					placeholder="Tell me about your project..."
					class="form-control resize-none"
				></textarea>
				{#if messageError}
					<p id="message-error" class="text-sm text-red-600">{messageError}</p>
				{/if}
			</div>
			{#if submissionSuccess}
				<div class="flex items-center justify-between rounded-lg bg-[#e8f7a5] px-4 py-3">
					<p class="text-sm text-slate-900">Your message has been sent successfully!</p>
					<button
						type="button"
						on:click={() => (submissionSuccess = false)}
						aria-label="Dismiss success message"
						class="px-1.5 py-0.5 text-xs text-slate-700 transition-all hover:text-slate-950"
					>
						X
					</button>
				</div>
			{/if}
			{#if submissionError}<p
					role="alert"
					class="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
				>
					{submissionError}
				</p>{/if}
			<button
				disabled={isSubmitting}
				type="submit"
				class="w-full rounded-lg bg-primary py-4 text-lg font-bold text-white shadow-xl shadow-slate-300 transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
			>
				{isSubmitting ? 'Sending…' : 'Send Message'}
			</button>
		</form>
	</div>
</section>
