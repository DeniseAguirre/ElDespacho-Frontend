"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { useState } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Link from "next/link";
import { Home } from "lucide-react";
import HomeLink from "./HomeLink";
import PrimaryButton from "../common/buttons/PrimaryButton";

const PagesNavbar: React.FC = () => {
  const scrollY = useScrollPosition();
  const isSticky = scrollY > 0;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

          <div className="hidden lg:flex space-x-4 items-center">
            {siteConfig?.navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white">
                <Home />
              </Link>
            ))}
            <PrimaryButton href={siteConfig.primaryButton.href}>
              {siteConfig.primaryButton.name}
            </PrimaryButton>
          </div>

          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none p-2 border border-white/10 rounded-md"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="lg:hidden bg-gray-900 p-4">
            <nav className="flex flex-col border-t border-white/10">
              {siteConfig?.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white p-4 capitalize"
                >
                  {item.label}
                </Link>
              ))}
              <PrimaryButton href={siteConfig.primaryButton.href}>
                {siteConfig.primaryButton.name}
              </PrimaryButton>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default PagesNavbar;
