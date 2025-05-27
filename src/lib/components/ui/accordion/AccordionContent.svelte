<script lang="ts">
	import { cn } from '$lib/utils';
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
		[key: string]: any;
	}

	let {
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	const accordionItem = getContext<{
		value: string;
		isOpen: boolean;
		disabled: boolean;
		toggle: () => void;
	}>('accordionItem');

	const isOpen = $derived(accordionItem?.isOpen ?? false);
</script>

{#if isOpen}
	<div
		class={cn(
			'overflow-hidden text-sm',
			className
		)}
		data-state="open"
		in:slide={{ duration: 200 }}
		out:slide={{ duration: 200 }}
		{...restProps}
	>
		<div class="p-4 pt-0">
			{@render children()}
		</div>
	</div>
{/if}