"use client";
import Image from "next/image";
import backgroundImg from "@/assets/images/bg.png";
import backgroundDarkImg from "@/assets/images/bg-dark.jpg";
import linkedImg from "@/assets/images/demo/lead-report.png";
import vteacherImg from "@/assets/images/vteacher/bg-c.png";
import devImg from "@/assets/images/dev/logo.png";
import ServicesSwiper from "../../ServcicesSwiper";

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
    id: 3,
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
      className="relative flex items-center justify-center overflow-hidden h-screen"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          alt="background-image"
          src={backgroundImg}
          className="object-cover h-full w-full dark:hidden"
          priority
        />
        <Image
          alt="background-imageDark"
          src={backgroundDarkImg}
          className="hidden object-cover h-full w-full dark:block"
          priority
        />
        <div id="canvas_container"></div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="relative py-8">
          {/* Changed grid gap from gap-2 to gap-6 to bring the elements closer together */}
          <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 items-center gap-2">
            {/* Left section - Text */}
            <div className="mx-auto max-w-md text-center lg:text-left lg:ms-0 lg:pl-15 lg:pl-20">
              <h2 className="my-5 text-3xl sm:text-4xl font-medium text-default-950 md:text-5xl/tight">
                We Make Space
                <br />
                for Your Moments
              </h2>
              <p className="mb-10 text-base">Space AI</p>
              {/* <Link
                href=""
                className="rounded-md bg-primary px-6 py-3 text-white transition-all duration-300 hover:bg-primary-700"
              >
                Reach Out to Us
              </Link> */}
            </div>
            <ServicesSwiper services={services} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
