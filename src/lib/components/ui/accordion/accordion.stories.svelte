<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '.';

	const { Story } = defineMeta({
		title: 'Components/Accordion',
		component: Accordion,
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	{#snippet children()}
		<Accordion>
			<AccordionItem value="what">
				<AccordionTrigger>What does it do?</AccordionTrigger>
				<AccordionContent>
					This is the default accordion, it only allows one element to be open at a time and its not
					collapsible.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="second">
				<AccordionTrigger>This is an accordion trigger</AccordionTrigger>
				<AccordionContent>This is the accordion content.</AccordionContent>
			</AccordionItem>
		</Accordion>
	{/snippet}
</Story>

<Story name="With value prop" args={{ value: 'first' }}>
	{#snippet children(args)}
		<Accordion {...args}>
			<AccordionItem value="first">
				<AccordionTrigger>What does it do</AccordionTrigger>
				<AccordionContent>
					This prop lets you set the default accordion content to be open i.e. This one.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="second">
				<AccordionTrigger>This is an accordion trigger</AccordionTrigger>
				<AccordionContent>This is the accordion content.</AccordionContent>
			</AccordionItem>
		</Accordion>
	{/snippet}
</Story>

<Story name="With type and collapsible prop " args={{ type: 'multiple', collapsible: true }}>
	{#snippet children(args)}
		<Accordion {...args}>
			<AccordionItem value="first">
				<AccordionTrigger>What does it do</AccordionTrigger>
				<AccordionContent>
					The type prop lets you set how many accordion content can be open at the same time i.e.
					'single' or 'multiple'. <br />
					The collapsible prop lets you determine if the the uncollapsed content can be collapsed manually
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="second">
				<AccordionTrigger>This is an accordion trigger</AccordionTrigger>
				<AccordionContent>This is the accordion content.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="third">
				<AccordionTrigger>This is an accordion trigger</AccordionTrigger>
				<AccordionContent>This is the accordion content.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="fourth">
				<AccordionTrigger>This is an accordion trigger</AccordionTrigger>
				<AccordionContent>This is the accordion content.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="fifth">
				<AccordionTrigger>This is an accordion trigger</AccordionTrigger>
				<AccordionContent>This is the accordion content.</AccordionContent>
			</AccordionItem>
		</Accordion>
	{/snippet}
</Story>
