import { useRouter } from "next/router";
import React from "react";

export default function ProductsList({ productsData }) {
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
      <div className="flex flex-col p-1 bg-gray-100 text-gray-800 lg:p-10">
        <div className="grid grid-cols-2 gap-x-4  gap-y-12 w-full mt-6 lg:grid-cols-5 lg:gap-x-12">
          {productsData?.subType?.map((subTypes) =>
            subTypes?.products?.map((product, index) => (
              <div
                key={index}
                className="w-full cursor-pointer"
                onClick={(e) => handleClick(e, "/products", product?.name)}
              >
                <div className="block bg-white h-full shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-transform duration-300">
                  <div className="relative py-32">
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
