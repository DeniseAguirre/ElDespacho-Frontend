import type { Metadata } from "next";
import "@/css/globals.css";
import Providers from "@/redux/Providers";
import { siteConfig } from "@/config/site";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/layout/BackToTopButton";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.name!,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots: {
    follow: true,
    index: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon-96x96.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Providers>
          <main>{children}</main>
          <Footer />
          <BackToTopButton />
        </Providers>
      </body>
    </html>
  );
}
