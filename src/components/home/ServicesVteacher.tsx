import { LuArrowRight, LuDot } from "react-icons/lu";

import bgImg from "@/assets/images/vteacher/bg-c.png";
import Image from "next/image";
import Link from "next/link";

const ServicesVteacher = () => {
  return (
    <section id="vteacher" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-xl text-center mb-14">
          <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Services | Vteacher
          </span>
        </div>
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div className="order-1 lg:order-2 mt-10 sm:h-100 sm:w-100 lg:h-120 lg:w-120">
            <Image
              alt="vteacher-image"
              src={bgImg}
              className="h-full w-full rounded-lg"
            />
          </div>
          <div className="order-2 lg:order-1">
            <h2 className="mt-5 text-4xl font-medium text-default-950">
              Learn Japanese With V Tubers
            </h2>
            <p className="mt-4 text-base">
              Goodbye boring methods. You can learn more about Japanese language
              and culture with our virtual teacher anytime and anywhere!
            </p>
            <ul role="list" className="mt-6 text-sm text-default-700">
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">
                  Made by Native Japanese Speakers
                </span>
              </li>
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">
                  Practice with Interactive And Chill Chat
                </span>
              </li>
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">
                  Customize by Your Level And Interest
                </span>
              </li>
            </ul>
            <div className="mt-10 flex justify-center h-100 w-100">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                passHref
                href="https://vteacher.spaceai.jp"
                className={`
            text-white text-lg font-medium
            inline-flex items-center justify-center 
            gap-3 rounded-lg 
            px-16 py-4 
            backdrop-blur-3xl bg-gradient-to-r 
            shadow-lg
            transition-all 
            from-[#d6e6f2] via-[#e3d6f2] to-[#f2d6e3] 
            hover:from-[#f2e6d6] hover:via-[#f2d6e3] hover:to-[#e3d6f2] hover:text-white
            `}
              >
                Get Started
                <LuArrowRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesVteacher;
