import ProductsNavbar from "@/components/navbar/ProductsNavbar";
import ChildrenWrapper from "./children-wrapper";
import Hero from "@/components/search/Hero";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ProductsNavbar />
      <Hero />
      <ChildrenWrapper>
        <main>{children}</main>
      </ChildrenWrapper>
    </div>
  );
}
