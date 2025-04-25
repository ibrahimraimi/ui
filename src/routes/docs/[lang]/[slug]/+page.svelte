<script>
    export let data;
  </script>
  
  <div class="markdown-content prose dark:prose-invert max-w-none">
    <svelte:component this={data.content} />
  </div>
  
  <style lang="postcss">
    .markdown-content {
      @apply p-6;
    }
    
    .markdown-content :global(a) {
      @apply text-blue-600 dark:text-blue-400 hover:underline;
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
  </style>