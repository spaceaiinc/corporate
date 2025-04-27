"use client"; // Required for hooks using useState, useEffect, localStorage, next/navigation

import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

export type Locale = "en" | "ja";

export const LOCALE_STORAGE_KEY = "preferredLocale";

/**
 * Custom hook for switching locales between 'en' (root path /) and 'ja' (/ja path).
 * Detects the current locale based on the pathname and provides a function
 * to switch to the other locale, preserving the rest of the path.
 * Persists the last selected locale in localStorage.
 *
 * @returns {object} An object containing:
 * - currentLocale: The currently detected locale ('en' | 'ja').
 * - switchLocale: A function to switch to the specified locale.
 */
export function useLocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Determine initial locale based *only* on the current path
  const getCurrentLocaleFromPath = (path: string): Locale => {
    return path.startsWith("/ja") ? "ja" : "en";
  };

  // State to hold the locale derived from the current path
  const [currentLocale, setCurrentLocale] = useState<Locale>(() =>
    getCurrentLocaleFromPath(pathname),
  );

  // Update the derived locale whenever the pathname changes
  useEffect(() => {
    setCurrentLocale(getCurrentLocaleFromPath(pathname));
  }, [pathname]);

  // Function to switch locale
  const switchLocale = useCallback(
    (targetLocale: Locale) => {
      const currentPathLocale = getCurrentLocaleFromPath(pathname);

      // Avoid navigation if already on the target locale
      if (targetLocale === currentPathLocale) {
        console.log(`Already on locale: ${targetLocale}`);
        return;
      }

      // Calculate the path without the current locale prefix (if any)
      let pathWithoutLocale: string;
      if (currentPathLocale === "ja") {
        // Remove '/ja' prefix. Handle the case where the path is exactly '/ja'
        pathWithoutLocale = pathname.substring(3) || "/";
      } else {
        pathWithoutLocale = pathname; // English is at the root, no prefix to remove
      }

      // Construct the new path
      let newPath: string;
      if (targetLocale === "ja") {
        // Add '/ja' prefix. Avoid double slash if pathWithoutLocale is '/'
        newPath = `/ja${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
      } else {
        // targetLocale === 'en'
        newPath = pathWithoutLocale; // Use the path without any locale prefix
      }

      // Persist the *target* locale preference in localStorage
      try {
        localStorage.setItem(LOCALE_STORAGE_KEY, targetLocale);
        // console.log(`Saved preferred locale: ${targetLocale}`);
      } catch (error) {
        console.error(
          "Failed to save locale preference to localStorage:",
          error,
        );
      }

      // Navigate to the new path
      // console.log(
      //   `Switching locale from ${currentPathLocale} to ${targetLocale}, navigating to: ${newPath}`,
      // );
      router.push(newPath);
    },
    [pathname, router],
  ); // Dependencies: pathname and router

  // Function to get the *preferred* locale from localStorage (can be used for initial checks if needed)
  const getPreferredLocale = (): Locale | null => {
    try {
      const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (storedLocale === "en" || storedLocale === "ja") {
        return storedLocale;
      }
    } catch (error) {
      console.error(
        "Failed to read locale preference from localStorage:",
        error,
      );
    }
    return null;
  };

  return {
    currentLocale, // The locale determined by the *current URL path*
    switchLocale,
    getPreferredLocale, // Optional: expose function to get stored preference
  };
}
