import type { Metadata } from "next";
import Media from "@/components/home/Media";
import ExperienceReach from "@/components/hideyuda/ExperienceReach";
import Hero from "@/components/hideyuda/Hero";
import ExperienceOS from "@/components/hideyuda/ExperienceOS";
import TopNavBar from "@/components/hideyuda/TopNavBar";
import ExperienceLinked from "@/components/hideyuda/ExperienceLinked";
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

      <ExperienceReach />

      <ExperienceLinked />
      <ExperienceOS />
      <Media />
    </>
  );
}
