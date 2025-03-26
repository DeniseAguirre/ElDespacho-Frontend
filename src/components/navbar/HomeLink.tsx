import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeLink: React.FC = () => {
  return (
    <Link
      href="/"
      prefetch={true}
      className="text-primary text-4xl flex items-center gap-2 font-extrabold cursor-pointer"
    >
      <Image
        src="/favicon-96x96.png"
        width={48}
        height={48}
        alt="Logo El Despacho"
        priority
      />
      <h1>{siteConfig.name}</h1>
    </Link>
  );
};

export default HomeLink;
