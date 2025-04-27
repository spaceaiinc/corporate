import Image from "next/image";

import backgroundImg from "@/assets/images/bg.png";
import backgroundDarkImg from "@/assets/images/bg-dark.jpg";
import ServicesSwiper from "../ServcicesSwiper";
import linkedImg from "@/assets/images/demo/lead-report.png";
import vteacherImg from "@/assets/images/vteacher/bg-c.png";
import devImg from "@/assets/images/dev/logo.png";

const services = [
  {
    id: 1,
    href: "https://linked.spaceai.jp",
    target: "_blank",
    rel: "noopener noreferrer",
    image: linkedImg,
    title: "Linked",
    description:
      "From list extraction to connection application and report analysis, you can streamline your sales, recruiting, and marketing on LinkedIn.",
  },
  {
    id: 2,
    href: "https://vteacher.spaceai.jp",
    target: "_blank",
    rel: "noopener noreferrer",
    image: vteacherImg,
    title: "V Teacher",
    description:
      "You can Learn Japanese language and culture with our virtual teacher anytime! Goodbye boring methods.",
  },
  {
    id: 3,
    href: "#services-dev",
    target: "_self",
    rel: "noopener noreferrer",
    image: devImg,
    title: "Software Development",
    description:
      "We provide development support for web apps, native apps, etc. We provide speedy development with a small team from prototype to actual finished product.",
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
