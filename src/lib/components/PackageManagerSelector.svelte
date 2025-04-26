<script lang="ts">
  import { Button } from '$lib/components/ui';
  import { writable } from 'svelte/store';
  import CodeBlock from '$lib/components/CodeBlock.svelte';

  export let npm = '';
  export let pnpm = '';
  export let yarn = '';
  export let bun = '';

  const packageManagers = [
    { id: 'npm', label: 'npm', command: npm },
    { id: 'pnpm', label: 'pnpm', command: pnpm },
    { id: 'yarn', label: 'yarn', command: yarn },
    { id: 'bun', label: 'bun', command: bun }
  ].filter(pm => pm.command !== '');

  const activeTab = writable(packageManagers.length > 0 ? packageManagers[0].id : '');

  function setActiveTab(id: string) {
    activeTab.set(id);
  }

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
      .then(() => {
        copied = true;
        setTimeout(() => {
          copied = false;
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  }

  let copied = false;
</script>

<div class="w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 package-manager-selector">
  <div class="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
    {#each packageManagers as pm}
      <Button 
        variant={$activeTab === pm.id ? 'default' : 'ghost'} 
        size="sm" 
        onclick={() => setActiveTab(pm.id)}
        class="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
      >
        {pm.label}
      </Button>
    {/each}
  </div>
  
  <div class="bg-[#24282e] text-gray-200 relative">
    {#each packageManagers as pm}
      {#if $activeTab === pm.id}
        <div class="flex items-center justify-between">
          <CodeBlock code={pm.command} lang="bash" />
          <Button 
            variant="ghost" 
            size="sm"
            class="absolute top-2 right-2 text-gray-200"
            onclick={() => copyToClipboard(pm.command)}
          >
            {#if copied}
              Copied!
            {:else}
              Copy
            {/if}
          </Button>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .rounded-container {
    @apply bg-[#0d1117] rounded-md;
  }
  
  .package-manager-selector :global(pre) {
    padding-bottom: 0!important;
  }
</style>
