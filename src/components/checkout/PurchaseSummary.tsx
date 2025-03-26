"use client";

import { useAppSelector } from "@/redux/hooks";
import SummaryCardItem from "./SummaryCardItem";
import CartSummary from "../cart/CartSummary";

const PurchaseSummary: React.FC = () => {
  const { items, subtotal, discount, total } = useAppSelector(
    (state) => state.cart
  );

  const handleReturnItems = () => {
    return items.map((item) => <SummaryCardItem key={item.id} item={item} />);
  };
  return (
    <div className="p-4 sm:px-6 lg:px-8 lg:py-12">
      <div className="max-w-xl mx-auto bg-gray-800 bg-opacity-60 backdrop-blur-lg shadow-lg rounded-md p-8 transition-all duration-300">
        <h2 className="text-xl font-bold text-left text-light mb-8">
          Resumen del pedido
        </h2>
        {handleReturnItems()}
        <CartSummary subtotal={subtotal} discount={discount} total={total} />
      </div>
    </div>
  );
};

export default PurchaseSummary;
