<script lang="ts">
	import { Button } from '$lib/components/ui';

	import { ArrowRight } from 'lucide-svelte';
</script>

<div class="container mx-auto px-4 py-12 sm:px-6 md:py-24">
	<section class="grid gap-6 text-center">
		<h1 class="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">hash/ui</h1>
		<p class="mx-auto max-w-[42rem] text-muted-foreground md:text-xl">
			A collection of reusable, accessible and beautiful UI components for your SvelteKit projects.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<a href="/components">
				<Button size="lg">
					View Components <ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</a>
			<a href="/form-example">
				<Button size="lg" variant="outline">Try Form Example</Button>
			</a>
		</div>
	</section>

	<section class="grid gap-12 py-12 md:py-24">
		<div class="grid gap-4 text-center">
			<h2 class="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Features</h2>
			<p class="mx-auto max-w-[42rem] text-muted-foreground">
				Designed with modern web standards and best practices.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<div class="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-xs">
				<div class="flex flex-col gap-2">
					<h3 class="text-lg font-semibold">Responsive Design</h3>
					<p class="text-muted-foreground">
						All components are designed to work flawlessly across all screen sizes and devices.
					</p>
				</div>
			</div>
			<div class="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-xs">
				<div class="flex flex-col gap-2">
					<h3 class="text-lg font-semibold">Accessibility</h3>
					<p class="text-muted-foreground">
						Built with accessibility in mind, ensuring everyone can use your application.
					</p>
				</div>
			</div>
			<div class="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-xs">
				<div class="flex flex-col gap-2">
					<h3 class="text-lg font-semibold">Customizable</h3>
					<p class="text-muted-foreground">
						Easily customize components to match your brand and design requirements.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>
