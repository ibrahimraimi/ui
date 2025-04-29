<script>
	import { page } from '$app/state';
	import { fly, fade } from 'svelte/transition';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Button from './ui/button/Button.svelte';

	let showMobileMenu = false;
	let searchQuery = '';

	const navItems = [
		{ href: '/docs', label: 'Docs' },
		{ href: '/components', label: 'Components' },
		{ href: '/form-example', label: 'Form Example' },
		// { href: '/themes', label: 'Themes' },
		// { href: '/colors', label: 'Colors' }
	];

	function toggleMobileMenu() {
		showMobileMenu = !showMobileMenu;
	}
</script>

<header class="bg-background text-foreground border-b border-border">
	<div class="container flex h-14 items-center">
		<div class="flex items-center mr-4">
			<a href="/" class="flex items-center space-x-2">
				<span class="font-bold">hash/ui</span>
			</a>
		</div>

		<!-- Main Navigation -->
		<nav class="hidden md:flex items-center space-x-6">
			{#each navItems as item}
				<a
					href={item.href}
					class="text-sm font-medium {page.url.pathname === item.href
						? 'text-foreground'
						: 'text-foreground/60 hover:text-foreground'}"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<!-- Right Side Controls -->
		<div class="ml-auto flex items-center space-x-4">
			<!-- Search Field -->
			<div class="hidden lg:flex relative w-60">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-4 w-4 text-muted-foreground"
					>
						<circle cx="11" cy="11" r="8" />
						<path d="m21 21-4.3-4.3" />
					</svg>
				</div>
				<input
					type="search"
					bind:value={searchQuery}
					class="bg-muted text-muted-foreground w-full pl-10 pr-4 py-1.5 rounded-md text-sm focus:outline-hidden"
					placeholder="Search documentation..."
				/>
				<kbd
					class="pointer-events-none absolute right-2 top-1.5 hidden h-5 select-none items-center rounded border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
				>
					<span class="text-xs">⌘</span>K
				</kbd>
			</div>

		

				
				<ThemeToggle />

					<!-- GitHub Icon -->
			<a
			href="https://github.com/ibrahimraimi/ui"
			target="_blank"
			rel="noreferrer"
			class="hidden lg:flex rounded-md p-2 hover:bg-muted"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-5 w-5"
			>
				<path
					d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
				/>
				<path d="M9 18c-4.51 2-5-2-7-2" />
			</svg>
			<span class="sr-only">GitHub</span>
		</a>

			<!-- Mobile Menu Button -->
			<button
				type="button"
				class="inline-flex md:hidden items-center justify-center rounded-md hover:bg-muted"
				on:click={toggleMobileMenu}
				aria-label="Toggle mobile menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-5 w-5"
				>
					{#if !showMobileMenu}
						<line x1="4" x2="20" y1="12" y2="12" />
						<line x1="4" x2="20" y1="6" y2="6" />
						<line x1="4" x2="20" y1="18" y2="18" />
					{:else}
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					{/if}
				</svg>
			</button>
		</div>
	</div>
</header>

<!-- Mobile Menu -->
{#if showMobileMenu}
	<div
		class="fixed inset-0 top-14 z-50 grid h-[calc(100vh-3.5rem)] grid-flow-row auto-rows-max overflow-auto pb-32 md:hidden bg-background"
		transition:fade={{ duration: 150 }}
	>
		<div class="bg-background border-b border-border shadow-md">
			<nav class="py-4">
				<div class="container px-4 space-y-3">
					<!-- Mobile Search -->
					<div class="relative w-full mb-4">
						<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="h-4 w-4 text-muted-foreground"
							>
								<circle cx="11" cy="11" r="8" />
								<path d="m21 21-4.3-4.3" />
							</svg>
						</div>
						<input
							type="search"
							value={searchQuery}
							on:input={(e) => (searchQuery = e.currentTarget.value)}
							class="bg-muted text-muted-foreground w-full pl-10 pr-4 py-2 rounded-md text-sm focus:outline-hidden"
							placeholder="Search documentation..."
						/>
					</div>

					<!-- Navigation Links -->
					{#each navItems as item, i}
						<div
							transition:fly={{ y: -10, delay: i * 30, duration: 150 }}
							class="group px-2 py-2"
						>
							<a
								href={item.href}
								class="block text-base font-medium {page.url.pathname === item.href
									? 'text-foreground'
									: 'text-foreground/60'}"
								on:click={() => (showMobileMenu = false)}
							>
								{item.label}
							</a>
						</div>
					{/each}
				</div>
			</nav>
		</div>
	</div>
{/if}