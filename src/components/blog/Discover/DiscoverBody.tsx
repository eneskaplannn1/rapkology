import DiscoverCardGrid from "@/components/main/Discover/Left/DiscoverCardGrid";
import DiscoverCardRow from "@/components/main/Discover/Left/DiscoverCardRow";
import DiscoverCategoryRow from "@/components/shared/Discover/DiscoverCategoryRow";
import { discoverCards } from "@/data/constants";
import React from "react";

export default function DiscoverBody({ view }: { view: "row" | "grid" }) {
  return (
    <div className="relative">
      <div className="flex flex-row gap-2  w-full mt-4">
        <DiscoverCategoryRow isSelected title="Tümü" />
        <DiscoverCategoryRow title="Türk Rap" />
        <DiscoverCategoryRow title="Yabancı Rap" />
        <DiscoverCategoryRow title="Haberleri" />
        <DiscoverCategoryRow title="Haftanın Klipleri" />
        <DiscoverCategoryRow title="Ayın Klipleri" />
        <DiscoverCategoryRow title="Rap Mix" />
        <DiscoverCategoryRow title="Spotify Hot" />
      </div>

      {view == "row" && (
        <div className="grid grid-cols-2 gap-8 mt-12">
          {discoverCards.map((card) => (
            <DiscoverCardRow key={card.title} card={card} />
          ))}
        </div>
      )}
      {view == "grid" && (
        <div className="grid grid-cols-4 gap-8 mt-12">
          {discoverCards.map((card) => (
            <DiscoverCardGrid key={card.title} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}
