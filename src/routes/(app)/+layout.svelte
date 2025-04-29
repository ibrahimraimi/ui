<script lang="ts">
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import '../../app.css';
	import { ToastsContainer } from '$lib/components/ui';

	let {
		children
	} = $props();
</script>


	<main class="flex-1 bg-background pt-6">
		{@render children()}
	</main>

	<SiteFooter />

	<ToastsContainer position="bottom-right" />