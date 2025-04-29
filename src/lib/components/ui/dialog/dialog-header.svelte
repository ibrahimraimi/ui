<script lang="ts">
	import { cn } from '$lib/utils';
	let {
		children,
		class: importedClass = '',
		...restProps
	} = $props();	
</script>

<div class={cn('flex flex-col space-y-1.5 text-left', importedClass)} {...restProps}>
	{@render children()}
</div> 