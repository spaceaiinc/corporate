import TopNavBar from "@/components/home/TopNavBar";
import type { Metadata } from "next";
import { Footer } from "@/components";
import ContactUs from "@/components/home/ContactUs";
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Home() {
  return (
    <>
      <TopNavBar />

      <ContactUs />

      <Footer />
    </>
  );
}
