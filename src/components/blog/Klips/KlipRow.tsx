import { klips } from "@/data/constants";
import Image from "next/image";
import React from "react";

export default function KlipRow({ klip }: { klip: (typeof klips)[0] }) {
  return (
    <div key={klip.title} className="flex flex-col gap-y-4">
      <div className="relative w-full aspect-video cursor-pointer">
        <Image
          src={klip.img}
          alt={klip.title || "klip"}
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/Images/Klips/video.svg"
            alt="video icon"
            width={60}
            height={60}
            className="pointer-events-none"
          />
        </div>
      </div>
      <div className="text-white text-[1.15vw] font-saira-bold">
        {klip.description}
      </div>
    </div>
  );
}
