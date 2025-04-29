<script lang="ts">
	import { cn } from '$lib/utils';
	let {
		children,
		class: importedClass = '',
		...restProps
	} = $props();	
</script>

<h2 class={cn('text-lg font-semibold leading-none tracking-tight', importedClass)} {...restProps}>
	{@render children()}
</h2> 