<script>
    // Access metadata from markdown frontmatter
    export let title = '';
    export let description = '';
    let {
        children
    } = $props();
  </script>
  
  <article class="prose dark:prose-invert max-w-none">
    <!-- If title exists in frontmatter, display it -->
    {#if title}
      <h1>{title}</h1>
    {/if}
    
    {#if description}
      <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">{description}</p>
    {/if}
    
    <!-- Markdown content will be slotted here -->
    {@render children()}
  </article>
  
  <style lang="postcss">
    article {
      @apply p-6;
    }
  </style>