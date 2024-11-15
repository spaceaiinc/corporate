import type { Metadata } from "next";
import Media from "@/components/home/Media";
import ExperienceReach from "@/components/hideyuda/ExperienceReach";
import Hero from "@/components/hideyuda/Hero";
import ExperienceOS from "@/components/hideyuda/ExperienceOS";
import NavBar from "@/components/hideyuda/NavBar";
export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <NavBar />

      <Hero />

      <Media />

      <ExperienceReach />

      <ExperienceOS />
    </>
  );
}
