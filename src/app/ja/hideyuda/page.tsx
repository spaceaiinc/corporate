import type { Metadata } from "next";
import Media from "@/components/home/Media";
import ExperienceReach from "@/components/ja/hideyuda/ExperienceReach";
import Hero from "@/components/ja/hideyuda/Hero";
import ExperienceOS from "@/components/ja/hideyuda/ExperienceOS";
import ExperienceLinked from "@/components/ja/hideyuda/ExperienceLinked";
import ServicesLinked from "@/components/ja/home/ServicesLinked";
import TopNavBar from "@/components/PortfolioTopNavBar";
export const metadata: Metadata = {
  title: "Home",
  description: "Hideyuda's Portfolio",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Home() {
  return (
    <>
      <TopNavBar />

      <Hero />

      <ServicesLinked />

      <ExperienceLinked />

      <ExperienceReach />

      <ExperienceOS />

      <Media />
    </>
  );
}
