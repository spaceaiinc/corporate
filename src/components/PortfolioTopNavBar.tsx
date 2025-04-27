"use client";
import { toSentenceCase } from "@/helpers";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { usePathname } from "next/navigation"; // Keep usePathname

import logoDark from "@/assets/images/logo-dark.svg";
import logoLight from "@/assets/images/logo-light.svg";
import { useLocaleSwitcher } from "@/hooks/useLocaleSwitcher";

type MenuItem = {
  title: string;
  link: string;
};

const TopNavBar = () => {
  const pathname = usePathname();
  const isJapanese = pathname.startsWith("/ja");

  // Dynamically set menu items based on locale
  const menuItems: MenuItem[] = isJapanese
    ? [
        { title: "Services", link: "/ja/hideyuda#services" },
        { title: "Experience", link: "/ja/hideyuda#experience" },
        { title: "Media", link: "/ja/hideyuda#media" },
      ]
    : [
        { title: "Services", link: "/hideyuda#services" },
        { title: "Experience", link: "/hideyuda#experience" },
        { title: "Media", link: "/hideyuda#media" },
      ];

 const navbarRef = useRef<HTMLDivElement>(null);
 useEffect(() => {
   const hash = window.location.hash; // Get hash inside useEffect
   document.addEventListener("scroll", (e) => {
     e.preventDefault();
     activeSection();
     if (navbarRef.current) {
       if (window.scrollY >= 80) navbarRef.current.classList.add("nav-sticky");
       else navbarRef.current.classList.remove("nav-sticky");
     }
   });

   const timeout = setTimeout(() => {
     if (hash) {
       const element = document.querySelector(hash);
       if (element) element.scrollIntoView({ behavior: "instant" });
     }
   }, 0);

   return () => {
     clearTimeout(timeout);
     window.removeEventListener("scroll", activeSection);
   };
 }, []);

 const [activation, setActivation] = useState<string>(menuItems[0].title);

 const activeSection = () => {
   const scrollY = window.scrollY;

   for (let i = menuItems.length - 1; i >= 0; i--) {
     const section = menuItems[i];
     const el: HTMLElement | null = document.getElementById(section.title);
     if (el && el.offsetTop <= scrollY + 100) {
       setActivation(section.title);
       return;
     }
   }
 };

 const { currentLocale, switchLocale } = useLocaleSwitcher();

 const handleSwitch = () => {
   const nextLocale = currentLocale === "en" ? "ja" : "en";
   switchLocale(nextLocale);
 };

  return (
    <>
      <header
        ref={navbarRef}
        id="navbar"
        className={cn(
          "fixed",
          "inset-x-0 top-0 z-[60] w-full border-b border-transparent bg-transparent transition-all duration-300 lg:bg-transparent [&.nav-sticky]:bg-transparent"
        )}
      >
        <div className="flex h-full items-center py-4">
          <div className="container">
            <nav className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
              {/* Left Section: Logo/Brand Name */}
              <div className="flex w-full items-center justify-between lg:w-auto">
                {/* Link to locale-specific base page */}
                <Link
                  href={isJapanese ? "/ja/hideyuda" : "/hideyuda"}
                  className="text-lg font-semibold text-default-800"
                >
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
                      "inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-default-800 transition-colors hover:bg-default-100 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:hover:bg-default-100" // Consistent styling
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
                      {/* Use Link component for client-side navigation */}
                      <Link
                        className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium capitalize lg:text-base" // Adjusted padding
                        href={item.link} // Use the full path with hash
                        onClick={() => setActivation(item.title)} // Update activation on click
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
              {/* Removed commented out contact link */}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className="hs-overlay fixed bottom-0 left-0 top-0 z-[61] hidden h-screen w-full max-w-[280px] -translate-x-full transform border-r border-default-200 bg-white transition-all [--body-scroll:true] [--overlay-backdrop:true] hs-overlay-open:translate-x-0 dark:border-default-100 dark:bg-default-50" // Adjusted styles
        tabIndex={-1}
      >
        {/* Mobile Menu Header */}
        <div className="flex h-[74px] items-center justify-between border-b border-dashed border-default-200 px-5 transition-all duration-300 dark:border-default-100">
          {/* Logo in Mobile Menu - Link to locale-specific root */}
          <Link href={isJapanese ? "/ja" : "/"} aria-label="Go to homepage">
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
              priority
              height={32} // Adjusted size
              width={118} // Adjusted size
              className="hidden h-8 dark:flex"
            />
          </Link>
          {/* Close Button */}
          <button
            data-hs-overlay="#mobile-menu"
            className="hs-collapse-toggle -me-2 flex h-8 w-8 items-center justify-center rounded-full text-default-500 transition-colors hover:bg-default-100 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-default-300 dark:hover:bg-default-100" // Adjusted styling
            aria-label="Close navigation menu"
          >
            <LuX size={20} />
          </button>
        </div>

        {/* Mobile Menu Body */}
        <div className="h-[calc(100%-74px)] overflow-y-auto">
          {" "}
          {/* Adjusted height */}
          <nav className="hs-accordion-group flex h-full w-full flex-col flex-wrap p-4">
            <ul className="space-y-1.5">
              {" "}
              {/* Adjusted space */}
              {menuItems.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={cn(
                      // Note: activation might not perfectly match simple title if logic elsewhere changes
                      "rounded text-sm font-medium capitalize text-default-700 transition-all duration-300 hover:bg-default-100 hover:text-primary focus:bg-default-100 focus:text-primary dark:text-default-300 dark:hover:bg-default-100 dark:hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary", // Adjusted styling
                      activation === item.title && "active" // Activation based on title match
                    )}
                  >
                    {/* Use Link and close overlay on click */}
                    <Link
                      className="block w-full px-4 py-2.5"
                      href={item.link} // Use the full path with hash
                      data-hs-overlay="#mobile-menu" // Close overlay on click
                      onClick={() => setActivation(item.title)} // Update activation state
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
