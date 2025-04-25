<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { getBrowserLocales, supportedLocales } from '$lib/utils';
  
  export let data;
  const { slug } = data.params;
  
  onMount(() => {
    // Get the user's preferred locale with languageCodeOnly: true
    const userLocales = getBrowserLocales({ languageCodeOnly: true });
    
    // Default to 'en' if no browser locale is available
    let targetLang = 'en';
    
    if (userLocales && userLocales.length > 0) {
      // Check if the detected locale is supported
      const foundLocale = supportedLocales.find(locale => locale.code === userLocales[0]);
      if (foundLocale) {
        targetLang = foundLocale.code;
      }
    }
    
    // Navigate to the appropriate language version
    goto(`/docs/${targetLang}/${slug}`);
  });
</script>

<div class="flex items-center justify-center h-screen">
  <div class="animate-pulse">Loading documentation...</div>
</div> 