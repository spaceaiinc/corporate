import TopNavBar from "@/components/TopNavBar";
import ContactUs from "@/components/home/ContactUs";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import type { Metadata } from "next";
import { Footer } from "@/components";
import About from "@/components/home/About";
import Media from "@/components/home/Media";
import ServicesVteacher from "@/components/home/ServicesVteacher";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <TopNavBar
        menuItems={["services", "media"]}
        position="fixed"
        hasDownloadButton
      />

      <Hero />

      <About />

      <Services />

      <ServicesVteacher />

      <Media />

      <ContactUs />

      <Footer />
    </>
  );
}
