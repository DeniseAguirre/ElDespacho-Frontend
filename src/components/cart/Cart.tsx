"use client";

import {
  removeItem,
  updateQuantity,
  clearCart,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Button from "../common/buttons/Button";
import { Trash2, X } from "lucide-react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCartMessage from "./EmptyCartMessage";
import { CardButton } from "../common/cards/Card";
import { useCallback } from "react";

interface CartProps {
  open: boolean;
  handleStateViewDrawer: () => void;
}

const Cart: React.FC<CartProps> = ({ open, handleStateViewDrawer }) => {
  const dispatch = useAppDispatch();
  const { items, subtotal, discount, total } = useAppSelector(
    (state) => state.cart
  );

  const handleQuantityChange = useCallback(
    (id: string, newQuantity: number) => {
      newQuantity > 0
        ? dispatch(updateQuantity({ id: id, quantity: newQuantity }))
        : dispatch(removeItem({ id: id }));
    },
    [dispatch]
  );

  return (
    <div
      className={`fixed inset-y-0 right-0 transform ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 bg-dark w-80 shadow-lg overflow-y-auto`}
    >
      <div className="flex justify-between items-center pt-4">
        <h1 className="text-2xl text-white font-bold ml-4">Tu carrito</h1>
        <Button
          variant="ghost"
          onClick={handleStateViewDrawer}
          className="text-primary"
        >
          <X />
        </Button>
      </div>

      <div className="max-w-md mx-auto p-2 bg-dark">
        {items.length > 0 ? (
          <>
            <Button
              variant="ghost"
              onClick={() => dispatch(clearCart())}
              className="text-red-500 gap-2"
            >
              Vaciar carrito <Trash2 size={16} />
            </Button>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleQuantityChange}
              />
            ))}
            <CartSummary
              subtotal={subtotal}
              discount={discount}
              total={total}
            />
            <CardButton
              className="w-full"
              onClick={() => (window.location.href = "/checkout")}
            >
              Pedir
            </CardButton>
          </>
        ) : (
          <EmptyCartMessage />
        )}
      </div>
    </div>
  );
};

export default Cart;
