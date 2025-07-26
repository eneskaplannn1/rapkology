import React from "react";
import dustImage from "../../../../public/Images/Dust.jpg";
import Crown from "../../../../public/Images/Blog/crown.svg";

export default function BgEffect() {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${dustImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
          mixBlendMode: "multiply",
        }}
      />

      <div
        className="absolute "
        style={{
          top: "10%",
          left: "40%",
          width: "700px",
          height: "700px",
        }}
      >
        <img src={Crown.src} alt="Crown" className="w-auto h-auto" />
      </div>
    </>
  );
}
