import React from "react";
import Right from "./Right/Right";
import Left from "./Left/Left";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";

export default function Discover() {
  return (
    <Section className="min-h-screen">
      <Container size="main" className="grid grid-cols-3 gap-16">
        <div className="col-span-2">
          <Left />
        </div>
        <div className="col-span-1">
          <Right />
        </div>
      </Container>
    </Section>
  );
}
