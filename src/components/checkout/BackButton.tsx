import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  href: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href }) => {
  return (
    <Link className="flex gap-4 text-primary p-4" href={href}>
      <ChevronLeft /> Volver al carrito
    </Link>
  );
};

export default BackButton;
