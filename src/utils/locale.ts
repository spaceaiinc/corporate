// utils/localeUtils.ts (create this file)

import type { Locale } from "@/hooks/useLocaleSwitcher"; // Adjust import path
import { LOCALE_STORAGE_KEY } from "@/hooks/useLocaleSwitcher"; // Adjust import path

/**
 * Determines the preferred locale client-side based on:
 * 1. localStorage ('preferredLocale')
 * 2. Browser language (navigator.language)
 * 3. Default locale
 *
 * @param defaultLocale The fallback locale ('en' or 'ja'). Defaults to 'en'.
 * @returns The preferred locale ('en' | 'ja').
 */
export function getPreferredLocaleClientSide(
  defaultLocale: Locale = "en",
): Locale {
  // Guard against running during SSR / Server Component rendering
  if (
    typeof window === "undefined" ||
    typeof navigator === "undefined" ||
    typeof localStorage === "undefined"
  ) {
    // Cannot determine preference on the server, return default
    return defaultLocale;
  }

  // 1. Check localStorage
  try {
    const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (storedLocale === "en" || storedLocale === "ja") {
      return storedLocale;
    }
  } catch (error) {
    console.error("Failed to read locale preference from localStorage:", error);
    // Proceed to check browser language even if localStorage fails
  }

  // 2. Check browser language
  // Check specifically for Japanese language tags (e.g., 'ja', 'ja-JP')
  if (navigator.language.toLowerCase().startsWith("ja")) {
    return "ja";
  }

  // 3. Fallback to default
  return defaultLocale;
}
