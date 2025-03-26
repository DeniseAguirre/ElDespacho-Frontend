import SearchResults from "@/components/search/SearchResults";
import { getAllProducts } from "@/lib/products";
import { Product } from "@/types/product";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Buscar productos",
  description:
    "Explora y encuentra productos de forma rápida con nuestro buscador optimizado.",
  keywords: "buscar productos, hacer pedido, productos para pedir",
  openGraph: {
    title: "Buscar productos - El Despacho",
    description:
      "Encuentra fácilmente lo que necesitas en nuestra amplia gama de productos.",
    url: `${baseUrl}/products`,
    type: "website",
  },
};

async function getFilteredProducts(searchValue: string) {
  const allProducts: Product[] = await getAllProducts();

  if (!searchValue) return allProducts;

  return allProducts.filter((product) => {
    const searchLower = searchValue.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      (product.description &&
        product.description.toLowerCase().includes(searchLower))
    );
  });
}

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { q: searchValue } = searchParams as { [key: string]: string };

  return (
    <SearchResults
      searchValue={searchValue}
      getFilteredProducts={getFilteredProducts}
    />
  );
}
