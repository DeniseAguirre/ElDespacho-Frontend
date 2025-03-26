import { Trash2 } from "lucide-react";
import Button from "../common/buttons/Button";

type PositionVariant = "vertical" | "horizontal";
type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

interface QuantityControlProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  className?: string;
  position?: PositionVariant;
  variant?: ButtonVariant;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  onIncrement,
  onDecrement,
  className,
  position = "vertical",
  variant = "ghost",
}) => {
  const variantPosition: Record<PositionVariant, string> = {
    vertical: "flex flex-col items-center w-12",
    horizontal: "flex flex-row-reverse",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    default: "bg-primary text-white hover:bg-primary/90",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-dark text-white hover:bg-dark/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "underline-offset-4 hover:underline text-primary",
  };

  const combinedClassName = `${variantPosition[position]} ${className}`;

  return (
    <div className={combinedClassName}>
      <Button className="w-12" variant={variant} onClick={onIncrement}>
        +
      </Button>
      <input
        type="text"
        value={quantity}
        readOnly
        className={`w-12 text-center ${variantStyles[variant]}`}
      />
      <Button variant={variant} className="w-12" onClick={onDecrement}>
        {quantity === 1 ? <Trash2 size={16} /> : "-"}
      </Button>
    </div>
  );
};

export default QuantityControl;
