<script lang="ts">
	import { cn } from '$lib/utils';
	let {
		children,
		class: importedClass = '',
		...restProps
	} = $props();
</script>

<div class={cn('py-4', importedClass)} {...restProps}>
	{@render children()}
</div> 