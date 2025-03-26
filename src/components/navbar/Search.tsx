"use client";

import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("q")?.toString().trim() || "";
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-max-[550px] relative w-full lg:w-72 xl:w-full"
    >
      <input
        key={searchParams?.get("q")}
        type="text"
        name="q"
        placeholder="Buscar productos..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="text-md w-full rounded-lg border-2 bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-primary dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mr-2 flex h-full items-center justify-center"
        aria-label="Buscar"
      >
        <SearchIcon className="h-5 w-5 text-black dark:text-white" />
      </button>
    </form>
  );
}
