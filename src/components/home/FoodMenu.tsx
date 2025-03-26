import TitleSection from "../common/headers/TitleSection";
import FoodMenuTabs from "./FoodMenuTabs";
import { Category } from "@/types/product";
import { getProductsByCategory } from "@/lib/products";

export default async function FoodMenu() {
  const categories: Category[] | [] = await getProductsByCategory();
  if (!categories) return null;
  return (
    <div className="py-20 bg-gray-100" id="food-menu">
      <div className="container mx-auto px-4 aos-init" data-aos="fade-up">
        <TitleSection
          section="Menú"
          title="Las más populares"
          className="text-center"
        />
        <FoodMenuTabs categories={categories} />
      </div>
    </div>
  );
}
