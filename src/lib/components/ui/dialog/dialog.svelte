<script lang="ts">
	import { cn } from '$lib/utils';
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	const dispatch = createEventDispatcher();

	let { 
		open = $bindable(false), 
		closeOnEscape = true,
		closeOnOutsideClick = true,
		className = ''
	} = $props();

	function handleClose() {
		if (open) {
			open = false;
			dispatch('close');
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (closeOnEscape && event.key === 'Escape' && open) {
			handleClose();
		}
	}

	function handleOutsideClick(event: MouseEvent) {
		if (closeOnOutsideClick && event.target === event.currentTarget && open) {
			handleClose();
		}
	}

	// Manage keydown listeners
	$effect(() => {
		if (open) {
			document.addEventListener('keydown', handleKeydown);
		} else {
			document.removeEventListener('keydown', handleKeydown);
		}
	});

	onMount(() => {
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

{#if open}
	<div
		class="fixed inset-0 z-50 bg-background/80 backdrop-blur-xs"
		onclick={handleOutsideClick}
		transition:fade={{ duration: 200 }}
	>
		<div
			class={cn(
				"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg",
				className
			)}
			role="dialog"
			aria-modal="true"
			transition:scale={{ duration: 300, start: 0.95, opacity: 0, easing: cubicOut }}
		>
			<slot {handleClose} />
		</div>
	</div>
{/if} 