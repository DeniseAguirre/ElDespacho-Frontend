import { Category, Product } from "@/types/product";

import ProductsData from "@/data/mock/products.json";

// export const getProductsByCategory = async (
//   category?: string
// ): Promise<Category[]> => {
//   const params = new URLSearchParams();

//   if (category && category !== "all") {
//     params.set("categories", category);
//   }

//   const url = `${API_ROUTES.GET_PRODUCTS}?${params.toString()}`;

//   try {
//     const response = await instance.get<Result<GetProductsApiResponse>>(url);

//     if (!response.data.succeeded) {
//       throw new Error(response.data.errors.join(", "));
//     }

//     if (!response.data.data || !response.data.data.categories) {
//       return [];
//     }
//     const categories = response.data.data.categories;
//     return categories;
//   } catch (error) {
//     throw new Error(
//       `Error al obtener los productos desde el servidor: ${
//         error instanceof Error ? error.message : "Error desconocido"
//       }`
//     );
//   }
// };

export const getProductsByCategory = async (
  category?: string
): Promise<Category[]> => {
  const filteredCategories =
    category && category !== "all"
      ? ProductsData.filter((product) => product.categorySlug === category).map(
          (product) => ({
            id: product.categorySlug,
            name: product.categorySlug,
            slug: product.categorySlug,
            products: ProductsData.filter(
              (p) => p.categorySlug === product.categorySlug
            ),
          })
        )
      : Array.from(
          new Set(ProductsData.map((product) => product.categorySlug))
        ).map((categorySlug) => ({
          id: categorySlug,
          name: categorySlug,
          slug: categorySlug,
          products: ProductsData.filter(
            (product) => product.categorySlug === categorySlug
          ),
        }));

  return Promise.resolve(filteredCategories as Category[]);
};

// export const getAllProducts = async (): Promise<Product[]> => {
//   try {
//     const response = await instance.get<Result<GetProductsApiResponse>>(
//       `${API_ROUTES.GET_PRODUCTS}`
//     );

//     if (!response.data.succeeded) {
//       throw new Error(response.data.errors.join(", "));
//     }

//     if (!response.data.data || !response.data.data.categories) {
//       return [];
//     }
//     const allCategories = response.data.data.categories;

//     const allProducts: Product[] = allCategories.flatMap((cat) => cat.products);
//     return allProducts;
//   } catch (error) {
//     throw new Error(
//       `Error al obtener los productos desde el servidor: ${
//         error instanceof Error ? error.message : "Error desconocido"
//       }`
//     );
//   }
// };

export const getAllProducts = async (): Promise<Product[]> => {
  return Promise.resolve(
    ProductsData.map((product) => ({
      ...product,
      category: product.categorySlug,
    }))
  );
};
