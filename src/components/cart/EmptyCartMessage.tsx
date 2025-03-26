import { ShoppingBag } from "lucide-react";

const EmptyCartMessage: React.FC = () => (
  <div className="p-2 flex flex-col items-center">
    <ShoppingBag size={64} className="text-primary" />
    <h6 className="text-lg text-white font-semibold my-4">Carrito vacío</h6>
    <p className="text-sm text-white">Agrega algunos productos</p>
  </div>
);

export default EmptyCartMessage;
