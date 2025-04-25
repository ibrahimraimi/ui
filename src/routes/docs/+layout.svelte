<script>
    import { scale } from 'svelte/transition';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import '../../app.css';

    let { children } = $props();
    
 
    // Initialize dark mode from localStorage
    onMount(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            darkMode = true;
            document.documentElement.classList.add('dark');
        }
    });
</script>

<div class="flex h-screen ">
    <aside class="fixed left-0 top-0 w-64 h-screen border-r border-gray-200 shadow-sm ">
        <div class="h-full flex flex-col">
          
            <nav class="flex-1 overflow-y-auto p-4">
                <ul class="space-y-2">
                    <li>
                        <a 
                            href="/docs/en/intro" 
                            class="block px-4 py-2 rounded-lg hover:bg-gray-100  transition-colors duration-200 "
                            class:bg-gray-100={$page.url.pathname === '/docs/en/intro'}
                            class:dark:bg-background={$page.url.pathname === '/docs/en/intro'}
                        >
                            Introduction
                        </a>
                    </li>
                    <!-- Add more navigation items here -->
                </ul>
            </nav>
        </div>
    </aside>

    <main class="flex-1 ml-64">
        <div class="max-w-7xl mx-auto p-8">
            {@render children()}
        </div>
    </main>
</div>