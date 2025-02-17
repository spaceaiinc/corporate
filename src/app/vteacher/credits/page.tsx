import { Footer, TopNavBar } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credits",
  description: "Credits for V Teacher",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const Credits = () => {
  return (
    <>
      <TopNavBar />
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-3xl font-bold mb-4">Credits</h1>
        <p className="mb-4">
          We extend our heartfelt thanks to all the creators and developers
          whose incredible work made this project possible. Your contributions
          inspire us to keep building and innovating.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="mb-4">
          <ul>
            <li>- ChatVRM - https://github.com/pixiv/ChatVRM</li>
            <li>- AI Tuber Kit - https://github.com/tegnike/aituber-kit</li>
            <li>- Charcoal - https://charcoal-web.pixiv.design/</li>
            <li>- Radix UI - https://radix-ui.com/</li>
            <li>- three.js - https://threejs.org/</li>
            <li>- React - https://reactjs.org/</li>
            <li>- Next.js - https://nextjs.org/</li>
            <li>- Tailwind CSS - https://tailwindcss.com/</li>
            <li>- TypeScript - https://www.typescriptlang.org/</li>
            <li>- Google Cloud - https://cloud.google.com/</li>
            <li>- Supabase - https://supabase.io/</li>
            <li>- Stripe - https://stripe.com/</li>
          </ul>
        </p>
        <h2 className="text-2xl font-semibold mb-2">Model Assets</h2>
        <p className="mb-4">
          <ul>
            <li>
              - Character animation credits to pixiv Inc.&apos;s VRoid Project
            </li>
            <li>- siroihakumai - https://siroihakumai.booth.pm/</li>
          </ul>
        </p>
        <h2 className="text-2xl font-semibold mb-2">Music</h2>
        <p className="mb-4">
          <ul>
            <li>- 2:23 AM / しゃろう</li>
          </ul>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Credits;
