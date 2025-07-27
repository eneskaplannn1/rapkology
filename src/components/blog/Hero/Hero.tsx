"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import WaveEffect from "../../shared/WaveEffect";
import BgEffect from "./BgEffect";

import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import BlogCard from "./BlogCard";
import { blogCards, heroSlides } from "@/data/constants";
import Image from "next/image";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Section className="h-auto bg-[#F0E74D] relative  mt-20 pb-32!">
      <BgEffect />

      <Container>
        <ul className="flex flex-row gap-x-4 text-[0.97vw]">
          <li className="text-[#121212] after:content-['>'] after:ml-4 after:text-[#121212] after:inline-block cursor-pointer">
            ANA SAYFA
          </li>
          <li className="text-[#121212] after:content-['>'] after:ml-4 after:text-[#121212] after:inline-block cursor-pointer">
            BLOG
          </li>
          <li className="text-[#121212] ">LOREM IPSUM DOLOR</li>
        </ul>
        <Title titleClassName="text-black!" title="Blog" icon={false} />
        <div className="grid grid-cols-5 gap-4 mt-4">
          <div className="relative col-span-3">
            <div className="relative w-full ">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                effect="coverflow"
                grabCursor={true}
                slidesPerView="auto"
                loop={true}
                className="w-full h-full"
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
              >
                {heroSlides.map((slide) => (
                  <SwiperSlide key={slide.id} className="w-full h-full">
                    <div className="relative w-full h-full">
                      <div
                        className="relative"
                        style={{
                          aspectRatio: "73/40",
                          width: "50vw",
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      >
                        <a className="absolute inset-0 w-full h-full">
                          <img
                            src={slide.image}
                            alt="Hero Slide"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </a>
                      </div>

                      <Image
                        src="/vectors/Blog/play.svg"
                        alt="Play"
                        width={100}
                        height={100}
                        className="absolute bottom-8 z-10 right-8"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-black text-[1.54vw]  font-saira-bold">
                        LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT
                        UT ET MASSA MI. MAURIS NEC LEO NON LIBERO SODALES
                        LOBORTIS. QUISQUE A NEQUE PRETI ...
                      </p>
                      <div className="flex gap-2 mt-4"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6 col-span-2">
            {blogCards.map((card, index) => (
              <BlogCard key={index} card={card} />
            ))}
          </div>
        </div>
      </Container>

      <WaveEffect height={140} />
    </Section>
  );
}
