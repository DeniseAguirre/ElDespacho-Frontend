export const siteConfig = {
  name: "El Despacho",
  description:
    "Descubrí el sabor auténtico de las empanadas norteñas, hechas con tradición y pasión.",
  aboutText:
    "Las mejores empanadas del país. Hechas a mano con los ingredientes más frescos de la región, en una gran variedad de sabores.",
  url: "https://www.eldespacho.com",
  logo: "https://tusitioweb.com/logo.png",
  image: "https://tusitioweb.com/img/empanadas.png",
  address: {
    street: "Intendente Juan Irigoin 2432",
    locality: "Buenos Aires, San Miguel",
    country: "Argentina",
  },
  contact: {
    phone: "1126580740",
    email: "info@example.com",
  },
  schedules: [
    {
      day: "Lunes - Sábados",
      schedule: "09AM - 09PM",
    },
    {
      day: "Domingos",
      schedule: "10AM - 08PM",
    },
  ],
  landingNavItems: [
    {
      label: "Inicio",
      href: "home",
    },
    {
      label: "Servicios",
      href: "services",
    },
    {
      label: "Sobre nosotros",
      href: "about-us",
    },
    {
      label: "Menú",
      href: "food-menu",
    },
    {
      label: "Contacto",
      href: "contact",
    },
  ],
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
  ],
  primaryButton: {
    name: "Hacé tu pedido",
    href: "/products",
  },
  footer: {
    navItems: [
      {
        label: "Sobre nosotros",
        href: "/about-us",
      },
      {
        label: "Contáctanos",
        href: "/contact-us",
      },
      {
        label: "Reservas",
        href: "/reservation",
      },
      {
        label: "Política de privacidad",
        href: "/privacy-policy",
      },
      {
        label: "Terminos y condiciones",
        href: "/terms-condition",
      },
    ],

    links: [
      {
        label: "Inicio",
        href: "/",
      },
      {
        label: "Cookies",
        href: "/cookies",
      },
      {
        label: "Ayuda",
        href: "/help",
      },
      {
        label: "Preguntas frecuentes",
        href: "/faqs",
      },
    ],
  },
};
