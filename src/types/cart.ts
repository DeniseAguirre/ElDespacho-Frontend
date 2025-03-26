export interface ProductCart {
  id: string;
  categorySlug: string;
  pictureFileUri: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  discountPercentage: number;
  priceWithDiscount: number;
  quantity: number;
}
