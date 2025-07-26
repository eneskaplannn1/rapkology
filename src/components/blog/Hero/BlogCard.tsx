import React from "react";

export default function BlogCard({
  card,
}: {
  card: {
    image: string;
    title: string;
  };
}) {
  return (
    <div className="flex gap-4">
      {/* Card Image */}
      <div className="w-[12vw] h-[6vw] flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          src={card.image}
          alt={`Blog card ${card.title}`}
        />
      </div>

      {/* Card Text */}
      <div className="flex-1">
        <p className="text-black font-saira-bold text-[1.25vw] leading-[104%] uppercase">
          {card.title}
        </p>
      </div>
    </div>
  );
}
