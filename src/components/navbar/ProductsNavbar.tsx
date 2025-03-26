"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { useState } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Link from "next/link";
import { Home, ShoppingCart } from "lucide-react";
import CartBadge from "../cart/CartBadge";
import Cart from "../cart/Cart";
import HomeLink from "./HomeLink";
import Search from "./Search";

const ProductsNavbar: React.FC = () => {
  const scrollY = useScrollPosition();
  const isSticky = scrollY > 0;
  const [open, setOpen] = useState<boolean>(false);

  const handleStateViewDrawer = (): void => {
    setOpen((state) => !state);
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
        <nav className="mx-8 flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/3 flex justify-between items-center mb-4 md:mb-0">
            <HomeLink />
            <div className="flex space-x-4 items-center md:hidden">
              {siteConfig?.navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-white">
                  <Home />
                </Link>
              ))}
              <button
                className="text-primary relative"
                onClick={() => handleStateViewDrawer()}
              >
                <CartBadge />
                <ShoppingCart />
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:flex md:justify-center">
            <Search />
          </div>

          <div className="hidden md:flex space-x-4 items-center md:w-1/3 md:justify-end">
            {siteConfig?.navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white">
                <Home />
              </Link>
            ))}
            <button
              className="text-primary relative"
              onClick={() => handleStateViewDrawer()}
            >
              <CartBadge />
              <ShoppingCart />
            </button>
          </div>
        </nav>
        <Cart open={open} handleStateViewDrawer={handleStateViewDrawer} />
      </div>
    </div>
  );
};

export default ProductsNavbar;
