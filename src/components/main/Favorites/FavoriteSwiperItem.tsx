import React from "react";

export default function FavoriteSwiperItem({
  slide,
}: {
  slide: {
    img: string;
    title: string;
    subtitle: string;
    rank: string;
  };
}) {
  return (
    <div
      className="group flex flex-col justify-center gap-y-4 overflow-hidden w-[274px] h-[264px] relative"
      style={{
        backgroundImage: "url('/Images/Trends/trends-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "0 16px 40px 80px",
      }}
    >
      <div
        className="album-image-container absolute z-10 transition-all duration-300 left-[-124px] top-[50px] group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "7.86px",
          overflow: "hidden",
        }}
      >
        <img
          src={slide.img}
          alt="Album Cover"
          width={164}
          height={164}
          className="album-image transition-transform duration-300"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 1,
          }}
        />
      </div>
      {/* Rank badge */}
      <div className="bg-[#323232] px-4 py-1 rounded-full text-white text-lg font-saira-normal flex items-center transition-opacity duration-300 group-hover:opacity-0">
        <span className="mr-1">{slide.rank.split("(")[0]}</span>
        <span className="font-bold">({slide.rank.split("(")[1]}</span>
      </div>
      <div className="text-center transition-opacity duration-300 group-hover:opacity-0">
        <div className="text-white text-2xl font-saira-normal">
          {slide.title}
        </div>
        <div className="text-white text-2xl font-saira-bold">
          {slide.subtitle}
        </div>
      </div>
    </div>
  );
}
