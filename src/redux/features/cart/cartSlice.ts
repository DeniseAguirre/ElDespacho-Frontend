import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calculateDiscountCartItems } from "@/helpers/calculateDiscountedPrice";
import { calculateSubtotalCartItems } from "@/helpers/calculateSubtotalPrice";

export interface CartItem {
  id: string;
  categorySlug: string;
  pictureFileUri: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  discountPercentage: number;
  priceWithDiscount: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
}

const initialState: CartState = {
  items: [],
  subtotal: 0,
  discount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
      state.subtotal = calculateSubtotalCartItems(state.items);
      state.discount = calculateDiscountCartItems(state.items);
      state.total = state.subtotal - state.discount;
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.subtotal = calculateSubtotalCartItems(state.items);
      state.discount = calculateDiscountCartItems(state.items);
      state.total = state.subtotal - state.discount;
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        state.subtotal = calculateSubtotalCartItems(state.items);
        state.discount = calculateDiscountCartItems(state.items);
        state.total = state.subtotal - state.discount;
      }
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
