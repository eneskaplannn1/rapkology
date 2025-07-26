"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Navigation } from "swiper/modules";
import Section from "../shared/Section";
import WaveEffect from "../shared/WaveEffect";

interface Slide {
  id: number;
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const slides = [
  {
    id: 1,
    backgroundImage: "/Images/HomeSinger.png",
    title: "TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    buttonText: "Devamını Oku",
    buttonLink: "/link",
  },
  // Add more slides here if needed
  {
    id: 2,
    backgroundImage: "/Images/HomeSinger.png", // You can change this to different image
    title: "SECOND SLIDE",
    subtitle: "ANOTHER SLIDE CONTENT",
    buttonText: "Explore",
    buttonLink: "/explore",
  },
];

export default function Home(): React.ReactElement {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      if (
        swiper.params.navigation &&
        typeof swiper.params.navigation === "object"
      ) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <Section className="relative w-screen  overflow-hidden h-[800px]">
      {/* Background Image - Outside Swiper */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          {/* Image positioned on the left */}
          <div className="absolute right-[20%] top-20 w-full h-full overflow-hidden">
            <Image
              src={
                slides[currentSlide]?.backgroundImage ||
                slides[0].backgroundImage
              }
              alt="Hero Background"
              fill
              className="object-cover object-center transition-opacity duration-500"
              style={{
                objectPosition: "center center",
              }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-[4.24vw] top-1/2 -translate-y-1/2 z-[60] w-[1.39vw] h-[1.39vw]"
        aria-label="Previous Slide"
      >
        <Image src="/vectors/left.svg" alt="Previous" fill />
      </button>

      <button
        ref={nextRef}
        className="absolute right-[4.24vw] top-1/2 -translate-y-1/2 z-[60] w-[1.39vw] h-[1.39vw]"
        aria-label="Next Slide"
      >
        <Image src="/vectors/right.svg" alt="Next" fill />
      </button>

      {/* Swiper for content only */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="w-full h-full relative z-20"
      >
        {slides.map((slide: Slide, idx: number) => (
          <SwiperSlide key={idx}>
            <div className="absolute top-0 left-[50vw] w-full h-full  px-16">
              {/* Text content on the right */}
              <div className="w-[33vw] flex flex-col justify-center h-full text-left">
                <h1 className="text-[3.73vw] font-saira-bold mb-6 leading-16 text-white">
                  {slide.title}
                </h1>
                <p className="text-[1.11vw] mb-8 text-gray-200 max-w-xl drop-shadow font-saira-normal ">
                  {slide.subtitle}
                </p>
                <button className="w-fit bg-[#F0E74D] text-black font-saira-bold text-lg px-10 py-3 shadow-xl button-custom-shape">
                  Devamını Oku
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <WaveEffect height={200} />
    </Section>
  );
}
