<script lang="ts">
	import { cn } from '$lib/utils';
	import { setContext } from 'svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		type?: 'single' | 'multiple';
		collapsible?: boolean;
		value?: string | string[];
		onValueChange?: (value: string | string[]) => void;
		class?: string;
		children: Snippet;
		[key: string]: any;
	}

	let {
		type = 'single',
		collapsible = false,
		value = $bindable(type === 'single' ? '' : []),
		onValueChange,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	function handleValueChange(itemValue: string) {
		if (type === 'single') {
			const newValue = value === itemValue && collapsible ? '' : itemValue;
			value = newValue;
			onValueChange?.(newValue);
		} else {
			const currentValues = Array.isArray(value) ? value : [];
			const newValues = currentValues.includes(itemValue)
				? currentValues.filter(v => v !== itemValue)
				: [...currentValues, itemValue];
			value = newValues;
			onValueChange?.(newValues);
		}
	}

	function isItemOpen(itemValue: string): boolean {
		if (type === 'single') {
			return value === itemValue;
		}
		return Array.isArray(value) && value.includes(itemValue);
	}

	setContext('accordion', {
		isItemOpen,
		handleValueChange
	});
</script>

<div
	class={cn('space-y-2', className)}
	{...restProps}
>
	{@render children()}
</div> 