"use client";
import { toSentenceCase } from "@/helpers";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

import logoDark from "@/assets/images/logo-dark.svg";
import logoLight from "@/assets/images/logo-light.svg";
// useRouter は window.location.href を使っているため、不要になります
// import { useRouter } from "next/navigation";
import { useLocaleSwitcher } from "@/hooks/useLocaleSwitcher";

type MenuItem = {
  title: string;
  link: string;
};

const TopNavBar = () => {
  const menuItems: MenuItem[] = [
    {
      title: "Experience",
      link: `#experience`, // Update link for same-page navigation
    },
    {
      title: "Media",
      link: `#media`, // Update link for same-page navigation
    },
  ];

  const navbarRef = useRef<HTMLDivElement>(null);
  const [activation, setActivation] = useState<string>(""); // Initialize empty

  useEffect(() => {
    // Initial activation check and hash scroll handling
    const hash = window.location.hash;
    if (hash) {
      const initialSection = menuItems.find(
        (item) => `#${item.title.toLowerCase()}` === hash
      );
      if (initialSection) {
        setActivation(initialSection.title);
      } else if (menuItems.length > 0) {
        // Default to first item if hash doesn't match or is empty
        setActivation(menuItems[0].title);
      }
      const element = document.querySelector(hash);
      // Use setTimeout to ensure element is available after initial render
      const timeout = setTimeout(() => {
        if (element) {
          element.scrollIntoView({ behavior: "smooth" }); // Use smooth scroll
        }
      }, 100); // Small delay might be needed
      return () => clearTimeout(timeout);
    } else if (menuItems.length > 0) {
      // Activate first item by default if no hash
      setActivation(menuItems[0].title);
    }

    // Scroll listener for sticky navbar and active section highlighting
    const handleScroll = () => {
      activeSection(); // Highlight active section based on scroll position
      if (navbarRef.current) {
        if (window.scrollY >= 80) {
          navbarRef.current.classList.add("nav-sticky");
        } else {
          navbarRef.current.classList.remove("nav-sticky");
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]); // Add menuItems dependency

  const activeSection = () => {
    const scrollY = window.scrollY;
    let newActivation = activation; // Keep current activation if no section matches

    // Iterate from bottom to top to find the current section
    for (let i = menuItems.length - 1; i >= 0; i--) {
      const section = menuItems[i];
      // Use link directly assuming it matches the element ID (#experience, #media)
      const elementId = section.link.substring(1); // remove '#'
      const el: HTMLElement | null = document.getElementById(elementId); // Use derived ID

      // Adjust offset check (e.g., 150 pixels from top)
      if (el && el.offsetTop <= scrollY + 150) {
        newActivation = section.title;
        break; // Found the active section, exit loop
      }
    }
    // Check if activation actually changed before setting state
    if (newActivation !== activation) {
      setActivation(newActivation);
    }
  };

  // Use the custom hook for locale switching
  const { currentLocale, switchLocale } = useLocaleSwitcher();

  const handleSwitch = () => {
    const nextLocale = currentLocale === "en" ? "ja" : "en";
    switchLocale(nextLocale); // Use the hook's function
  };

  return (
    <>
      <header
        ref={navbarRef}
        id="navbar"
        className={cn(
          "fixed",
          "inset-x-0 top-0 z-[60] w-full border-b border-transparent bg-transparent transition-all duration-300 lg:bg-transparent [&.nav-sticky]:bg-transparent",
        )}
      >
        <div className="flex h-full items-center py-4">
          <div className="container">
            <nav className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
              {/* Left Section: Logo/Brand Name */}
              <div className="flex w-full items-center justify-between lg:w-auto">
                <Link
                  href="/"
                  className="text-lg font-semibold text-default-800"
                >
                  {" "}
                  {/* Adjusted link to root, assuming hideyuda is the main page */}
                  Hide Yuda
                </Link>

                {/* Right Section (Mobile Only): Locale Switch + Hamburger Menu */}
                <div className="flex items-center gap-3 lg:hidden">
                  {" "}
                  {/* Apply lg:hidden here */}
                  {/* Mobile Locale Switch Button */}
                  <button
                    onClick={handleSwitch}
                    className={
                      "inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-default-800 transition-colors hover:bg-default-100 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:hover:bg-default-100" // Adjusted styling for consistency
                    }
                    aria-label={`Switch to ${currentLocale === "en" ? "Japanese" : "English"}`}
                  >
                    {currentLocale === "en" ? "JP" : "EN"}
                  </button>
                  {/* Mobile Menu Toggle Button */}
                  <button
                    className="hs-collapse-toggle inline-block" // Removed lg:hidden as parent handles it
                    data-hs-overlay="#mobile-menu"
                    aria-label="Toggle navigation menu"
                  >
                    <LuMenu className="h-7 w-7 text-default-600 hover:text-default-900" />
                  </button>
                </div>
              </div>

              {/* Center/Right Section (Desktop Only): Navigation Links + Locale Switch */}
              <ul className="menu relative mx-auto hidden grow items-center justify-end lg:flex">
                {menuItems.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className={cn(
                        "menu-item mx-2 text-default-800 transition-all duration-300 hover:text-primary [&.active]:text-primary",
                        activation === item.title && "active"
                      )}
                    >
                      {/* Use Link component for client-side navigation to anchors */}
                      <Link
                        className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium capitalize lg:text-base" // Adjusted padding
                        href={item.link} // Link directly to the hash
                        onClick={() => setActivation(item.title)} // Update activation on click for immediate feedback
                      >
                        {toSentenceCase(item.title)}
                      </Link>
                    </li>
                  );
                })}
                {/* Desktop Locale Switch Button */}
                <li className="ms-3 flex items-center">
                  {" "}
                  {/* Added margin start */}
                  <button
                    onClick={handleSwitch}
                    className={
                      "inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-default-800 transition-colors hover:bg-default-100 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:hover:bg-default-100" // Consistent styling
                    }
                    aria-label={`Switch to ${currentLocale === "en" ? "Japanese" : "English"}`}
                  >
                    {currentLocale === "en" ? "JP" : "EN"}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className="hs-overlay fixed bottom-0 left-0 top-0 z-[61] hidden h-screen w-full max-w-[280px] -translate-x-full transform border-r border-default-200 bg-white transition-all [--body-scroll:true] [--overlay-backdrop:true] hs-overlay-open:translate-x-0 dark:border-default-100 dark:bg-default-50" // Increased max-width slightly, enabled backdrop
        tabIndex={-1}
      >
        {/* Mobile Menu Header */}
        <div className="flex h-[74px] items-center justify-between border-b border-dashed border-default-200 px-5 transition-all duration-300 dark:border-default-100">
          {/* Logo in Mobile Menu */}
          <Link href="/" aria-label="Go to homepage">
            <Image
              src={logoDark}
              alt="Site Logo"
              height={32} // Adjusted size
              width={118} // Adjusted size
              className="flex h-8 dark:hidden"
            />
            <Image
              src={logoLight}
              alt="Site Logo"
              height={32} // Adjusted size
              width={118} // Adjusted size
              className="hidden h-8 dark:flex"
            />
          </Link>
          {/* Close Button */}
          <button
            data-hs-overlay="#mobile-menu"
            className="hs-collapse-toggle -me-2 flex h-8 w-8 items-center justify-center rounded-full text-default-500 transition-colors hover:bg-default-100 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-default-300 dark:hover:bg-default-100"
            aria-label="Close navigation menu"
          >
            <LuX size={20} />
          </button>
        </div>

        {/* Mobile Menu Body */}
        <div className="h-[calc(100%-74px)] overflow-y-auto">
          {" "}
          {/* Adjusted height calculation */}
          <nav className="hs-accordion-group flex h-full w-full flex-col flex-wrap p-4">
            <ul className="space-y-1.5">
              {" "}
              {/* Added slightly more space */}
              {menuItems.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={cn(
                      "rounded text-sm font-medium capitalize text-default-700 transition-all duration-300 hover:bg-default-100 hover:text-primary focus:bg-default-100 focus:text-primary dark:text-default-300 dark:hover:bg-default-100 dark:hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary", // Adjusted styling and colors
                      activation === item.title && "active"
                    )}
                  >
                    {/* Use Link and close overlay on click */}
                    <Link
                      className="block w-full px-4 py-2.5"
                      href={item.link}
                      data-hs-overlay="#mobile-menu" // Close overlay on click
                      onClick={() => setActivation(item.title)} // Update activation
                    >
                      {toSentenceCase(item.title)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
