<script>
	import DocsSidebar from '$lib/components/DocsSidebar.svelte';
    import { scale } from 'svelte/transition';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import '../../../app.css';

    let { children } = $props();
    
 
    // // Initialize dark mode from localStorage
    // onMount(() => {
    //     const savedDarkMode = localStorage.getItem('darkMode');
    //     if (savedDarkMode === 'true') {
    //         darkMode = true;
    //         document.documentElement.classList.add('dark');
    //     }
    // });
</script>

<div class="flex h-screen max-w-7xl mx-auto">
   <DocsSidebar />

    <main class="flex-1 w-full">
        <div class="mx-auto p-8 w-full">
            {@render children()}
        </div>
    </main>
</div>