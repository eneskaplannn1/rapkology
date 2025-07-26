import React from "react";

export default function DiscoverCategoryRow({
  title,
  isSelected = false,
}: {
  title: string;
  isSelected?: boolean;
}) {
  return (
    <button
      className={`border w-fit py-1 px-4 text-[1.1vw] transition-colors hover:bg-[#F0E74D] hover:border-[#F0E74D] hover:text-black ${
        isSelected
          ? "bg-[#F0E74D] text-black border-[#F0E74D] font-saira-bold"
          : "text-white border-white font-saira-normal"
      }`}
    >
      {title}
    </button>
  );
}
