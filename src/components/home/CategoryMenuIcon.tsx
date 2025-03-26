import { Utensils, Salad, Drumstick } from "lucide-react";

type CategoryIconProps = {
  categoryName: string;
  className?: string;
};

const CategoryMenuIcon: React.FC<CategoryIconProps> = ({
  categoryName,
  className = "",
}) => {
  switch (categoryName) {
    case "Clasicas":
      return <Drumstick className={className} />;
    case "Gourmets":
      return <Utensils className={className} />;
    case "Vegetarianas":
      return <Salad className={className} />;
    default:
      return null;
  }
};

export default CategoryMenuIcon;
