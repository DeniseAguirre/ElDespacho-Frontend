import { use } from "react";
import ProductGridItems from "@/components/products/ProductGridItems";
import { Product } from "@/types/product";
import { SearchX } from "lucide-react";

export default function SearchResults({
  searchValue,
  getFilteredProducts,
}: {
  searchValue: string;
  getFilteredProducts: (searchValue: string) => Promise<Product[]>;
}) {
  const filteredProducts = use(getFilteredProducts(searchValue));

  const resultsText = filteredProducts.length > 1 ? "resultados" : "resultado";

  return (
    <>
      {searchValue && (
        <div className="mb-4 text-dark text-center">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col justify-center items-center pb-8">
              <SearchX size={48} color="#FEA116" />
              <p className="font-bold text-xl">
                No encontramos productos que coincidan con "{searchValue}"
              </p>
              <p>Podés probar con un nuevo término</p>
            </div>
          ) : (
            `Mostrando ${filteredProducts.length} ${resultsText} para 
              "${searchValue}"`
          )}
        </div>
      )}
      {filteredProducts.length > 0 && (
        <ProductGridItems products={filteredProducts} />
      )}
    </>
  );
}
