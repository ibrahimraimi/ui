<script>
    import { page } from '$app/stores';
    import { sidebarItems } from './sidebar-items';
</script>

<aside class="left-0 top-0 w-64">
    <div class="sidebar-container">
        <nav class="sidebar-nav p-4">
        <h2 class="text-xl font-semibold mb-2">hash/ui</h2>

            <ul class="space-y-2">
                {#each sidebarItems as parent}
                <h3 class="text-md font-semibold mb-2">{parent.parent}</h3>
                <div class="flex flex-col gap-2">
                    {#each parent.children as child}
                        <li>
                            <a 
                                href={child.href}
                                data-sveltekit-preload-data="hover"
                                class="block py-2 px-2 rounded-lg transition-colors duration-200 font-light text-sm"
                                class:bg-gray-100={$page.url.pathname === child.href}
                                class:dark:bg-background={$page.url.pathname === child.href}
                            >
                                {child.label}
                            </a>
                        </li>
                    {/each}
                </div>
                {/each}
            </ul>
        </nav>
    </div>
</aside>

<style>
  .sidebar-container {
    height: 100%;
  }
  
  .sidebar-nav {
    position: sticky;
    top: 2rem;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
  }
</style>