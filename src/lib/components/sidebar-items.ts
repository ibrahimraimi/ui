import { browser } from "$app/environment";
import { getBrowserLocales, supportedLocales } from "$lib/utils";
let locale = 'en';
if(browser) {
    const browserLocale = getBrowserLocales({ languageCodeOnly: true })?.[0] ?? 'en';
    if(supportedLocales.find(l => l.code === browserLocale)) {
        locale = browserLocale;
    }
}

export const sidebarItems = [
    {
        parent: 'Getting Started',
        children: [
            {
                label: 'Introduction',
                href: `/docs/${locale}/introduction`
            }
        ]
    },
    {
        parent: 'Components',
        children: [
            {
                label: 'Button',
                href: `/docs/${locale}/button`
            }
        ]
    }
]
