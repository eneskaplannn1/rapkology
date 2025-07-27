import React from "react";
import ContentFeed from "./ContentFeed/ContentFeed";
import Sidebar from "./Sidebar/Sidebar";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";

export default function ContentDiscovery() {
  return (
    <Section className="min-h-screen">
      <Container size="main" className="grid grid-cols-3 gap-16">
        <div className="col-span-2">
          <ContentFeed />
        </div>
        <div className="col-span-1 flex flex-col items-center min-h-full py-8">
          <Sidebar />
        </div>
      </Container>
    </Section>
  );
}
