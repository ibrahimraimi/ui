<script>
	import { supportedLocales } from '$lib/utils.ts';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { getBrowserLocales } from '$lib/utils';
  
  // Default to English intro page
  onMount(() => {
    // get user locale

    const userLocale = getBrowserLocales({ languageCodeOnly: true });
    console.log("userLocale", userLocale);
    const locale = supportedLocales.find(locale => locale.code === userLocale[0]);
    if (locale) {
      goto(`/docs/${locale.code}/intro`);
    } else {
      goto(`/docs/en/intro`);
    }
    
  });
</script>

<div class="flex items-center justify-center h-screen">
  <div class="animate-pulse">Loading documentation...</div>
</div> 