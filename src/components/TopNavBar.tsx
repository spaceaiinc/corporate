"use client";
import { toSentenceCase } from "@/helpers";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LuMail, LuMenu, LuX } from "react-icons/lu";
import { usePathname } from "next/navigation"; // Import usePathname

import logoDark from "@/assets/images/logo-dark.svg";
import logoLight from "@/assets/images/logo-light.svg"; // Uncommented logoLight import
import { useLocaleSwitcher } from "@/hooks/useLocaleSwitcher";

type MenuItem = {
  title: string;
  link: string;
};

const TopNavBar = () => {
  const pathname = usePathname();
  const isJapanese = pathname.startsWith("/ja");

  const menuItems: MenuItem[] = isJapanese
    ? [
        { title: "About", link: "/ja/#about" },
        { title: "Services", link: "/ja/#services" },
        { title: "Media", link: "/ja/#media" },
      ]
    : [
        { title: "About", link: "/#about" },
        { title: "Services", link: "/#services" },
        { title: "Media", link: "/#media" },
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
              <div className="flex w-full items-center justify-between lg:w-auto">
                <Link href="/">
                  <Image
                    src={logoDark}
                    alt="logo"
                    height={40}
                    priority
                    width={147}
                    className="hidden flex h-10 lg:flex"
                  />
                  <Image
                    src={logoDark}
                    alt="logo"
                    height={20}
                    width={73}
                    className="flex h-10 dark:hidden lg:hidden"
                  />
                  {/* <Image
                    src={logoLight}
                    alt="logo"
                    height={40}
                    width={147}
                    className="hidden h-10 dark:flex"
                    priority
                  />
                  <Image
                    src={logoLight}
                    alt="logo"
                    height={20}
                    width={73}
                    className="hidden h-10 dark:flex"
                  /> */}
                </Link>
                <div className="flex items-center gap-2">
                  {/* Mobile Contact Button */}
                  <div className="inline-flex shrink gap-2 lg:hidden">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 rounded-full border border-primary bg-transparent px-6 py-1.5 text-base text-primary transition-all hover:bg-primary-700 hover:text-white"
                    >
                      <LuMail className="h-4 w-4 fill-white/40" />
                      <span className="hidden sm:block">{"Contact"}</span>
                    </Link>
                  </div>
                  {/* Mobile Language Switcher */}
                  <div className="lg:hidden">
                    <button
                      onClick={handleSwitch}
                      className={
                        "px-2 py-0.5 text-sm font-medium rounded-full text-default-800 hover:text-primary"
                      }
                      aria-label="Switch to English"
                    >
                      {currentLocale === "en" ? "JP" : "EN"}
                    </button>
                  </div>
                  {/* Mobile Menu Toggle */}
                  <button
                    className="hs-collapse-toggle inline-block lg:hidden"
                    data-hs-overlay="#mobile-menu"
                  >
                    <LuMenu className="h-7 w-7 text-default-600 hover:text-default-900" />
                  </button>
                </div>
              </div>
              {/* Desktop Menu */}
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
                      <Link
                        className="inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium capitalize lg:text-base"
                        href={item.link}
                      >
                        {toSentenceCase(item.title)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {/* Desktop Contact & Language Switcher */}
              <div className="ms-auto hidden shrink gap-2 lg:inline-flex">
                <Link
                  href={isJapanese ? "/ja/#contact" : "/#contact"}
                  className="inline-flex items-center gap-2 rounded-full border border-primary bg-transparent px-6 py-1.5 text-base text-primary transition-all hover:bg-primary-700 hover:text-white"
                >
                  <LuMail className="h-4 w-4 fill-white/40" />
                  <span className="hidden sm:block">{"Contact"}</span>
                </Link>
                {/* Desktop Language Switcher */}
                <div className="flex items-center gap-2 pl-4">
                  <button
                    onClick={handleSwitch}
                    className={
                      "px-2 py-0.5 text-sm font-medium rounded-full text-default-800 hover:text-primary"
                    }
                    aria-label="Switch to English"
                  >
                    {currentLocale === "en" ? "JP" : "EN"}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className="hs-overlay fixed bottom-0 left-0 top-0 z-[61] hidden h-screen w-full max-w-[270px] -translate-x-full transform border-r border-default-200 bg-white transition-all [--body-scroll:false] [--overlay-backdrop:false] hs-overlay-open:translate-x-0 dark:bg-default-50"
        tabIndex={-1}
      >
        <div className="flex h-[74px] items-center justify-between border-b border-dashed border-default-200 px-4 transition-all duration-300">
          <Link href="/">
            <Image
              src={logoDark}
              alt="logo"
              height={40}
              width={147}
              className="hidden flex h-10 lg:flex"
            />
            <Image
              src={logoDark}
              alt="logo"
              height={20}
              width={73}
              className="flex h-10 dark:hidden lg:hidden"
            />
            <Image
              src={logoLight}
              alt="logo"
              height={40}
              width={147}
              className="hidden h-10 dark:flex"
              priority
            />
          </Link>
          <div data-hs-overlay="#mobile-menu" className="hs-collapse-toggle">
            <LuX size={24} />
          </div>
        </div>
        <div className="h-[calc(100%-4rem)] overflow-y-auto">
          <nav className="hs-accordion-group flex h-full w-full flex-col flex-wrap p-4">
            <ul className="space-y-1">
              {menuItems.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={cn(
                      "rounded text-sm font-medium capitalize text-default-900 transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary",
                      activation == `${item}` && "active"
                    )}
                  >
                    <a className="block w-full px-4 py-2.5" href={item.link}>
                      {toSentenceCase(item.title)}
                    </a>
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
