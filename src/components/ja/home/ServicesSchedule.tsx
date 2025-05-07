import { LuArrowRight, LuDot } from "react-icons/lu";

import bgImg from "@/assets/images/demo/schedule/landing.png";
import Image from "next/image";
import Link from "next/link";

const ServicesSchedule = () => {
  return (
    <section id="services-schedule" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-xl text-center mb-14">
          <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Services | Schedule AI(スケジュール AI)
          </span>
        </div>
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div className="order-1 lg:order-2 mt-10 sm:h-100 sm:w-100 lg:h-120 lg:w-120">
            <Image
              alt="schedule-image"
              src={bgImg}
              className="h-full w-full rounded-lg"
            />
          </div>
          <div className="order-2 lg:order-1">
            <h2 className="mt-5 text-2xl font-medium text-default-950">
              予定調整、もう迷わない。
            </h2>
            <p className="mt-4 text-base">
              希望日時をテキストや画像で入力するだけで、先方のGoogleカレンダーと自動的に照合し、最適な日程をリコメンド。ログイン不要で使えるシンプルさと、複数カレンダー連携による柔軟性を兼ね備え、ビジネスシーンでの時間管理を効率化します。
            </p>
            <ul role="list" className="mt-6 text-sm text-default-700">
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">スマート日程認識</span>
              </li>
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">
                  ワンクリック確定とURL自動生成
                </span>
              </li>
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">
                  複数カレンダー連携と柔軟なアクセス管理
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
                  href="https://schedule.spaceai.jp"
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
                  無料で使ってみる
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

export default ServicesSchedule;
