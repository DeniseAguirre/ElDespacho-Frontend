"use client";

import React from "react";
import Badge from "../common/badges/Badge";
import { useAppSelector } from "@/redux/hooks";
import { quantityItemsCart } from "@/helpers/calculateQuantityItemsCart";

const CartBadge: React.FC = () => {
  const { items } = useAppSelector((state) => state.cart);

  return (
    <Badge
      variant={"error"}
      size="sm"
      className="rounded-full absolute -top-3 px-2"
    >
      {quantityItemsCart(items)}
    </Badge>
  );
};

export default CartBadge;
