<script lang="ts">
	import { cn } from '$lib/utils';
	import { getContext } from 'svelte';
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
	const disabled = $derived(accordionItem?.disabled ?? false);

	function handleClick() {
		accordionItem?.toggle();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			accordionItem?.toggle();
		}
	}
</script>

<button
	type="button"
	class={cn(
		'flex w-full items-center justify-between p-4 text-left text-sm font-medium transition-all',
		'hover:bg-accent hover:text-accent-foreground',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
		'disabled:pointer-events-none disabled:opacity-50',
		'[&[data-state=open]>svg]:rotate-180',
		className
	)}
	data-state={isOpen ? 'open' : 'closed'}
	{disabled}
	onclick={handleClick}
	onkeydown={handleKeydown}
	{...restProps}
>
	{@render children()}
	<svg
		class="h-4 w-4 shrink-0 transition-transform duration-200"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		stroke-width="2"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6" />
	</svg>
</button> 