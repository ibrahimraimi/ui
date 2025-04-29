<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		children,
		class: importedClass = '', // using 'class' as a prop name to avoid conflict with Svelte's built-in class attribute since restProps.class will override it
		...restProps
	} = $props<{
		children: Snippet;
		class?: string;
		[key: string]: any;
	}>();
</script>

<div
	class={cn(
		'rounded-lg border bg-card px-6 pb-6 pt-2 text-card-foreground shadow-xs',
		importedClass
	)}
	{...restProps}
>
	{@render children()}
</div>
