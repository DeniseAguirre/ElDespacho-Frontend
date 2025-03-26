import PrimaryButton from "../common/buttons/PrimaryButton";
import TitleSection from "../common/headers/TitleSection";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 mb-12 h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden bg-[url('/img/banner-products.jpg')] bg-no-repeat bg-cover  opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <TitleSection
          section="Productos"
          title="Descubrí el sabor auténtico de las mejores empanadas"
          className="text-center"
          titleClass="text-white"
        />
        <PrimaryButton className="w-full md:w-2/5 mx-auto" href={"/products"}>
          Ver todos los productos
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Hero;
