import TopNavBar from "@/components/TopNavBar";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import PortfolioSwiper from "./components/Media";
import Services from "./components/Services";
import type { Metadata } from "next";
import { Footer } from "@/components";
import Misson from "./components/Misson";
import Team from "./components/Team";

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

      {/* <MarqueeGroup /> */}

      <Services />

      <PortfolioSwiper />

      {/* <InvestmentSteps />

      <TestimonialSlider />

      <ActionBox /> */}

      {/* <DomainNames /> */}

      <Misson />

      <Team />

      <ContactUs />

      <Footer />
    </>
  );
}
