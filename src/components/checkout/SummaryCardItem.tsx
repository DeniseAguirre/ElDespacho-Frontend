import { priceFormatter } from "@/helpers/priceFormatter";
import Image from "next/image";
import Badge from "../common/badges/Badge";
import { ProductCart } from "@/types/cart";

interface SummaryCartItemProps {
  item: ProductCart;
}

const SummaryCardItem: React.FC<SummaryCartItemProps> = ({ item }) => {
  return (
    <div key={item.id} className="mt-6 space-y-2 p-2 flex justify-between">
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
        <div className="text-sm text-white">
          <h2 className="font-extrabold">{item.name}</h2>
          <p>unidades: {item.quantity}</p>
          {item.discountPercentage > 0 && (
            <Badge variant="warning" size="sm" className="rounded-sm">
              {`${item.discountPercentage}% OFF`}
            </Badge>
          )}
        </div>
      </div>
      <div>
        <div className="flex flex-col items-end gap-2">
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
      </div>
    </div>
  );
};
export default SummaryCardItem;
