import AboutUs from "@/components/home/AboutUs";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial";
import FoodMenu from "@/components/home/FoodMenu";
import HomeNavbar from "@/components/navbar/HomeNavbar";
import { Metadata } from "next";
import { serviceData } from "@/data/mock/serviceData";
import { testimonials } from "@/data/mock/testimonialsData";
import { siteConfig } from "@/config/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  openGraph: {
    title: `Inicio | ${siteConfig.name}`,
    description: siteConfig.description,
    url: baseUrl,
    type: "website",
    images: [
      {
        url: `${baseUrl}/bg-hero.jpg`,
        width: 1366,
        height: 768,
        alt: "Empanadas El Despacho",
      },
    ],
  },
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: siteConfig.logo,
    image: siteConfig.image,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressCountry: siteConfig.address.country,
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,

    makesOffer: serviceData.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.description,
    })),

    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      reviewBody: testimonial.quote,
      author: {
        "@type": "Person",
        name: testimonial.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <HomeNavbar />
      <Hero />
      <Services />
      <AboutUs />
      <FoodMenu />
      <Contact />
      <Testimonial />
    </>
  );
}
