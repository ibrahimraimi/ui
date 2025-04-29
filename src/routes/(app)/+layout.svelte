<script lang="ts">
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import '../../app.css';

	import { ToastsContainer } from '$lib/components/ui';
</script>


	<main class="flex-1 bg-background pt-6">
		<slot />
	</main>

	<SiteFooter />

	<ToastsContainer position="bottom-right" />