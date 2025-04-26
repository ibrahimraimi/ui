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
        const headingText = heading.textContent.trim().toLowerCase()
          .replace(/[^\w\s-]/g, '') // Remove special characters
          .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
          .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
          
        heading.id = `heading-${headingText || index}`;
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
    @apply text-gray-400;
    position: absolute;
    left: -1.4rem;
    top: 0;
    padding-right: 0.5rem;
    font-weight: normal;
    opacity: 0.6;
  }

  .markdown-content :global(h1) {
    @apply text-3xl font-bold mb-6;
  }

  .markdown-content :global(h2) {
    @apply text-2xl font-semibold mt-8 mb-4;
  }

  .markdown-content :global(h3) {
    @apply text-xl font-semibold mt-6 mb-3;
  }

  .markdown-content :global(h4) {
    @apply text-lg font-semibold mt-4 mb-2;
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