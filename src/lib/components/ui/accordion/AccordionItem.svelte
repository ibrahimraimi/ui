<script lang="ts">
	import { cn } from '$lib/utils';
	import { getContext, setContext } from 'svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		value: string;
		disabled?: boolean;
		class?: string;
		children: Snippet;
		[key: string]: any;
	}

	let {
		value,
		disabled = false,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	const accordion = getContext<{
		isItemOpen: (value: string) => boolean;
		handleValueChange: (value: string) => void;
	}>('accordion');

	setContext('accordionItem', {
		value,
		get isOpen() {
			return accordion?.isItemOpen(value) ?? false;
		},
		disabled,
		toggle: () => {
			if (!disabled) {
				accordion?.handleValueChange(value);
			}
		}
	});
</script>

<div
	class={cn('border border-border rounded-lg', className)}
	{...restProps}
>
	{@render children()}
</div> 