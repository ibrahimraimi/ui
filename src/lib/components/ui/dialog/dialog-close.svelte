<script lang="ts">
	import { cn } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	
	const props = $props<{
		size?: 'sm' | 'default';
		className?: string;
		onclick?: () => void;
	}>();

	// Use local state instead of trying to modify props
	let size = $derived(props.size || 'default') as 'sm' | 'default';
	let className = $derived(props.className || '');

	const sizeClass = {
		sm: 'h-5 w-5',
		default: 'h-6 w-6'
	};

	function handleClick() {
		dispatch('click');
        return props.onclick?.();
	}
</script>

<button
	type="button"
	class={cn(
		'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity',
		'hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2',
		className
	)}
	aria-label="Close"
	onclick={handleClick}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={cn(sizeClass[size])}
	>
		<path d="M18 6 6 18" />
		<path d="m6 6 12 12" />
	</svg>
</button> 