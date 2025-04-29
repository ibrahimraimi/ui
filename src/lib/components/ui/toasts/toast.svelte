<script lang="ts">
	import { cn } from '$lib/utils';
	import { fade, fly } from 'svelte/transition';

	import { X } from 'lucide-svelte';
	import type { ToastType } from './toasts.svelte.ts';

	let toastId = $props.id();

	const {
		type = 'default',
		title,
		description,
		duration = 5000,
		closable = true,
		close = () => {},
		class: importedClass = '',
		...restProps
	} = $props<{
		type?: ToastType;
		title: string;
		description?: string;
		duration?: number;
		closable?: boolean;
		close?: () => void;
		class?: string;
		[key: string]: any;
	}>();

	const variantStyles: Record<string, string> = {
		default: 'bg-background border',
		success: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800',
		info: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
		warning: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800',
		error: 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'
	};

	const variantIcons = {
		default: '',
		success: '✓',
		info: 'ℹ',
		warning: '⚠',
		error: '✗'
	};

	let timeoutId: ReturnType<typeof setTimeout>;

	function startTimer() {
		if (duration > 0) {
			timeoutId = setTimeout(() => {
				close();
			}, duration);
		}
	}

	function stopTimer() {
		clearTimeout(timeoutId);
	}

	$effect(() => {
		if (duration) {
			startTimer();
		}
	});
</script>

<div
	id="toast-{toastId}"
	class={cn(
		'pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all',
		variantStyles[type],
		importedClass
	)}
	role="alert"
	onmouseenter={stopTimer}
	onmouseleave={startTimer}
	in:fly={{ y: 50, duration: 300 }}
	out:fade={{ duration: 200 }}
	{...restProps}
>
	<div class="grid gap-1">
		<div class="flex items-center gap-2">
			{#if variantIcons[type]}
				<span class="text-lg">{variantIcons[type]}</span>
			{/if}
			<h5 class="font-medium leading-none tracking-tight">{title}</h5>
		</div>
		{#if description}
			<div class="text-sm opacity-90">{description}</div>
		{/if}
	</div>

	{#if closable}
		<button
			class="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-70 transition-opacity hover:text-foreground hover:opacity-100 focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100"
			onclick={close}
			aria-label="Close toast"
			name="close"
		>
			<X class="h-4 w-4" />
		</button>
	{/if}
</div>
