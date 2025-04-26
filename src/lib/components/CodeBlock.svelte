<script module>
  import { createHighlighterCoreSync } from 'shiki/core';
  import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

  // Import themes and languages
  import githubDark from 'shiki/themes/github-dark.mjs';
  import console from 'shiki/langs/console.mjs';
  import html from 'shiki/langs/html.mjs';
  import css from 'shiki/langs/css.mjs';
  import js from 'shiki/langs/javascript.mjs';

  const shiki = createHighlighterCoreSync({
    engine: createJavaScriptRegexEngine(),
    themes: [githubDark],
    langs: [console, html, css, js]
  });
</script>

<script lang="ts">
  export let code = '';
  export let lang = 'console';

  const generatedHtml = shiki.codeToHtml(code, { 
    lang, 
    theme: githubDark 
  });
</script>

<div class="overflow-hidden rounded-container">
  {@html generatedHtml}
</div>
