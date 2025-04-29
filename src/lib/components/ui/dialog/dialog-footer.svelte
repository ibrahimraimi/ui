<script lang="ts">	
	import { cn } from '$lib/utils';
	let {
		children,
		class: importedClass = '',
		...restProps
	} = $props();
</script>

<div class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', importedClass)} {...restProps}>
	{@render children()}
</div> 