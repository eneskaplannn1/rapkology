"use client";
import React, { useState } from "react";
import MusicPlatformsBanner from "./MusicBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import FavoriteSwiperItem from "./FavoriteSwiperItem";
import { favSlides } from "@/data/constants";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";
import Title from "@/components/shared/Title";

export default function Favorites() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = favSlides.length;

  return (
    <Section className="h-auto relative">
      <MusicPlatformsBanner />
      <Container size="main" className="grid grid-cols-6 justify-between">
        <Title
          title="AYIN FAVORİLERİ"
          icon={false}
          className="col-span-3 mt-12"
        />
        <div className="flex flex-col w-full col-span-3">
          <Swiper
            spaceBetween={10}
            slidesPerView={2.5}
            className="w-full"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {favSlides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <FavoriteSwiperItem slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Progress Bar */}
          <div className="relative w-full h-2 mt-8 ">
            <div className="absolute left-0 top-0 w-full h-full bg-[#2A2A2A] rounded-full opacity-30" />
            <div
              className="absolute left-0 top-0 h-full bg-[#F0E74D] rounded-full transition-all duration-300"
              style={{ width: `${((activeIndex + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
