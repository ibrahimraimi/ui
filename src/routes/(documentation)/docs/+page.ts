import { browser } from '$app/environment';
import { getBrowserLocales } from '$lib/utils';

export const load = async ({ url }) => {
  let lang = url.searchParams.get('lang');
  if (!lang && browser) {
    const browserLocales = getBrowserLocales();
    if (browserLocales) {
      lang = browserLocales[0];
    }
  }
  return { lang };
};