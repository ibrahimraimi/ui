import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const { lang, slug } = params;
  
  try {
    // Dynamically import the markdown file
    const post = await import(`../../content/${lang}/${slug}.svex`);
    
    return {
      content: post.default,
      meta: post.metadata,
      lang,
      slug
    };
  } catch (e) {
    console.error(e);
    throw error(404, `Could not find ${slug} in ${lang}`);
  }
}) satisfies PageLoad;