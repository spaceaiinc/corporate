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
          "inset-x-0 top-0 z-[60] w-full border-b border-transparent bg-transparent transition-all duration-300 lg:bg-transparent [&.nav-sticky]:bg-white/80 [&.nav-sticky]:shadow-md [&.nav-sticky]:dark:bg-default-50/80" // Sticky時の背景と影を追加 (例)
        )}
      >
        <div className="flex h-full items-center py-4">
          <div className="container">
            <nav className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
              <div className="flex w-full items-center justify-between lg:w-auto">
                <Link
                  href={isJapanese ? "/ja" : "/"}
                  aria-label="Go to homepage" // アクセシビリティ向上のためaria-labelを追加
                >
                  {/* --- ロゴ修正箇所 (ヘッダー) --- */}
                  {/* ライトモード用ロゴ (デフォルト表示、ダークモード非表示) */}
                  <Image
                    src={logoDark}
                    alt="logo"
                    height={30}
                    width={73}
                    className="flex h-10 dark:hidden" // lg:flex を削除し、モバイルでも表示されるように修正（元のコードに基づく）
                    priority // LCP要素の可能性があればpriorityを追加
                  />
                  {/* ダークモード用ロゴ (ダークモード表示、白いドロップシャドウ付き) */}
                  <Image
                    src={logoDark} // ダークモードでも同じ黒ロゴを使用
                    alt="logo"
                    height={30}
                    width={73}
                    // `hidden dark:flex` でダークモード時のみ表示
                    // `dark:filter dark:drop-shadow-[...]` で白いドロップシャドウを適用
                    className="hidden h-10 dark:flex dark:filter dark:drop-shadow-[0_1px_1px_rgba(255,255,255,0.75)]"
                    priority // LCP要素の可能性があればpriorityを追加
                  />
                  {/* --- ロゴ修正箇所 ここまで --- */}
                </Link>
                <div className="flex items-center gap-2">
                  {/* Mobile Contact Button */}
                  <div className="inline-flex shrink gap-2 lg:hidden">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 rounded-full border border-primary bg-transparent px-6 py-1.5 text-base text-primary transition-all hover:bg-primary-700 hover:text-white"
                    >
                      <LuMail className="h-4 w-4" /> {/* fillを削除 */}
                      <span className="hidden sm:block">{"Contact"}</span>
                    </Link>
                  </div>
                  {/* Mobile Language Switcher */}
                  <div className="lg:hidden">
                    <button
                      onClick={handleSwitch}
                      className={
                        "rounded-full px-2 py-0.5 text-sm font-medium text-default-800 hover:text-primary"
                      }
                      aria-label={
                        currentLocale === "en"
                          ? "Switch to Japanese"
                          : "Switch to English"
                      }
                    >
                      {currentLocale === "en" ? "JP" : "EN"}
                    </button>
                  </div>
                  {/* Mobile Menu Toggle */}
                  <button
                    className="hs-collapse-toggle inline-block lg:hidden"
                    data-hs-overlay="#mobile-menu"
                    aria-controls="mobile-menu" // アクセシビリティ向上のためaria-controlsを追加
                    aria-expanded="false" // 初期状態は閉じてる想定
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
                        // text-default-800 を削除し、nav-sticky時に対応できるようにする
                        "menu-item mx-2 text-default-700 transition-all duration-300 hover:text-primary dark:text-default-300 [&.active]:text-primary",
                        // nav-sticky 時のテキスト色も考慮
                        navbarRef.current?.classList.contains("nav-sticky")
                          ? "dark:text-default-300"
                          : "dark:text-white",
                        activation === item.title && "active"
                      )}
                    >
                      <Link
                        className="inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium capitalize lg:text-base"
                        href={item.link}
                        // 現在のページとリンクが一致する場合にaria-currentを追加 (例)
                        // aria-current={activation === item.title ? "page" : undefined}
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
                  <LuMail className="h-4 w-4" /> {/* fillを削除 */}
                  <span className="hidden sm:block">{"Contact"}</span>
                </Link>
                {/* Desktop Language Switcher */}
                <div className="flex items-center gap-2 pl-4">
                  <button
                    onClick={handleSwitch}
                    className={
                      // text-default-800 を sticky 時も考慮して調整
                      "rounded-full px-2 py-0.5 text-sm font-medium text-default-700 hover:text-primary dark:text-default-300"
                    }
                    aria-label={
                      currentLocale === "en"
                        ? "Switch to Japanese"
                        : "Switch to English"
                    }
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
        className="hs-overlay fixed bottom-0 left-0 top-0 z-[61] hidden h-screen w-full max-w-[270px] -translate-x-full transform border-r border-default-200 bg-white transition-all [--body-scroll:false] [--overlay-backdrop:true] hs-overlay-open:translate-x-0 dark:bg-default-50" // backdropを有効にする例
        tabIndex={-1}
      >
        <div className="flex h-[74px] items-center justify-between border-b border-dashed border-default-200 px-4 transition-all duration-300">
          <Link href={isJapanese ? "/ja" : "/"} aria-label="Go to homepage">
            {/* --- ロゴ修正箇所 (モバイルメニュー) --- */}
            {/* ライトモード用ロゴ (デフォルト表示、ダークモード非表示) */}
            <Image
              src={logoDark}
              alt="logo"
              height={30} // サイズをヘッダーと合わせるか検討 (元は40)
              width={73} // サイズをヘッダーと合わせるか検討 (元は147)
              className="flex h-10 dark:hidden" // 表示条件を修正
            />
            {/* ダークモード用ロゴ (ダークモード表示、白いドロップシャドウ付き) */}
            <Image
              src={logoDark} // ダークモードでも同じ黒ロゴを使用
              alt="logo"
              height={30} // サイズをヘッダーと合わせるか検討
              width={73} // サイズをヘッダーと合わせるか検討
              // `hidden dark:flex` でダークモード時のみ表示
              // `dark:filter dark:drop-shadow-[...]` で白いドロップシャドウを適用
              className="hidden h-10 dark:flex dark:filter dark:drop-shadow-[0_1px_1px_rgba(255,255,255,0.75)]"
              priority // メニューが開いたときに表示されるならpriority
            />
            {/* --- ロゴ修正箇所 ここまで --- */}
          </Link>
          <button // ボタンに変更し、アクセシビリティ向上
            type="button" // type="button"を追加
            data-hs-overlay="#mobile-menu"
            className="hs-collapse-toggle -mr-2 inline-flex items-center justify-center rounded-md p-2 text-default-600 hover:bg-default-100 hover:text-default-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:text-default-400 dark:hover:bg-default-100 dark:hover:text-default-800"
            aria-label="Close mobile menu" // ラベルを追加
          >
            <LuX size={24} />
          </button>
        </div>
        <div className="h-[calc(100%-74px)] overflow-y-auto">
          {" "}
          {/* 高さを修正 */}
          <nav className="hs-accordion-group flex h-full w-full flex-col flex-wrap p-4">
            <ul className="space-y-1">
              {menuItems.map((item, idx) => {
                return (
                  <li key={idx}>
                    {" "}
                    {/* classNameをLink(a)要素に移動 */}
                    <Link // aタグをNext.jsのLinkコンポーネントに変更
                      className={cn(
                        "block w-full rounded px-4 py-2.5 text-sm font-medium capitalize text-default-700 transition-all duration-300 hover:bg-default-100 hover:text-primary dark:text-default-300 dark:hover:bg-default-100 dark:hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary"
                        // activation === item.title && "active" // Link コンポーネントでアクティブ状態を管理する場合、別の方法が必要
                      )}
                      href={item.link}
                      // モバイルメニューを閉じる処理を追加する必要がある場合
                      // onClick={() => document.querySelector('[data-hs-overlay="#mobile-menu"]').click()}
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
