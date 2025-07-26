import React from "react";
import Image from "next/image";
import WaveEffect from "../shared/WaveEffect";

export default function Twitch() {
  return (
    <div
      id="twitch"
      className="w-full min-h-[642px] container  overflow-hidden relative"
      style={{
        backgroundImage: "url('/Images/Twitch/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Boy image on the left */}
      <div className="absolute left-20 bottom-32 z-32">
        <img src="/Images/Twitch/boy.png" alt="Boy" width={419} height={437} />
      </div>
      <div className="absolute right-20 bottom-20 z-32">
        <img
          src="/Images/Twitch/girl.png"
          alt="Girl"
          width={303}
          height={530}
        />
      </div>
      <div
        className="relative z-20 flex flex-row items-center  w-[500px] h-[160px] mx-auto mt-20"
        style={{ transform: "rotate(-3.7deg)" }}
      >
        {/* Twitch Icon */}
        <Image
          src="/Images/Twitch/twitch.png"
          alt="Twitch Icon"
          width={250}
          height={150}
          style={{ width: 250, height: 150 }}
        />

        <div className="flex flex-col  ml-2 pl-8 border-l border-[#3B3B3B]">
          <h2 className="text-[55px] font-saira-bold text-white leading-12">
            HER HAFTA <span className="text-[#F0E74D]">CANLIDAYIZ!</span>
          </h2>
          <p className="text-lg text-white font-saira-bold mt-1 ">
            Bizi Takip Edin!
          </p>
        </div>
      </div>
      <div
        className="flex flex-row items-center  justify-center p-4 border border-[#2A2A2A] rounded-2xl w-fit mx-auto mt-4 gap-x-4"
        style={{ transform: "rotate(-5.7deg)" }}
      >
        <button className="bg-[#864CF6] p-2 flex flex-row gap-x-2 rounded-lg">
          <Image
            src="/vectors/Twitch/hearth.svg"
            alt="Twitch Icon"
            width={20}
            height={20}
          />
          <p className="text-white font-saira-bold">Takip Et</p>
        </button>
        <button className="bg-[#222123] p-2 flex flex-row gap-x-2 rounded-lg">
          <Image
            src="/vectors/Twitch/star.svg"
            alt="Twitch Icon"
            width={20}
            height={20}
          />
          <p className="text-white font-saira-bold">Abone Ol </p>
          <Image
            src="/vectors/Twitch/down-arrow.svg"
            alt="Twitch Icon"
            width={15}
            height={15}
          />
        </button>
      </div>

      <WaveEffect />
    </div>
  );
}
