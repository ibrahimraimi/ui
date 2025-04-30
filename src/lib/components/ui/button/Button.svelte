<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	
 interface Props{
	type?: 'button' | 'submit' | 'reset';
	variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
	size?: 'default' | 'sm' | 'lg' | 'icon';
	className?: string;
	class?: string;
	loading?: boolean;
	disabled?: boolean;
	children?: Snippet;
	[key: string]: any;
 }

 let {
	type = 'button',
	variant = 'default',
	size = 'default',
	className = '',
	class: userClass = '',
	loading = false,
	disabled = false,
	children,
	...restProps
 }: Props = $props();

 const combinedClass = userClass || className;

	const variantClassMap = {
		default: 'bg-primary text-primary-foreground hover:opacity-90',
		destructive: 'bg-destructive text-destructive-foreground hover:opacity-90',
		outline: 'border-2 border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
		secondary: 'bg-secondary text-secondary-foreground hover:opacity-80',
		ghost: 'hover:bg-accent hover:text-accent-foreground',
		link: 'text-primary underline-offset-4 hover:underline'
	} as const;

	const sizeClassMap = {
		default: 'h-12 px-6 py-3 text-base',
		sm: 'h-10 px-4 py-2 text-sm',
		lg: 'h-14 px-8 py-4 text-lg',
		icon: 'h-12 w-12 p-3'
	} as const;
</script>

<button
	{type}
	{disabled}
	{...restProps}	
	class={cn(
		'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 cursor-pointer',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
		'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
		variantClassMap[variant],
		sizeClassMap[size],
		combinedClass
	)}
>
	{#if loading}
	<span class="mr-2 animate-spin">&#9696;</span>
	{/if}
	{@render children?.()}
</button>
