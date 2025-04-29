<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		type = 'text',
		id = '',
		error = $bindable(null),
		value = $bindable(''),
		...restProps
	} = $props<{
		type?: string;
		id?: string;
		value?: string;
		error?: string | null;
		[key: string]: any;
	}>();

	let uid = $props.id();
</script>

<div id="input-{uid}" class="w-full">
	<input
		{type}
		{value}
		class={cn(
			'flex h-10 w-full rounded-md border px-3 py-2 text-sm',
			'border-input bg-background',
			'placeholder:text-muted-foreground',
			'file:border-0 file:bg-transparent file:text-sm file:font-medium',
			'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
			'disabled:cursor-not-allowed disabled:opacity-50',
			error && 'border-destructive focus-visible:ring-destructive',
			{ ...restProps?.class }
		)}
		{...restProps}
	/>
</div>
