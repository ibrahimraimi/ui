<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  
  // Theme store with persisted value
  const theme = writable('system');
  
  // Initialize theme based on local storage and system preference
  onMount(() => {
    // Check for saved theme preference or use system default
    const savedTheme = localStorage.getItem('theme') || 'system';
    theme.set(savedTheme);
    
    // Apply the theme
    applyTheme(savedTheme);
    
    // Watch for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if ($theme === 'system') {
        updateTheme('system');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  });
  
  // Update theme in localStorage and apply it
  function updateTheme(newTheme) {
    theme.set(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  }
  
  // Apply theme to document
  function applyTheme(selectedTheme) {
    const isDark = 
      selectedTheme === 'dark' || 
      (selectedTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
</script>

<div class="flex items-center gap-2">
  <button
    class="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 {$theme === 'light' ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground'}"
    onclick={() => updateTheme('light')}
    aria-label="Light mode"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
  </button>
  
  <button
    class="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 {$theme === 'system' ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground'}"
    onclick={() => updateTheme('system')}
    aria-label="System theme"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>
  </button>
  
  <button
    class="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 {$theme === 'dark' ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground'}"
    onclick={() => updateTheme('dark')}
    aria-label="Dark mode"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
  </button>
</div> 