<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  
  // Default to English intro page
  onMount(() => {
    goto('/docs/en/intro');
  });
</script>

<div class="flex items-center justify-center h-screen">
  <div class="animate-pulse">Loading documentation...</div>
</div> 