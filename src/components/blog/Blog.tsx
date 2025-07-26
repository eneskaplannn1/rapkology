import React from "react";
import Hero from "./Hero/Hero";
import BlogDiscover from "./Discover/BlogDiscover";
import CTO from "../main/Discover/Right/CTO";
import Klip from "./Klips/Klip";
import BlogFooter from "./BlogFooter";

export default function Blog() {
  return (
    <>
      <Hero />
      <BlogDiscover />
      <Klip />
      <BlogFooter />
    </>
  );
}
