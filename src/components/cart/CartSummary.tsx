import { priceFormatter } from "@/helpers/priceFormatter";

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  discount,
  total,
}) => {
  return (
    <div>
      <div className="mt-6 space-y-2 p-2">
        <div className="flex justify-between">
          <span className="text-white">Productos</span>
          <span className="font-semibold text-white">
            ${priceFormatter(subtotal)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-white">Descuento</span>
          <span className="font-semibold text-white">
            ${priceFormatter(discount)}
          </span>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t p-2">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl text-white font-semibold">Total</span>
          <span className="text-2xl text-primary font-bold">
            ${priceFormatter(total)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default CartSummary;
