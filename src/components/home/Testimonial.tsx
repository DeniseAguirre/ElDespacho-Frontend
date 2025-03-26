"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleSection from "../common/headers/TitleSection";
import { testimonials } from "../../data/mock/testimonialsData";
import Link from "next/link";

const Testimonial: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
          i === activeSlide
            ? "bg-primary border-primary"
            : "bg-white border-gray-300"
        } border`}
      />
    ),
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-10 bg-gray-100" id="testimonial">
      <div className="container mx-auto" data-aos="fade-up">
        <TitleSection
          section="Testimonios"
          title="Nuestros clientes dicen!!!"
          className="text-center"
        />
        <div className="slider-container">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-3 mb-4">
                <div
                  className={`border rounded-sm p-6 transition-all duration-300 ${
                    index === activeSlide
                      ? "bg-primary border-primary text-white"
                      : "bg-white"
                  }`}
                >
                  <svg
                    className={`w-8 h-8 mb-4 ${
                      index === activeSlide ? "text-white" : "text-primary"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="48"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64z"
                    />
                  </svg>
                  <p className="mb-4 h-24">{item.quote}</p>
                  <div className="flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                    <div className="ml-3">
                      <h5 className="font-bold text-sm">{item.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex text-xs text-gray-700 text-center justify-center mt-8 gap-1">
          <span>Datos obtenidos de </span>
          <Link
            className="font-bold"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.google.com/search?q=el+eden+jujuy+restaurante&sca_esv=439ed1f28d78315f&sxsrf=ADLYWIL6WVCrsaaz3nSLFh-uVIxXJnEMvw%3A1730345754844&ei=GvsiZ5KbM-r35OUP9_rZoQk&oq=el+eden+jujuy+res&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWVsIGVkZW4ganVqdXkgcmVzKgIIADIFECEYoAEyBRAhGKABSKsNULwBWLAIcAF4AJABAJgBcaABgAOqAQMzLjG4AQHIAQD4AQGYAgWgApYDwgILEAAYgAQYsAMYogTCAgUQIRifBZgDAIgGAZAGA5IHAzQuMaAHhgo&sclient=gws-wiz-serp#lrd=0x941bacc31d658e0d:0x919e88d9b1480f8,1"
          >
            Google Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
