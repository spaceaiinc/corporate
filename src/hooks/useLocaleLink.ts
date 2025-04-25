// hooks/useLocaleLink.ts (create this file)
"use client"; // This hook uses client-side logic (useEffect, utils)

import { useState, useEffect } from "react";
import { getPreferredLocaleClientSide } from "@/utils/locale"; // Adjust import path
import type { Locale } from "@/hooks/useLocaleSwitcher"; // Adjust import path

/**
 * Hook to generate a localized href for links based on user preference.
 * It determines the preferred locale on the client-side and prefixes
 * the basePath accordingly ('/ja' for Japanese, root '/' for English).
 *
 * @param basePath The path without any locale prefix (e.g., "/about", "/products/1"). Use "/" for the homepage.
 * @returns The localized href string (e.g., "/ja/about" or "/about").
 */

export function useLocaleLink(basePath: string): string {
  // Default locale for initial state / server render guess
  const defaultLocale: Locale = "en"; // Keep this if needed elsewhere, or remove if only for initial state

  // Initial state can be simplified because defaultLocale is currently always 'en'.
  // The useEffect will correct it on the client based on the actual preferred locale.
  const [localizedHref, setLocalizedHref] = useState<string>(basePath); // Simplified initializer

  useEffect(() => {
    // Determine the actual preferred locale on the client
    // Pass the 'defaultLocale' variable here in case getPreferredLocaleClientSide needs it
    const preferredLocale = getPreferredLocaleClientSide(defaultLocale);

    let finalHref: string;
    if (preferredLocale === "ja") {
      // Add /ja prefix, handle root case
      finalHref = `/ja${basePath === "/" ? "" : basePath}`;
    } else {
      // 'en'
      // Use the base path directly
      finalHref = basePath;
    }

    // Update state only if the calculated href is different
    // from the current state. This prevents infinite loops if the preferred locale
    // matches the initial state guess.
    if (finalHref !== localizedHref) {
      setLocalizedHref(finalHref);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basePath, localizedHref]); // Add localizedHref dependency to correctly compare against the current state

  return localizedHref;
}
