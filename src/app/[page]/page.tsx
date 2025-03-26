import { Metadata } from "next";
import { pagesData } from "../../data/mock/pagesData";
import { notFound } from "next/navigation";
import Prose from "@/components/common/content/Prose";
import PagesNavbar from "@/components/navbar/PagesNavbar";
import TitleSection from "@/components/common/headers/TitleSection";

interface PageParams {
  params: { page: string };
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const page = pagesData.find((p) => p.id === params?.page);

  if (!page) return notFound();

  return {
    title: page.title,
    description: page.content,
    openGraph: {
      type: "article",
    },
  };
}

export default async function Page({ params }: PageParams) {
  const page = pagesData.find((p) => p.id === params?.page);

  if (!page) return notFound();

  return (
    <>
      <PagesNavbar />
      <div className="relative bg-gray-900 h-fit flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden bg-[url('/img/banner-products.jpg')] bg-no-repeat bg-cover  opacity-10"></div>
        <div className="container mx-auto px-4 relative max-w-2xl py-20">
          <TitleSection section={page.title} className="text-center" />
          <Prose className="text-white" html={page.content} />
        </div>
      </div>
    </>
  );
}
