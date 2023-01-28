import { useRouter } from "next/router";
import React from "react";

export default function ProductsList({ CategoryData }) {
  const router = useRouter();

  const handleClick = (e, path, name) => {
    e.preventDefault();

    if (path === "/products") {
      router.push({
        pathname: path + `/${name}`,
      });
    }
  };
  return (
    <>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
        {CategoryData?.SubType?.map((subTypes) =>
          subTypes?.Products?.map((product, index) => (
            <div
              key={index}
              className="max-w-sm rounded-xl overflow-hidden shadow-md h-full bg-white cursor-pointer transition-transform duration-300 motion-safe:hover:scale-105 motion-safe:hover:border-primary border"
              onClick={(e) => handleClick(e, "/products", product.name)}
            >
              <img src={product.image} alt="productImage" className="w-full" />
              <div className="px-6 py-4">
                <div className="text-gray-500 text-base mb-2 font-Th">
                  {subTypes.name}
                </div>
                <p className="font-bold text-lg font-Th">{product.name}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
