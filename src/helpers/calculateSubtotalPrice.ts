import { CartItem } from "@/redux/features/cart/cartSlice";

export const calculateSubtotalCartItems = (items: CartItem[]): number => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};
