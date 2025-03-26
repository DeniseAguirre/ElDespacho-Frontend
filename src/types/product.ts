export interface GetProductsApiResponse {
  categories: Category[] | [];
}

export interface Product {
  id: string;
  categorySlug: string;
  pictureFileUri: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  discountPercentage: number;
  priceWithDiscount: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  products: Product[];
}
