"use client";
import Image from "next/image";

import backgroundImg from "@/assets/images/bg.png";
import backgroundDarkImg from "@/assets/images/bg-dark.jpg";
import linkedImg from "@/assets/images/demo/lead-report.png";
import devImg from "@/assets/images/dev/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

// Define your services
const services = [
  {
    id: 1,
    href: "/ja/#services",
    image: linkedImg,
    title: "Linked(リンクト)",
    description:
      "LinkedInリード獲得効率化サービス。リスト抽出からつながり申請、レポート分析までLinkedIn上での営業・採用・マーケティングを自動化！",
  },
  {
    id: 2,
    href: "/ja/#services-dev",
    image: devImg,
    title: "ソフトウェア開発受託",
    description:
      "お客様のWEBアプリ、ネイティブアプリ等を開発支援します。完成品をイメージできる試作から実際の完成品に至るまで、少人数でスピーディーな開発を提供しております。",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0">
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
                You Like
              </h2>
              <p className="mb-6 sm:mb-10 text-base">Space AI</p>
            </div>

            {/* Right section - Swiper */}
            <div className="w-full max-w-lg mx-auto lg:max-w-none">
              <Swiper
                modules={[Autoplay]}
                // loop={true}
                loopAdditionalSlides={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={20}
                className="services_swiper relative"
              >
                {services.map((service) => (
                  <SwiperSlide key={service.id}>
                    <div className="overflow-hidden">
                      <div className="group relative overflow-hidden">
                        <div className="overflow-hidden rounded-2xl">
                          <div className="aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3">
                            <Image
                              alt={`service-${service.id}`}
                              src={service.image}
                              className="mx-auto rounded-2xl h-full w-full object-cover scale-[1.05] transition-all duration-700 group-hover:scale-[1]"
                              width={500}
                              height={300}
                            />
                          </div>
                        </div>
                        <div className="mt-4 text-center">
                          <h3 className="text-xl font-medium text-default-950 transition-all duration-700 group-hover:text-primary">
                            {service.title}
                          </h3>
                          <p className="mt-2 text-base text-default-900">
                            {service.description}
                          </p>
                          <div className="mt-6 sm:mt-10 flex justify-center">
                            <Link
                              href={service.href}
                              passHref
                              className="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-6 sm:px-8 py-2 text-default-950 backdrop-blur-3xl transition-all duration-700 hover:border-primary hover:bg-primary hover:text-white"
                            >
                              詳しく見る
                              <LuArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
