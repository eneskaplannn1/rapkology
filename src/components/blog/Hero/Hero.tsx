import React from "react";
import WaveEffect from "../../shared/WaveEffect";
import BgEffect from "./BgEffect";

import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import BlogCard from "./BlogCard";
import { blogCards } from "@/data/constants";
import Image from "next/image";

export default function Hero() {
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
            <div className="relative w-full h-[37vh]">
              <Image
                src="/Images/Blog/hero.png"
                alt="Hero Singer"
                fill
                className="object-cover"
              />

              <Image
                src="/vectors/Blog/play.svg"
                alt="Play"
                width={100}
                height={100}
                className="absolute bottom-8 z-10 right-8 "
              />

              <div className="absolute bottom-8 left-8">
                <h2 className="text-white text-2xl  font-saira-bold">
                  LOREM FT - IPSUM
                </h2>
              </div>
            </div>

            <p className="text-black mt-6 text-[1.74vw] leading-relaxed font-saira-bold">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA
              MI. MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE
              PRETI ...
            </p>
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
