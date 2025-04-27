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
            サービス | V Teacher
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
            <h2 className="mt-5 text-2xl font-medium text-default-950">
              AIキャラクター×日本語学習
            </h2>
            <p className="mt-4 text-base">
              AIキャラクターを活用し、楽しく実践的な日本語と文化を学ぶことができます。
            </p>
            <ul role="list" className="mt-6 text-sm text-default-700">
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">
                  インタラクティブでリラックスした会話を通じて学べます
                </span>
              </li>
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">
                  レベルと興味に合わせて内容をカスタマイズ
                </span>
              </li>
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">
                  日本語だけでなく、日本文化や趣味についても学べます
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
                  href="https://vteacher.spaceai.jp"
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
                  使ってみる
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

export default ServicesVteacher;
