"use client";

import React from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import HomeLink from "./HomeLink";

const CheckoutNavbar: React.FC = () => {
  const scrollY = useScrollPosition();
  const isSticky = scrollY > 0;

  return (
    <div>
      <div
        className={`w-full z-50 transition-all duration-300 ${
          isSticky
            ? "bg-gray-900 py-2 fixed top-0"
            : "relative bg-gray-900 lg:fixed lg:top-0 lg:bg-transparent py-4"
        }`}
      >
        <nav className="mx-8 flex justify-between items-center">
          <HomeLink />
        </nav>
      </div>
    </div>
  );
};

export default CheckoutNavbar;
