import type { Metadata } from "next";
import TopNavBar from "@/components/ja/home/TopNavBar";
import ContactUs from "@/components/ja/home/ContactUs";
import Hero from "@/components/ja/home/Hero";
import About from "@/components/ja/home/About";
import Media from "@/components/ja/home/Media";
import ServicesDev from "@/components/ja/home/ServicesDev";
import ServicesLinked from "@/components/ja/home/ServicesLinked";
import Footer from "@/components/ja/Footer";
import Team from "@/components/ja/home/Team";

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

      <ServicesLinked />

      <ServicesDev />

      <About />

      <Media />

      {/* <Team /> */}

      <ContactUs />

      <Footer />
    </>
  );
}
