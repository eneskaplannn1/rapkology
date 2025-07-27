import React from "react";

export default function WaveEffect({ height = 192 }: { height?: number }) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-[5] pointer-events-none w-full"
      style={{ height: `${height}px` }}
    >
      <img
        src="/Images/Twitch/vector.svg"
        alt="Wave Effect"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
