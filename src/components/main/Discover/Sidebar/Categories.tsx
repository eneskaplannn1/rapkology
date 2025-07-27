import React from "react";
import DiscoverCategoryRow from "@/components/shared/Discover/DiscoverCategoryRow";

export default function Categories() {
  return (
    <>
      <h2 className="text-white text-3xl font-saira-bold uppercase tracking-wide relative mb-8">
        Ne Görmek İstersin?
      </h2>
      <div className="flex flex-row gap-2 mb-4 w-full  text-xs">
        <DiscoverCategoryRow isSelected title="Türk Rap" />
        <DiscoverCategoryRow title="Yabancı Rap" />
        <DiscoverCategoryRow title="Rap Haberleri" />
      </div>
      <div className="flex flex-row gap-2 mb-4 w-full text-xs">
        <DiscoverCategoryRow title="Haftanın Klipleri" />
        <DiscoverCategoryRow title="Ayın Klipleri" />
      </div>
      <div className="flex flex-row gap-2 w-full text-xs">
        <DiscoverCategoryRow title="Rap Sohbetleri" />
        <DiscoverCategoryRow title="Rap Müsabakaları" />
      </div>
    </>
  );
}
