"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import PrimaryButton from "../common/buttons/PrimaryButton";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import HomeLink from "./HomeLink";

const HomeNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isSticky = scrollY > 0;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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
          <div className="hidden lg:flex space-x-2 items-center">
            {siteConfig?.landingNavItems.map((item) => (
              <ScrollLink
                key={item.href}
                to={item.href}
                smooth={"easeInOutQuint"}
                spy={true}
                duration={500}
                activeStyle={{ color: "#FEA116", fontWeight: "bold" }}
                className="p-2 rounded hover:text-primary text-white font-semibold cursor-pointer"
              >
                {item.label}
              </ScrollLink>
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
              {siteConfig?.landingNavItems.map((item) => (
                <ScrollLink
                  key={item.href}
                  to={item.href}
                  smooth={"easeInOutQuint"}
                  spy={true}
                  duration={500}
                  activeStyle={{ color: "#FEA116", fontWeight: "bold" }}
                  onClick={closeMenu}
                  className="p-4 rounded text-white hover:text-primary capitalize cursor-pointer"
                >
                  {item.label}
                </ScrollLink>
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

export default HomeNavbar;
