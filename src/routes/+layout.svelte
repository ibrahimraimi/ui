<script lang="ts">
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import '../app.css';

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
	<SiteHeader />

	<main class="flex-1 bg-background pt-6">
		<slot />
	</main>


	<ToastsContainer position="bottom-right" />
</div>
