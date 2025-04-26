<script>
	import PackageManagerSelector from '$lib/components/PackageManagerSelector.svelte';
  import { onMount } from 'svelte';
  export let data;
  
  // Ensure all headings have IDs for the TOC
  onMount(() => {
    // Select all headings without IDs
    const headings = document.querySelectorAll('.markdown-content h1, .markdown-content h2, .markdown-content h3, .markdown-content h4');
    
    headings.forEach((heading, index) => {
      if (!heading.id) {
        // Generate an ID based on the heading text
        const headingText = heading.textContent.trim().toLowerCase()
          .replace(/[^\w\s-]/g, '') // Remove special characters
          .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
          .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
          
        heading.id = `heading-${headingText || index}`;
      }
    });
  });
  const components = {
    PackageManagerSelector
  };
</script>

<svelte:head>
<title>{data.meta.title}</title>
<meta property="og:type" content="article" />
<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="markdown-content prose dark:prose-invert max-w-none flex items-start gap-8 ">
  <div class="w-full">
      <svelte:component this={data.content} {components} />
  </div>
  <div class="w-1/4 toc-sidebar">
      <svelte:component this={data.toc} />
  </div>
</div>

<style lang="postcss">
  html {
    scroll-behavior: smooth;
  }
  .markdown-content {
    @apply p-6;
  }
  
  .toc-sidebar {
    @apply sticky top-8 self-start;
  }

  .markdown-content :global(h1) {
    @apply text-3xl font-bold mb-6;
  }

  .markdown-content :global(h2) {
    @apply text-2xl font-semibold mt-8 mb-4;
  }

  .markdown-content :global(p) {
    @apply mb-4;
  }

  .markdown-content :global(ul) {
    @apply list-disc pl-6 mb-4;
  }

  .markdown-content :global(pre) {
    @apply p-4 bg-gray-100 dark:bg-gray-800 rounded mb-4 overflow-x-auto;
  }

  .markdown-content :global(code) {
    @apply font-mono text-sm;
  }
  
</style>