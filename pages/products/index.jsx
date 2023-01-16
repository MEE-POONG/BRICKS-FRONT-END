import React from "react";
import useAxios from "axios-hooks";
import { useSpring, animated } from "@react-spring/web";
import { useRouter } from "next/router";
import Loading from "../loading";
import Head from "next/head";
import Image from "next/image";

export default function ProductsPage() {
  const [
    { data: productsData, loading: productsLoading, error: productsError },
    getProducts,
  ] = useAxios({
    url: "/api/products",
  });
  const router = useRouter();
  const handleClick = (e, path, id) => {
    e.preventDefault();

    if (path === "/products") {
      router.push({
        pathname: path + `/${id}`,
      });
    }
  };

  return (
    <>
      <Head>
        <title>สินค้าทั้งหมด</title>
      </Head>
      {productsLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col min-h-screen p-10 bg-gray-100 text-gray-800">
          <h1 className="text-3xl">รายการสินค้า</h1>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
            <span className="text-sm font-semibold">1-8 of 148 Products</span>
          </div>

          <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
            {productsData?.map((product, index) => (
              <div
                key={index}
                className="max-w-sm rounded-xl overflow-hidden shadow-md h-full bg-white cursor-pointer tranform motion-safe:hover:scale-105 motion-safe:hover:border-primary border"
                onClick={(e) => handleClick(e, "/products", product?.id)}
              >
                <Image
                  src={product.image}
                  alt="product"
                  width={100}
                  height={100}
                  className="w-full" // just an example
                />
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
      )}
    </>
  );
}
