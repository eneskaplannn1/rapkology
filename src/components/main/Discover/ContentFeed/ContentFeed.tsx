"use client";
import React, { useState } from "react";
import DiscoverCardRow from "./DiscoverCardRow";
import DiscoverCardGrid from "./DiscoverCardGrid";
import DiscoverHeader from "@/components/shared/Discover/DiscoverHeader";
import { discoverCards as initialCards } from "@/data/constants";

export default function ContentFeed() {
  const [view, setView] = useState<"row" | "grid">("row");
  const [cards, setCards] = useState(initialCards);
  const [loading, setLoading] = useState(false);

  const handleMore = () => {
    setLoading(true);
    setTimeout(() => {
      setCards((prev) => [...prev, ...prev]);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <DiscoverHeader setView={setView} />
      <div
        className={` gap-6 mt-12 ${
          view === "row" ? "flex flex-col" : "grid grid-cols-2"
        }`}
      >
        {cards.map((card, idx) =>
          view === "row" ? (
            <DiscoverCardRow key={idx} card={card} />
          ) : (
            <DiscoverCardGrid key={idx} card={card} />
          )
        )}
      </div>
      <div className="mt-16 z-10 flex justify-center">
        <button
          className="bg-white text-black font-saira-bold text-lg px-10 py-3 shadow-xl button-custom-shape flex items-center justify-center gap-2 relative min-w-[140px]"
          onClick={handleMore}
          disabled={loading}
          style={{
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading && (
            <span className="inline-block w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin mr-2"></span>
          )}
          {loading ? "Yükleniyor..." : "Daha Fazla"}
        </button>
      </div>
    </>
  );
}
