import React from "react";
import { DiscoverCard } from "@/types/Discover";

export default function DiscoverCardGrid({ card }: { card: DiscoverCard }) {
  return (
    <div className="flex flex-col gap-4 h-auto w-full ">
      <img src={card.image} alt="discover-card" className="w-full h-4/5 " />
      <div className="text-[#3B3B3B] text-sm font-normal leading-tight">
        {card.date}
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-row gap-x-5 items-center">
          <img
            src={card.avatar}
            alt="discover-play"
            className="w-10 h-10 rounded-lg"
          />
          <div className="flex flex-col gap-y-1">
            <h1 className="text-white text-[1.11vw]  leading-tight font-saira-normal">
              {card.name}
            </h1>
          </div>
        </div>
        <h2 className="text-white text-[1.15vw]  leading-tight font-saira-bold">
          {card.title}
        </h2>
        <div className="w-full h-[1px] bg-[#3B3B3B]" />
        <div className="group cursor-pointer text-white text-[1.20vw] font-saira-normal leading-tight flex items-center gap-2 w-fit">
          <span>Devamını Oku</span>
          <svg
            className="w-4 h-4 text-[#F0E74D] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
