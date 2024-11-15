"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
}

interface ArticleRes {
  note: Article[];
  medium: Article[];
}

const Media = () => {
  const [articles, setArticles] = useState<ArticleRes>({
    note: [],
    medium: [],
  });

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get("/api/media");
        if (!res.data) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = res.data;

        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <section id="media" className="py-10 lg:py-20">
        <div className="container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Media
            </span>
            <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
              Tech Blog
            </h2>
          </div>
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              loop={articles.note.length > 3}
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
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="testimonials_swiper relative"
            >
              {articles.medium.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="overflow-hidden">
                    <div className="group relative overflow-hidden">
                      <div className="overflow-hidden rounded-xl">
                        <a
                          href={slide.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            alt="slide-Image"
                            src={slide.thumbnail}
                            width={600}
                            height={300}
                            className="h-full w-full scale-[1.2] transition-all duration-700 group-hover:scale-[1]"
                          />
                        </a>
                      </div>
                      <div className="mt-6 text-center">
                        <h3 className="text-xl font-medium text-default-950 transition-all duration-700 group-hover:text-primary">
                          {slide.title}
                        </h3>
                        <p className="mt-4 text-base text-default-900">
                          {new Date(slide.pubDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              passHref
              href="https://medium.com/@hideyuda"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-8 py-2 text-default-950 backdrop-blur-3xl transition-all duration-700 hover:border-primary hover:bg-primary hover:text-white"
            >
              Read More
              <LuArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20">
        <div className="container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
              Tech Blog In Japanese
            </h2>
          </div>
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              loop={articles.note.length > 3}
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
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="testimonials_swiper relative"
            >
              {articles.note.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="overflow-hidden">
                    <div className="group relative overflow-hidden">
                      <div className="overflow-hidden rounded-xl">
                        <a
                          href={slide.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            alt="slide-Image"
                            src={slide.thumbnail}
                            width={600}
                            height={300}
                            className="h-full w-full scale-[1.2] transition-all duration-700 group-hover:scale-[1]"
                          />
                        </a>
                      </div>
                      <div className="mt-6 text-center">
                        <h3 className="text-xl font-medium text-default-950 transition-all duration-700 group-hover:text-primary">
                          {slide.title}
                        </h3>
                        <p className="mt-4 text-base text-default-900">
                          {new Date(slide.pubDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@hideyuda"
              passHref
              className="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-8 py-2 text-default-950 backdrop-blur-3xl transition-all duration-700 hover:border-primary hover:bg-primary hover:text-white"
            >
              Read More
              <LuArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
