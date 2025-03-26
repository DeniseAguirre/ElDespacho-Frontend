"use client";

import Image from "next/image";
import {
  Card,
  CardButton,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../common/cards/Card";
import { Plus } from "lucide-react";
import { priceFormatter } from "@/helpers/priceFormatter";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Product } from "@/types/product";
import {
  addItem,
  updateQuantity,
  removeItem,
} from "@/redux/features/cart/cartSlice";
import QuantityControl from "../cart/QuantityControl";
import { useCallback } from "react";
import Badge from "../common/badges/Badge";

interface ProductGridItemsProps {
  products: Product[];
}

const ProductGridItems: React.FC<ProductGridItemsProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);

  const handleAddToCart = useCallback(
    (product: Product) => {
      dispatch(addItem({ ...product, quantity: 1 }));
    },
    [dispatch]
  );

  const handleIncrement = useCallback(
    (product: Product) => {
      const cartItem = items.find((item) => item.id === product.id);
      if (cartItem) {
        dispatch(
          updateQuantity({ id: product.id, quantity: cartItem.quantity + 1 })
        );
      } else {
        handleAddToCart(product);
      }
    },
    [dispatch, items]
  );

  const handleDecrement = useCallback(
    (product: Product) => {
      const cartItem = items.find((item) => item.id === product.id);
      if (cartItem) {
        if (cartItem.quantity > 1) {
          dispatch(
            updateQuantity({ id: product.id, quantity: cartItem.quantity - 1 })
          );
        } else {
          dispatch(removeItem({ id: product.id }));
        }
      }
    },
    [dispatch, items]
  );

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => {
          const cartItem = items.find((item) => item.id === product.id);
          return (
            <Card key={product.id} className="flex flex-col relative">
              <CardHeader>
                {product.discountPercentage !== 0 && (
                  <Badge
                    variant="warning"
                    size="sm"
                    className="rounded-sm absolute top-2 right-2"
                  >
                    {`${product.discountPercentage}% OFF`}
                  </Badge>
                )}
                <Image
                  src={product.pictureFileUri}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-md"
                  priority
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-dark">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center border-t-2 border-grey-300">
                <div className="flex flex-col justify-center">
                  {product.discountPercentage !== 0 ? (
                    <>
                      <span className="text-sm line-through text-gray-500">
                        ${priceFormatter(product.price)}
                      </span>
                      <span className="text-lg font-extrabold text-green-600">
                        ${priceFormatter(product.priceWithDiscount)}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-extrabold text-primary">
                      ${priceFormatter(product.price)}
                    </span>
                  )}
                </div>

                {cartItem ? (
                  <QuantityControl
                    quantity={cartItem.quantity}
                    onIncrement={() => handleIncrement(product)}
                    onDecrement={() => handleDecrement(product)}
                    position="horizontal"
                    variant="default"
                    className="text-white rounded-md"
                  />
                ) : (
                  <CardButton onClick={() => handleAddToCart(product)}>
                    <Plus />
                  </CardButton>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGridItems;
