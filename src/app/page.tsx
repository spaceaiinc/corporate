import type { Metadata } from "next";
import { Footer } from "@/components";
import TopNavBar from "@/components/home/TopNavBar";
import ContactUs from "@/components/home/ContactUs";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Media from "@/components/home/Media";
import ServicesVteacher from "@/components/home/ServicesVteacher";
import ServicesDev from "@/components/home/ServicesDev";
import ServicesLab from "@/components/home/ServicesLab";
import ServicesLinked from "@/components/home/ServicesLinked";

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

      <ServicesDev />

      {/* <ServicesVteacher /> */}

      <ServicesLinked />
      
      <ServicesLab />

      {/* <ServicesAutoScout /> */}

      <Media />

      <ContactUs />

      <Footer />
    </>
  );
}
