import { getProductsByCategory } from "@/lib/products";
import ProductGridItems from "@/components/products/ProductGridItems";
import { Category, Product } from "@/types/product";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Descubre todos los productos disponibles en El Despacho. Encuentra lo mejor para ti.",
  openGraph: {
    title: "Productos | El Despacho",
    description:
      "Explora todos los productos en El Despacho. Conoce nuestras opciones en alimentos y más.",
    url: `${baseUrl}/products`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/bg-hero.jpg`,
        width: 1366,
        height: 768,
        alt: "Empanadas El Despacho",
      },
    ],
  },
};

export default async function ProductPage() {
  const allCategories: Category[] = await getProductsByCategory("all");

  const products: Product[] = allCategories.flatMap((cat) => cat.products);

  return (
    <>
      <div className="bg-state-200">
        {products.length > 0 ? (
          <ProductGridItems products={products} />
        ) : (
          <div className="flex justify-center items-center w-full">
            <div className="text-center mb-8 border-2 border-primary w-1/2 rounded-md p-4 bg-orange-200">
              No se encontraron productos.
            </div>
          </div>
        )}
      </div>
    </>
  );
}
