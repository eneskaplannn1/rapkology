import React from "react";
import Section from "../../shared/Section";
import Container from "../../shared/Container";
import Title from "../../shared/Title";
import TrendRow from "./TrendRow";
import { trends } from "@/data/constants";

export default function Trends() {
  return (
    <Section className="h-auto relative">
      <Container size="main" className="flex flex-col h-full">
        <Title title="Trendler" icon="/vectors/Trends/right-up-icon.svg" />
        <div className="flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-3 grid-rows-2 gap-x-12 gap-y-8 mt-12 mb-8">
            {trends.map((trend) => (
              <TrendRow key={trend.number} trend={trend} />
            ))}
          </div>
          <div className="flex justify-center pb-8">
            <button className="bg-white text-black font-saira-bold text-lg px-10 py-3 shadow-xl button-custom-shape">
              Tümünü Gör
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
