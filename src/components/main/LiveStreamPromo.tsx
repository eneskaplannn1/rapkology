import React from "react";
import Image from "next/image";
import WaveEffect from "../shared/WaveEffect";
import Section from "../shared/Section";
import Container from "../shared/Container";

export default function LiveStreamPromo() {
  return (
    <Section className="relative">
      <Container
        style={{
          backgroundImage: "url('/Images/Twitch/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "642px",
        }}
      >
        <LiveStreamPromoImages />
        <LiveStreamPromoContent />
        <LiveStreamPromoButton />
      </Container>
      <WaveEffect />
    </Section>
  );
}

function LiveStreamPromoImages() {
  return (
    <>
      {" "}
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
    </>
  );
}

function LiveStreamPromoContent() {
  return (
    <div
      className="relative z-20 flex flex-row items-center mx-auto mt-20  w-2/3 justify-center"
      style={{ transform: "rotate(-3.7deg)" }}
    >
      <div className="relative w-[300px] " style={{ aspectRatio: "158/97" }}>
        <Image
          src="/Images/Twitch/twitch.png"
          alt="Twitch Icon"
          fill
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col  -ml-8  pl-8 border-l border-[#3B3B3B]">
        <h2 className="text-[3.8vw] font-saira-light text-white leading-[4vw] ">
          HER HAFTA
          <br />
          <span className="text-[#F0E74D] font-saira-bold">CANLIDAYIZ!</span>
        </h2>
        <p className="text-[1.11vw] text-white font-saira-bold mt-1 ">
          Bizi Takip Edin!
        </p>
      </div>
    </div>
  );
}

function LiveStreamPromoButton() {
  return (
    <div
      className="flex flex-row items-center  justify-center p-4 border border-[#2A2A2A] rounded-2xl w-fit mx-auto mt-4 gap-x-4"
      style={{ transform: "rotate(-5.7deg)" }}
    >
      <button className="bg-[#864CF6] py-2 px-4 flex flex-row gap-x-2 rounded-lg">
        <Image
          src="/vectors/Twitch/hearth.svg"
          alt="Twitch Icon"
          width={20}
          height={20}
        />
        <p className="text-white font-saira-bold">Takip Et</p>
      </button>
      <button className="bg-[#222123] py-2 px-4 flex flex-row gap-x-2 rounded-lg">
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
  );
}
