<script lang="ts">
	import { cn } from '$lib/utils';
	let {
		children,
		class: importedClass = '',
		...restProps
	} = $props();
</script>

<p class={cn('text-sm text-muted-foreground', importedClass)} {...restProps}>
	{@render children()}
</p> 