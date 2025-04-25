<script lang="ts">
	import '../../app.css';

	import { page } from '$app/state';
	import { ToastsContainer } from '$lib/components/ui';
</script>

<svelte:head>
	<title>hash/ui</title>
	<meta
		name="description"
		content="A collection of reusable, accessible, and beautiful UI components for your SvelteKit projects."
	/>
	<meta name="keywords" content="Svelte, UI components, hash/ui, web development" />
	<meta name="author" content="Ibrahim Raimi" />
	<meta property="og:title" content="hash/ui - A Collection of Reusable UI Components" />
	<meta
		property="og:description"
		content="A collection of reusable, accessible, and beautiful UI components for your SvelteKit projects."
	/>
	<meta property="og:image" content="/og.png" />
	<meta property="og:url" content="https://ui.ibrahimraimi.com" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="hash/ui - A Collection of Reusable UI Components" />
	<meta
		name="twitter:description"
		content="A collection of reusable, accessible, and beautiful UI components for your SvelteKit projects."
	/>
	<meta name="twitter:image" content="/og.png" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<div class="container relative z-20 mx-auto px-4 sm:px-6">
		<div class="fixed left-1/2 top-6 z-50 w-full max-w-3xl -translate-x-1/2">
			<header
				class="shadow-glass rounded-full border-2 border-gray-200 bg-card/30 px-4 backdrop-blur-md sm:px-6"
			>
				<div class="flex h-12 items-center">
					<nav class="flex flex-1 items-center justify-center gap-4 text-sm sm:gap-6">
						<a
							href="/"
							class="font-medium transition-all duration-300 hover:text-primary {page.url
								.pathname === '/'
								? 'text-foreground'
								: 'text-foreground/60'}"
						>
							Home
						</a>
						<a
							href="/components"
							class="font-medium transition-all duration-300 hover:text-primary {page.url
								.pathname === '/components'
								? 'text-foreground'
								: 'text-foreground/60'}"
						>
							Components
						</a>
						<a
							href="/form-example"
							class="font-medium transition-all duration-300 hover:text-primary {page.url
								.pathname === '/form-example'
								? 'text-foreground'
								: 'text-foreground/60'}"
						>
							Form Example
						</a>
						<a
							href="/docs"
							class="font-medium transition-all duration-300 hover:text-primary {page.url
								.pathname === '/docs'
								? 'text-foreground'
								: 'text-foreground/60'}"
						>
							Documentation
						</a>
						<a
							href="https://github.com/ibrahimraimi/ui"
							target="_blank"
							rel="noreferrer"
							class="font-medium text-foreground/60 transition-all duration-300 hover:text-primary"
						>
							GitHub
						</a>
					</nav>
				</div>
			</header>
		</div>
	</div>

	<main class="flex-1 bg-background pt-20">
		<slot />
	</main>

	<footer class="border-t border-border py-6 bg-background">
		<div class="container mx-auto flex justify-center px-4 sm:px-6">
			<p class="text-sm text-foreground/60">
				&copy; {new Date().getFullYear()} hash/ui. All rights reserved.
			</p>
		</div>
	</footer>

	<ToastsContainer position="bottom-right" />
</div>
