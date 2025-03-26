import { priceFormatter } from "@/helpers/priceFormatter";
import Image from "next/image";
import Badge from "../common/badges/Badge";
import QuantityControl from "./QuantityControl";
import { ProductCart } from "@/types/cart";

interface CartItemProps {
  item: ProductCart;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity }) => {
  const handleIncrement = () => onUpdateQuantity(item.id, item.quantity + 1);
  const handleDecrement = () => onUpdateQuantity(item.id, item.quantity - 1);

  return (
    <div key={item.id} className="mb-2 p-2">
      <div className="flex items-center justify-end flex-row-reverse">
        <div className="flex">
          <div className="w-20 h-20 relative mr-2">
            <Image
              src={item.pictureFileUri}
              alt={item.name}
              fill
              className="rounded-md object-cover"
              sizes="80px"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-sm text-white font-semibold">{item.name}</h2>
            <div className="flex items-start gap-2">
              {item.discountPercentage !== 0 ? (
                <>
                  <span className="text-sm line-through text-gray-500">
                    ${priceFormatter(item.price)}
                  </span>
                  <span className="text-sm font-extrabold text-green-600">
                    ${priceFormatter(item.priceWithDiscount)}
                  </span>
                </>
              ) : (
                <span className="text-sm font-extrabold text-primary">
                  ${priceFormatter(item.price)}
                </span>
              )}
            </div>
            {item.discountPercentage !== 0 && (
              <Badge variant="warning" size="sm" className="rounded-sm">
                {`${item.discountPercentage}% OFF`}
              </Badge>
            )}
          </div>
        </div>
        <QuantityControl
          quantity={item.quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          variant="secondary"
          className="text-white"
        />
      </div>
    </div>
  );
};

export default CartItem;
