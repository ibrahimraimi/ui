<script>
    import { scale } from 'svelte/transition';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import '../../app.css';

    let { children } = $props();
</script>

<div class="flex h-screen bg-gray-50">
    <aside class="fixed left-0 top-0 w-64 h-screen bg-white border-r border-gray-200 shadow-sm">
        <div class="h-full flex flex-col">
            <div class="p-4 border-b border-gray-200">
                <h1 class="text-xl font-semibold text-gray-800">Documentation</h1>
            </div>
            <nav class="flex-1 overflow-y-auto p-4">
                <ul class="space-y-2">
                    <li>
                        <a 
                            href="/docs/en/intro" 
                            class="block px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-gray-900"
                            class:bg-gray-100={$page.url.pathname === '/docs/en/intro'}
                        >
                            Introduction
                        </a>
                    </li>
                    <!-- Add more navigation items here -->
                </ul>
            </nav>
        </div>
    </aside>

    <main class="flex-1 ml-64 overflow-y-auto">
        <div class="max-w-4xl mx-auto p-8">
            {@render children()}
        </div>
    </main>
</div>