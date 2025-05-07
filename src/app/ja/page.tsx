import type { Metadata } from "next";
import TopNavBar from "@/components/TopNavBar";
import ContactUs from "@/components/ja/home/ContactUs";
import Hero from "@/components/ja/home/Hero";
import About from "@/components/ja/home/About";
import Media from "@/components/ja/home/Media";
import ServicesDev from "@/components/ja/home/ServicesDev";
import ServicesLinked from "@/components/ja/home/ServicesLinked";
import Footer from "@/components/Footer";
import ServicesVteacher from "@/components/ja/home/ServicesVteacher";
import Strengths from "@/components/ja/home/Strengths";
import ServicesSchedule from "@/components/ja/home/ServicesSchedule";

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

      <ServicesSchedule />

      <ServicesVteacher />

      <ServicesDev />

      <Strengths />

      <Media />

      <ContactUs />

      <Footer />
    </>
  );
}
