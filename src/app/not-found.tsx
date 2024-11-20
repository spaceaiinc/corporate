import type { Metadata } from "next";
import { Footer } from "@/components";
import TopNavBar from "@/components/home/TopNavBar";
import NotFound from "@/components/NotFound";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Not Found",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Home() {
  return (
    <>
      <TopNavBar />

      <NotFound />

      <Footer />
    </>
  );
}
