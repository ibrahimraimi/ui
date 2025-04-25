import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines and merges class names with Tailwind CSS support
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds
 */
export function debounce<T extends (...args: any[]) => any>(
	func: T,
	wait: number
): (...args: Parameters<T>) => void {
	let timeout: ReturnType<typeof setTimeout> | null = null;

	return function (...args: Parameters<T>) {
		const later = () => {
			timeout = null;
			func(...args);
		};

		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

/**
 * Formats a date using Intl.DateTimeFormat
 */
export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
	const dateObj = typeof date === 'string' ? new Date(date) : date;

	const defaultOptions: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	};

	return new Intl.DateTimeFormat('en-US', options || defaultOptions).format(dateObj);
}

export function getBrowserLocales(options = {}) {

	const defaultOptions = {
  
	  languageCodeOnly: false,
  
	};
  
	const opt = {
  
	  ...defaultOptions,
  
	  ...options,
  
	};
  
	const browserLocales =
  
	  navigator.languages === undefined
  
		? [navigator.language]
  
		: navigator.languages;
  
	if (!browserLocales) {
  
	  return undefined;
  
	}
  
	return browserLocales.map(locale => {
  
	  const trimmedLocale = locale.trim();
  
	  return opt.languageCodeOnly
  
		? trimmedLocale.split(/-|_/)[0]
  
		: trimmedLocale;
  
	});
  
  }

  export const supportedLocales = [
    {
      code: 'en',
      name: 'English'
    },
	{
		code: 'es',
		name: 'Spanish'
	},
  ]