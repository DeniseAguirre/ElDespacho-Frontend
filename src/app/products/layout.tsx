import ProductsNavbar from "@/components/navbar/ProductsNavbar";
import Hero from "@/components/products/Hero";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProductsNavbar />
      <Hero />
      <main>{children}</main>
    </>
  );
}
