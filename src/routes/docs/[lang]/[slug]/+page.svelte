<script>
    export let data;
  </script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>
  
  <div class="markdown-content prose dark:prose-invert max-w-none">
    <svelte:component this={data.content} />
  </div>
  
  <style lang="postcss">
    .markdown-content {
      @apply p-6;
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