import ContentDiscovery from "@/components/main/Discover/ContentDiscovery";
import MonthlyFavorites from "@/components/main/Favorites/MonthlyFavorites";
import HeroSection from "@/components/main/HeroSection";
import TrendingNews from "@/components/main/Trends/TrendingNews";
import LiveStreamPromo from "@/components/main/LiveStreamPromo";
import React from "react";

export default function page() {
  return (
    <main className="flex-1">
      <HeroSection />
      <LiveStreamPromo />
      <TrendingNews />
      <MonthlyFavorites />
      <ContentDiscovery />
    </main>
  );
}
