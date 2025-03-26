import { CartItem } from "@/redux/features/cart/cartSlice";

export const quantityItemsCart = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.quantity, 0);
};
