import { useRouter } from "next/router";
import React from "react";

export default function ProductsList({ CategoryData }) {
  const router = useRouter();

  const handleClick = (e, path, name, id) => {
    e.preventDefault();

    if (path === "/products") {
      router.push({
        pathname: path + `/${name}`,
      });
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen text-gray-800">
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-12 gap-y-12 w-full mt-6">
          {CategoryData?.subType?.map((subTypes) =>
            subTypes?.products?.map((product, index) => (
              <div
                key={index}
                className="w-full cursor-pointer"
                onClick={(e) => handleClick(e, "/products", product?.name)}
              >
                <div className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-transform duration-300">
                  <div className="relative py-48">
                    <img
                      className="absolute mx-auto inset-0 h-full w-fit object-center object-cover lg:w-full"
                      src={product.image}
                      alt="productImage"
                    />
                  </div>
                  <div className="p-4">
                    <div className="bg-primary rounded-xl p-1 px-2 w-fit">
                      <span className="block text-sm text-white font-semibold">
                        {subTypes?.name}
                      </span>
                    </div>
                    <span className="block text-xl font-semibold mt-2">
                      {product.name}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
