import React from "react";
import Image from "next/image";

export default function MusicPlatformsBanner() {
  return (
    <div className="relative w-[602.76px] h-[126.62px]">
      {/* Slanted White Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 520 120"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 520,0 520,90 0,120" fill="#fff" />
      </svg>
      {/* Logos Row */}
      <div className="absolute top-0 left-10 w-full h-full flex items-center pl-8 gap-8 z-10">
        <Image
          src="/vectors/Favorites/yt.svg"
          alt="YouTube"
          width={150}
          height={40}
        />
        <Image
          src="/vectors/Favorites/spotify.svg"
          alt="Spotify"
          width={150}
          height={40}
        />
      </div>
    </div>
  );
}
