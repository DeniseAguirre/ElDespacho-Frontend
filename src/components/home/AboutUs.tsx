"use client";

import Image from "next/image";
import PrimaryButton from "../common/buttons/PrimaryButton";
import { siteConfig } from "@/config/site";
import Counter from "../common/animations/Counter";
import TitleSection from "../common/headers/TitleSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="py-20" id="about-us">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/img/about-1.jpg"
                  alt="About 1"
                  width={400}
                  height={300}
                  className="rounded w-full"
                  data-aos="zoom-in"
                  priority
                />
                <Image
                  src="/img/about-2.jpg"
                  alt="About 3"
                  width={300}
                  height={225}
                  className="rounded w-3/4 ml-auto"
                  data-aos="zoom-in"
                  priority
                />
              </div>
              <div className="space-y-4 pt-12">
                <Image
                  src="/img/about-3.jpg"
                  alt="About 2"
                  width={300}
                  height={225}
                  className="rounded w-3/4"
                  data-aos="zoom-in"
                  priority
                />
                <Image
                  src="/img/about-4.jpg"
                  alt="About 4"
                  width={400}
                  height={300}
                  className="rounded w-full"
                  data-aos="zoom-in"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <TitleSection
              section="Sobre nosotros"
              title={
                <>
                  Bienvenidos a
                  <Image
                    src="/favicon.svg"
                    width={32}
                    height={32}
                    alt="Logo El Despacho"
                    style={{ width: "auto", height: "42px" }}
                    priority
                  />
                  {siteConfig.name}
                </>
              }
              sectionClass="text-start"
              titleClass="flex item-center"
            />

            <p className="mb-4">{siteConfig.description}</p>
            <p className="mb-4">{siteConfig.aboutText}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center border-l-4 border-primary pl-4">
                <Counter end={15} />
                <div>
                  <p className="mb-0">años de</p>
                  <h6 className="text-lg font-extrabold uppercase mb-0">
                    Experiencia
                  </h6>
                </div>
              </div>
              <div className="flex items-center border-l-4 border-primary pl-4">
                <Counter end={10} />
                <div>
                  <p className="mb-0">populares</p>
                  <h6 className="text-lg font-extrabold uppercase mb-0">
                    Chefs
                  </h6>
                </div>
              </div>
            </div>
            <PrimaryButton
              href="#about-us"
              className="inline-block hover:bg-primary-dark transition duration-300"
            >
              Ver más
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
