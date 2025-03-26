import Image from "next/image";
import PrimaryButton from "../common/buttons/PrimaryButton";
import { siteConfig } from "@/config/site";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 py-28 mb-20" id="home">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/img/bg-hero.jpg"
          alt="Hero background"
          fill
          className="opacity-10 object-cover w-auto h-auto"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center mx-4">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4 animate-slideInLeft">
              Disfrutá
              <br />
              Nuestras especialidades
            </h1>
            <p className="text-gray-300 mb-8 animate-slideInLeft animation-delay-200">
              {siteConfig.aboutText}
            </p>
            <PrimaryButton
              className="btn-primary animate-slideInLeft animation-delay-400"
              href={siteConfig.primaryButton.href}
            >
              {siteConfig.primaryButton.name}
            </PrimaryButton>
          </div>
          <div className="lg:w-1/2 text-center">
            <div className="relative inline-block animate-rotate">
              <Image
                src="/img/hero.png"
                alt="Delicious meal"
                width={400}
                height={400}
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
