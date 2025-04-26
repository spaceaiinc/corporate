import type { Metadata } from "next";
import { Footer } from "@/components";
import TopNavBar from "@/components/TopNavBar";
import ContactUs from "@/components/home/ContactUs";
import Hero from "@/components/home/Hero";
import Media from "@/components/home/Media";
import ServicesDev from "@/components/home/ServicesDev";
import ServicesLinked from "@/components/home/ServicesLinked";
import ServicesVteacher from "@/components/home/ServicesVteacher";
import Strengths from "@/components/home/Strengths";
import About from "@/components/home/About";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
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

      <About />

      <ServicesLinked />

      <ServicesVteacher />

      <ServicesDev />

      <Strengths />

      <Media />

      <ContactUs />

      <Footer />
    </>
  );
}
