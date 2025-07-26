import React from "react";
import Categories from "./Categories";
import CTO from "./CTO";

export default function Right() {
  return (
    <div className="flex flex-col items-center min-h-full py-8">
      <Categories />
      <CTO />
    </div>
  );
}
