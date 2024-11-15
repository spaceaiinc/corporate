"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Image from "next/image";

const ExperienceOS = () => {
  const prs = [
    {
      id: 1,
      title: "TheAlgorithms/Go",
      url: "https://github.com/TheAlgorithms/Go/pull/624",
    },
    {
      id: 2,
      title: "remdis/remdis",
      url: "https://github.com/remdis/remdis/pull/2",
    },
    {
      id: 3,
      title: "tegnike/aituber-kit",
      url: "https://github.com/tegnike/aituber-kit/pull/199",
    },
    {
      id: 4,
      title: "kunishou/databricks-dolly-15k-ja",
      url: "https://github.com/kunishou/databricks-dolly-15k-ja/pull/27",
    },
  ];

  return (
    <>
      <section id="media" className="py-10 lg:py-20">
        <div className="container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Experience | OS
            </span>
            <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
              Open Source Contributions
            </h2>
          </div>
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              loopAdditionalSlides={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                440: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              className="testimonials_swiper relative"
            >
              {prs.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="overflow-hidden">
                    <div className="group relative overflow-hidden">
                      <div className="overflow-hidden rounded-xl">
                        <a
                          href={slide.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            alt="slide-Image"
                            src={`https://gh-card.dev/repos/${slide.title}.svg`}
                            className="object-cover"
                            width={300} // 必要な幅を設定
                            height={200} // 必要な高さを設定
                          />
                        </a>
                      </div>
                      <div className="mt-6 text-center">
                        <h3 className="text-xl font-medium text-default-950 transition-all duration-700 group-hover:text-primary">
                          {slide.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceOS;
