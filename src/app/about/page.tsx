import TopNavBar from "@/components/TopNavBar";
import type { Metadata } from "next";
import { Footer } from "@/components";
import About from "@/components/home/About";
import ContactUs from "@/components/home/ContactUs";
import Team from "@/components/home/Team";
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

      <About />

      <Team />

      <ContactUs />

      <Footer />
    </>
  );
}
