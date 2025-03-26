"use client";

import Image from "next/image";
import { useState } from "react";
import CategoryMenuIcon from "./CategoryMenuIcon";
import { Category } from "@/types/product";

interface FoodMenuTabsProps {
  categories: Category[] | [];
}

const FoodMenuTabs: React.FC<FoodMenuTabsProps> = ({ categories }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (categories.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No hay categorías disponibles.
      </p>
    );
  }

  return (
    <>
      <div className="text-center mb-8">
        <ul className="inline-flex flex-wrap justify-center border-b border-gray-300">
          {categories?.map((category, index) => (
            <li key={index} className="mr-2">
              <button
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-4 py-2 text-sm font-medium ${
                  activeTab === index
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <CategoryMenuIcon categoryName={category?.name} />
                <div className="ml-2 text-left">
                  <span className="block font-extrabold">{category?.name}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories[activeTab]?.products?.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-white rounded-lg shadow-md p-4"
          >
            <div className="w-20 h-20 relative mr-2 flex-shrink-0">
              <Image
                src={item.pictureFileUri}
                alt={item.name}
                fill
                className="rounded-sm object-cover"
                sizes="80px"
              />
            </div>
            <div className="ml-4 flex-grow">
              <h5 className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2 font-extrabold text-lg">
                <span>{item.name}</span>
                <span className="text-primary">${item.price}</span>
              </h5>
              <small className="text-gray-500 italic">{item.description}</small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodMenuTabs;
