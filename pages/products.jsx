import React from "react";

import useAxios from "axios-hooks";


export default function ProductsPage() {

  const [{ data: ProductsData }, getProducts] = useAxios({
    url: "/api/products",
  });

  return (
    <>
                    <button class="relative text-sm focus:outline-none group">
                    <div class="flex items-center justify-between w-full h-16 px-4 border-b border-gray-800 hover:bg-gray-800">
                        <span class="font-medium">
                            Dropdown
                        </span> 
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="absolute z-10 flex-col items-start hidden w-full pb-1 bg-gray-800 shadow-lg group-focus:flex">
                        <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 1</a>
                        <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 1</a>
                        <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 1</a>
                    </div>
                </button>
      <div className="flex flex-col w-screen min-h-screen p-10 bg-gray-100 text-gray-800">
        <h1 className="text-3xl">Product Category Page Title</h1>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
          <span className="text-sm font-semibold">1-16 of 148 Products</span>
          
        </div>

        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">

          {ProductsData?.map((product,index) =>(
          //   <div className=" items-center" key={index}>
          //   <img href="#" className="block h-64 m-auto rounded-lg shadow-lg bg-white" src={product.image}></img>
          //   <div className="flex justify-center mt-3">
      
          //     <div>
          //       <a href="#" className="font-medium text-center text-xl">
          //         {product.name}
          //       </a>
          //     </div>
          //     <div>
          //       <span className="text-lg  font-medium text-center ml-1 text-indigo-500">
          //         {product.ProductType?.name}
          //       </span>
          //     </div>
              

          //   </div>
          // </div>

        <div className="" key={index}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg align-items: center w-4/4 h-4/4 ">
          <img className="w-full" src={product.image} alt="Mountain"/>
          <div className="px-6 py-4">
            <div className="text-gray-700 text-base mb-2 font-Th">{product.ProductType?.name}</div>
            <p className="font-bold text-xl font-Th">
            {product.name}
            </p>
          </div>
        </div>
        </div>
          ))}
          
      </div>
    </div>

    
    </>
  );
}
