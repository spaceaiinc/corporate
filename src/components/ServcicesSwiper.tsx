"use client";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

// props
interface ServicesSwiperProps {
  services: {
    id: number;
    href: string;
    target: string;
    rel: string;
    image: StaticImageData;
    title: string;
    description: string;
  }[];
}
const ServicesSwiper = ({ services }: ServicesSwiperProps) => {
  return (
    <div className="w-full max-w-lg mx-auto lg:max-w-none">
      <Swiper
        modules={[Autoplay]}
        loop={services.length > 2}
        loopAdditionalSlides={services.length > 2 ? 1 : 0}
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
                  <div className="mt-2 text-base text-default-900">
                    {service.description}
                  </div>
                  <div className="mt-6 sm:mt-10 flex justify-center">
                    <Link
                      href={service.href}
                      target={service.target}
                      rel={service.rel}
                      passHref
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-6 sm:px-8 py-2 text-default-950 backdrop-blur-3xl transition-all duration-700 hover:border-primary hover:bg-primary hover:text-white"
                    >
                      View Services
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
  );
};

export default ServicesSwiper;
