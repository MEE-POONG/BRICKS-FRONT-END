import React from "react";
import useAxios from "axios-hooks";


export default function ProductsPage() {
  const [{ data: ProductsData }, getProducts] = useAxios({
    url: "/api/products",
  });

  return (
    <>
      <button className="relative text-sm focus:outline-none group">
        <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-800 hover:bg-white">
          <span className="font-medium">Dropdown</span>
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex">
          <a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">
            Menu Item 1
          </a>
          <a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">
            Menu Item 1
          </a>
          <a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">
            Menu Item 1
          </a>
        </div>
      </button>
      <div className="flex flex-col min-h-screen p-10 bg-gray-100 text-gray-800">
        <h1 className="text-3xl">รายการสินค้า</h1>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
          <span className="text-sm font-semibold">1-8 of 148 Products</span>
        </div>

        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
          {ProductsData?.map((product, index) => (
            <div
              key={index}
              className="max-w-sm rounded-xl overflow-hidden shadow-md h-full bg-white"
            >
              <img className="w-full" src={product.image} alt="product" />
              <div className="px-6 py-4">
                <div className="text-gray-500 text-base mb-2 font-Th">
                  {product.ProductType?.name}
                </div>
                <p className="font-bold text-lg font-Th">{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
