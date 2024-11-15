import TopNavBar from "@/components/TopNavBar";
import type { Metadata } from "next";
import { Footer } from "@/components";
import ContactUs from "@/components/home/ContactUs";
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

      <ContactUs />

      <Footer />
    </>
  );
}
