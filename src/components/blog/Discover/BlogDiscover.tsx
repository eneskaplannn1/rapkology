"use client";
import DiscoverHeader from "@/components/shared/Discover/DiscoverHeader";
import React, { useState } from "react";
import DiscoverBody from "./DiscoverBody";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

export default function BlogDiscover() {
  const [view, setView] = useState<"row" | "grid">("grid");
  return (
    <Section className="relative h-auto">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <img src="/vectors/Blog/diamond.svg" alt="Discover" />
      </div>
      <Container size="main" className="relative z-10 pt-20! h-full">
        <DiscoverHeader setView={setView} />
        <DiscoverBody view={view} />
      </Container>
    </Section>
  );
}
