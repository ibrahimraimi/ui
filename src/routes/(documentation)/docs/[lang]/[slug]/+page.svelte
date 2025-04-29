<script>
	import PackageManagerSelector from '$lib/components/PackageManagerSelector.svelte';
  import { onMount, afterUpdate } from 'svelte';
  import { page } from '$app/stores';
  import { invalidate } from '$app/navigation';
  
  export let data;
  
  // Keep track of previous slug/lang to detect changes
  let prevSlug = $page.params.slug;
  let prevLang = $page.params.lang;
  
  // Watch for route changes and invalidate data
  $: if ($page.params.slug !== prevSlug || $page.params.lang !== prevLang) {
    prevSlug = $page.params.slug;
    prevLang = $page.params.lang;
    invalidate(`docs:${$page.params.lang}:${$page.params.slug}`);
  }
  
  // Ensure all headings have IDs for the TOC
  afterUpdate(() => {
    setupHeadingIds();
  });
  
  function setupHeadingIds() {
    // Select all headings without IDs
    const headings = document.querySelectorAll('.markdown-content h1, .markdown-content h2, .markdown-content h3, .markdown-content h4');
    
    headings.forEach((heading, index) => {
      if (!heading.id) {
        // Generate an ID based on the heading text
        const headingText = heading.textContent?.trim().toLowerCase() ?? '';
        const headingId = headingText
          .replace(/[^\w\s-]/g, '') // Remove special characters
          .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
          .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
          
        heading.id = `heading-${headingId || index}`;
      }
    });
  }
  
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
      <!-- Use a key to force component re-creation on slug/lang change -->
      {#key `${data.lang}-${data.slug}`}
        <svelte:component this={data.content} {components} />
      {/key}
  </div>
  <div class="w-1/4 toc-sidebar">
      {#key `${data.lang}-${data.slug}`}
        <svelte:component this={data.toc} />
      {/key}
  </div>
</div>

<style>
  /* Use native CSS instead of importing Tailwind directly in component style */
 
  
  .markdown-content {
    padding: calc(var(--spacing) * 6);
  }
  
  .toc-sidebar {
    position: sticky;
    top: 2rem;
    align-self: flex-start;
  }

  .markdown-content :global(h1),
  .markdown-content :global(h2),
  .markdown-content :global(h3),
  .markdown-content :global(h4) {
    position: relative;
  }

  .markdown-content :global(h1:hover::after),
  .markdown-content :global(h2:hover::after),
  .markdown-content :global(h3:hover::after),
  .markdown-content :global(h4:hover::after) {
    content: "#";
    color: var(--color-muted-foreground);
    position: absolute;
    left: -1.4rem;
    top: 0;
    padding-right: 0.5rem;
    font-weight: normal;
    opacity: 0.6;
  }

  .markdown-content :global(h1) {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .markdown-content :global(h2) {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .markdown-content :global(h3) {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .markdown-content :global(h4) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .markdown-content :global(p) {
    margin-bottom: 1rem;
  }

  .markdown-content :global(ul) {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  .markdown-content :global(pre) {
    padding: 1rem;
    background-color: rgb(243 244 246);
    border-radius: 0.375rem;
    margin-bottom: 1rem;
    overflow-x: auto;
  }

  .markdown-content :global(code) {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  /* Dark mode overrides */
  :global(.dark) .markdown-content :global(pre) {
    background-color: rgb(31 41 55);
  }
</style>