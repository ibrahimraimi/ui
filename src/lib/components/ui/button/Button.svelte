<script lang="ts">
	import { cn } from '$lib/utils';
	import { type Snippet } from 'svelte';

	type buttonType = 'button' | 'submit' | 'reset';
	type buttonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
	type buttonSize = 'default' | 'sm' | 'lg' | 'icon';

	let {
		children,
		type = 'button',
		variant = 'default',
		size = 'default',
		disabled = $bindable(false),
		loading = $bindable(false),
		class: className = '',

		...restProps
	}: {
		children: Snippet;
		type?: buttonType;
		variant?: buttonVariant;
		size?: buttonSize;
		disabled?: boolean;
		loading?: boolean;
		class?: string;
		[key: string]: any;
	} = $props();

	const buttonId = $props.id();
	const variantClassMap = {
		default: 'bg-primary text-primary-foreground hover:opacity-90',
		destructive: 'bg-destructive text-destructive-foreground hover:opacity-90',
		outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
		secondary: 'bg-secondary text-secondary-foreground hover:opacity-80',
		ghost: 'hover:bg-accent hover:text-accent-foreground',
		link: 'text-primary underline-offset-4 hover:underline'
	};

	const sizeClassMap = {
		default: 'h-10 px-4 py-2',
		sm: 'h-9 rounded-md px-3',
		lg: 'h-11 rounded-md px-8',
		icon: 'h-10 w-10'
	};
</script>

<button
	id={buttonId}
	{type}
	class={cn(
		'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
		'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
		'disabled:pointer-events-none disabled:opacity-50',
		variantClassMap[variant],
		sizeClassMap[size],
		className
	)}
	{disabled}
	{...restProps}
>
	{#if loading}
		<span class="mr-2 animate-spin">&#9696;</span>
	{/if}
	{@render children()}
</button>
