import Discover from "@/components/main/Discover/Discover";
import Favorites from "@/components/main/Favorites/Favorites";
import Home from "@/components/main/Home";
import Trends from "@/components/main/Trends/Trends";
import Twitch from "@/components/main/Twitch";
import React from "react";

export default function page() {
  return (
    <main className="flex-1">
      <Home />
      <Twitch />
      <Trends />
      <Favorites />
      <Discover />
    </main>
  );
}
