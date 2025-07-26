"use client";
import Image from "next/image";
import React from "react";
import Title from "../Title";

export default function DiscoverHeader({
  setView,
}: {
  setView?: (view: "row" | "grid") => void;
}) {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <Title title="Keşfet" icon="/vectors/Discover/compass.svg" />
        <div className="flex flex-row gap-x-4">
          <button>
            <Image
              src="/vectors/Discover/search.svg"
              alt="discover-arrow"
              width={23}
              height={23}
            />
          </button>
          <button onClick={() => setView && setView("row")}>
            <Image
              src="/vectors/Discover/burger.svg"
              alt="discover-arrow"
              width={23}
              height={23}
            />
          </button>
          <button onClick={() => setView && setView("grid")}>
            <Image
              src="/vectors/Discover/card.svg"
              alt="discover-arrow"
              width={23}
              height={23}
            />
          </button>
        </div>
      </div>
    </>
  );
}
