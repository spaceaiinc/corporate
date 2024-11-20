import TopNavBar from "@/components/home/TopNavBar";
import type { Metadata } from "next";
import { Footer } from "@/components";
import About from "@/components/home/About";
import ContactUs from "@/components/home/ContactUs";
import Team from "@/components/home/Team";
export const metadata: Metadata = {
  title: "About Us",
  description: "About Us",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Home() {
  return (
    <>
      <TopNavBar />

      <About />

      <Team />

      <ContactUs />

      <Footer />
    </>
  );
}
