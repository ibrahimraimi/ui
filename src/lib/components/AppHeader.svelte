<script>
		import { page } from '$app/state';

	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

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
					<div class="ml-auto">
						<ThemeToggle />
					</div>
				</div>
			</header>