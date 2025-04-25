import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  // Pass slug to the client component for client-side redirection
  return { params };
}) satisfies PageLoad;