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
        <h2 className="text-white text-[1.25vw]  leading-tight font-saira-bold">
          {card.title}
        </h2>
        <div className="w-full h-[1px] bg-[#3B3B3B]" />
        <div className="text-white text-[1.11vw] font-saira-normal leading-tight">
          Devamını Oku
        </div>
      </div>
    </div>
  );
}
