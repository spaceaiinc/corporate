import { LuArrowRight, LuDot } from "react-icons/lu";

import bgImg from "@/assets/images/autoscout.png";
import Image from "next/image";
import Link from "next/link";

const ServicesAutoScout = () => {
  return (
    <section id="autoscout" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-xl text-center mb-14">
          <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Services | Auto Scout
          </span>
        </div>
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div className="order-1 lg:order-2 mt-10 sm:h-100 sm:w-100 lg:h-120 lg:w-120">
            <Image
              alt="autoscout-image"
              src={bgImg}
              className="h-full w-full rounded-lg"
            />
          </div>
          <div className="order-2 lg:order-1">
            <h2 className="mt-5 text-4xl font-medium text-default-950">
              Automate Your Daily Scout
            </h2>
            <p className="mt-4 text-base">
              Goodbye daily scouts tasks. AutoScout automate your daily scout
              tasks with RPA and AI, keeping proper conversion and follow up.
            </p>
            <ul role="list" className="mt-6 text-sm text-default-700">
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">
                  Work On the Following Services. RAN, Mynavi Scouting, AMBI,
                  Mynavi Agent Scout
                </span>
              </li>
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">
                  No Need to setup any PC and devices.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">
                  Customize by Your Services
                </span>
              </li>
            </ul>
            <div className="mt-10 flex justify-center h-100 w-100">
              <div className="relative inline-flex mt-10 group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 "></div>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  href="https://autscout.spaceai.jp"
                  className={`
                  relative inline-flex items-center justify-center 
                  gap-3 rounded-lg 
                  px-16 py-4 
                  text-primary-700 text-lg font-medium
                  bg-white
                  border border-primary 
                  transition-all hover:bg-primary-700 hover:text-white
                  `}
                >
                  Get Started
                  <LuArrowRight className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAutoScout;
