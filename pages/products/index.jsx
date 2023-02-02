import React from "react";
import useAxios from "axios-hooks";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Loading from "../../components/Loading/Loading";

export default function ProductsPage() {
  const [
    { data: productsData, loading: productsLoading, error: productsError },
    getProducts,
  ] = useAxios({
    url: "/api/products",
  });
  console.log("productsData", productsData);

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
      <Head>
        <title>สินค้าทั้งหมด</title>
      </Head>
      {productsLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col min-h-screen p-10 bg-gray-100 text-gray-800">
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-12 gap-y-12 w-full mt-6">
            {productsData?.map((product, index) => (
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
                        {product.subType?.name}
                      </span>
                    </div>
                    <span className="block text-xl font-semibold mt-2">
                      {product.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
