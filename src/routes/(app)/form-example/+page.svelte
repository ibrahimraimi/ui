<script lang="ts">
	import { CompositeForm, FormField, Button, Toasts } from '$lib/components/ui';

	type FormEvent = { detail: { data: Record<string, string> } };

	// Form state
	let formData = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	// Form errors with proper typing
	let errors: Record<string, string | null> = {
		firstName: null,
		lastName: null,
		email: null,
		password: null,
		confirmPassword: null
	};

	// Form validation
	function validateForm(): boolean {
		let isValid = true;

		// Reset errors
		errors = {
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			confirmPassword: null
		};

		// First name validation
		if (!formData.firstName) {
			errors.firstName = 'First name is required';
			isValid = false;
		}

		// Last name validation
		if (!formData.lastName) {
			errors.lastName = 'Last name is required';
			isValid = false;
		}

		// Email validation
		if (!formData.email) {
			errors.email = 'Email is required';
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = 'Email is invalid';
			isValid = false;
		}

		// Password validation
		if (!formData.password) {
			errors.password = 'Password is required';
			isValid = false;
		} else if (formData.password.length < 8) {
			errors.password = 'Password must be at least 8 characters';
			isValid = false;
		}

		// Confirm password validation
		if (!formData.confirmPassword) {
			errors.confirmPassword = 'Please confirm your password';
			isValid = false;
		} else if (formData.password !== formData.confirmPassword) {
			errors.confirmPassword = 'Passwords do not match';
			isValid = false;
		}

		return isValid;
	}

	// Form submission
	function handleSubmit(event: FormEvent): void {
		const isValid = validateForm();

		if (isValid) {
			// In a real app, you'd submit the form to your backend here
			Toasts.success('Registration successful!', 'Your account has been created.');

			// Reset the form
			formData = {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				confirmPassword: ''
			};
		} else {
			Toasts.error('Registration failed', 'Please check the form for errors.');
		}
	}
</script>

<div class="container mx-auto px-4 py-12 sm:px-6">
	<div class="mx-auto max-w-md">
		<CompositeForm
			onsubmit={handleSubmit}
			title="Create an account"
			description="Fill out the form below to create your account."
			styles={{
				wrapper: 'shadow-md',
				content: 'flex flex-col gap-4'
			}}
		>
			`
			<div class="grid grid-cols-2 gap-4">
				<FormField
					id="firstName"
					label="First name"
					placeholder="First name"
					error={errors.firstName}
					required
				/>

				<FormField
					id="lastName"
					label="Last name"
					placeholder="Last name"
					error={errors.lastName}
					required
				/>
			</div>

			<FormField
				id="email"
				label="Email"
				placeholder="johndoe@gmail.com"
				error={errors.email}
				required
			/>

			<FormField
				id="password"
				label="Password"
				placeholder="Password"
				error={errors.password}
				required
			/>

			<FormField
				id="confirmPassword"
				label="Confirm password"
				placeholder="Confirm password"
				error={errors.confirmPassword}
				required
			/>

			<div class="pt-2">
				<Button type="submit" class="w-full">Create account</Button>
			</div>
			`

			{#snippet footerContent()}
				<p class="text-sm text-muted-foreground">
					Already have an account?
					<a href="/form-example" class="text-primary underline-offset-4 hover:underline">Sign in</a>
				</p>
			{/snippet}
		</CompositeForm>
	</div>
</div>
