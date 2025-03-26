import { CartItem } from "@/redux/features/cart/cartSlice";

export const calculateDiscountCartItems = (items: CartItem[]): number => {
  return items.reduce(
    (acc, item) =>
      acc + (item.discountPercentage * item.price * item.quantity) / 100,
    0
  );
};
