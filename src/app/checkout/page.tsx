"use client";

import Checkout from "@/components/checkout/Checkout";
import Hero from "@/components/checkout/Hero";
import BackButton from "@/components/checkout/BackButton";
import CheckoutNavbar from "@/components/navbar/CheckoutNavbar";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const Page: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart);
  const { items } = cartItems;

  useEffect(() => {
    if (items.length === 0) {
      redirect("/products");
    }
  }, []);

  return (
    <>
      <CheckoutNavbar />
      <Hero />
      <div className="bg-gray-900">
        <BackButton href="/products" />
        <Checkout />
      </div>
    </>
  );
};

export default Page;
