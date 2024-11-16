import type { Metadata } from "next";
import Media from "@/components/home/Media";
import ExperienceReach from "@/components/hideyuda/ExperienceReach";
import Hero from "@/components/hideyuda/Hero";
import ExperienceOS from "@/components/hideyuda/ExperienceOS";
import TopNavBar from "@/components/hideyuda/TopNavBar";
export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <TopNavBar />

      <Hero />

      <Media />

      <ExperienceReach />

      <ExperienceOS />
    </>
  );
}
