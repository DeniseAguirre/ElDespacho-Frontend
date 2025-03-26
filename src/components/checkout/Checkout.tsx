import CheckoutForm from "./CheckoutForm";
import PurchaseSummary from "./PurchaseSummary";

const Checkout: React.FC = () => {
  return (
    <div className="flex grid grid-cols-1 lg:grid-cols-2">
      <CheckoutForm />
      <PurchaseSummary />
    </div>
  );
};

export default Checkout;
