"use client";
import Image from "next/image";
import backgroundImg from "@/assets/images/bg.png";
import backgroundDarkImg from "@/assets/images/bg-dark.jpg";
import linkedImg from "@/assets/images/demo/lead-report.png";
import vteacherImg from "@/assets/images/vteacher/bg-c.png";
import devImg from "@/assets/images/dev/logo.png";
import ServicesSwiper from "../../ServcicesSwiper";
import scheduleImg from "@/assets/images/demo/schedule/landing.png";
const services = [
  {
    id: 1,
    href: "https://linked.spaceai.jp",
    target: "_blank",
    rel: "noopener noreferrer",
    image: linkedImg,
    title: "Linked(リンクト)",
    description:
      "LinkedInリード獲得効率化サービス。リスト抽出からつながり申請、レポート分析までLinkedIn上での営業・採用・マーケティングを効率化できます。",
  },
  {
    id: 2,
    href: "https://schedule.spaceai.jp",
    target: "_blank",
    rel: "noopener noreferrer",
    image: scheduleImg,
    title: "Schedule AI(スケジュール AI)",
    description:
      "希望日時をテキストや画像で入力するだけで、先方のGoogleカレンダーと自動的に照合し、最適な日程をリコメンド。ログイン不要で使えるシンプルさと、複数カレンダー連携による柔軟性を兼ね備え、ビジネスシーンでの時間管理を効率化します。",
  },
  {
    id: 3,
    href: "https://vteacher.spaceai.jp",
    target: "_blank",
    rel: "noopener noreferrer",
    image: vteacherImg,
    title: "V Teacher",
    description:
      "オンライン日本語学習サービス。AIキャラクターを活用し、楽しく実践的な日本語と文化を学ぶことができます。",
    // "You can Learn Japanese language and culture with our virtual teacher anytime! Goodbye boring methods.",
  },
  {
    id: 4,
    href: "/ja/#services-dev",
    target: "_self",
    rel: "noopener noreferrer",
    image: devImg,
    title: "ソフトウェア開発受託",
    description:
      "WEBアプリ、ネイティブアプリ等を開発支援します。試作から実際の完成品に至るまで、少人数でスピーディーな開発を提供しております。",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      // --- classNameから h-screen を削除し、py-* を追加 ---
      className="relative flex items-center justify-center overflow-hidden py-16 md:py-24"
    >
      {/* --- 背景コンテナに -z-10 を追加 --- */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          alt="background-image"
          src={backgroundImg}
          // --- fill と style を使用するように変更 ---
          fill
          style={{ objectFit: "cover" }}
          className="dark:hidden" // object-cover, h-full, w-full を削除
          priority
        />
        <Image
          alt="background-imageDark"
          src={backgroundDarkImg}
          // --- fill と style を使用するように変更 ---
          fill
          style={{ objectFit: "cover" }}
          className="hidden dark:block" // object-cover, h-full, w-full を削除
          priority
        />
        {/* <div id="canvas_container"></div> */}{" "}
        {/* コメントアウトされているのでそのまま */}
      </div>
      <div className="container px-4 mx-auto">
        <div className="relative py-8">
          {/* Changed grid gap from gap-2 to gap-6 to bring the elements closer together */}
          {/* --- gap-2 に戻すか gap-6 のままか確認 --- */}
          <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 items-center gap-6">
            {" "}
            {/* Assuming gap-6 was intended */}
            {/* Left section - Text */}
            {/* --- 重複する lg:pl-15 を削除 --- */}
            <div className="mx-auto max-w-md text-center lg:text-left lg:ms-0 lg:pl-20">
              {" "}
              {/* lg:pl-15 を削除 */}
              <h2 className="my-5 text-3xl sm:text-4xl font-medium text-default-950 md:text-5xl/tight">
                We Make Space
                <br />
                for Your Moments
              </h2>
              <p className="mb-10 text-base">Space AI</p>
              {/* Commented out Link */}
              {/* <Link
                href=""
                className="rounded-md bg-primary px-6 py-3 text-white transition-all duration-300 hover:bg-primary-700"
              >
                Reach Out to Us
              </Link> */}
            </div>
            {/* Right section - Swiper */}
            <ServicesSwiper services={services} />{" "}
            {/* Ensure 'services' prop is passed correctly */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
