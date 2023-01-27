import useAxios from "axios-hooks";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Loading from "../../../components/Loading/Loading";

export default function CategoryPage() {
  const router = useRouter();
  const handleClick = (e, path, name) => {
    e.preventDefault();

    if (path === "/products") {
      router.push({
        pathname: path + `/${name}`,
      });
    }
  };
  const [
    {
      data: CategoryData,
      loading: CategoryDataLoading,
      error: CategoryDataError,
    },
    getProduct,
  ] = useAxios({ url: `/api/category/${router.query.name}`, method: "GET" });

  return (
    <>
      <Head>
        <title>สินค้าทั้งหมด</title>
      </Head>
      {CategoryDataLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col min-h-screen p-10 bg-gray-100 text-gray-800">
          <h1 className="text-3xl my-6">{CategoryData?.name}</h1>
          <div className="flex gap-4">
            <div className="bg-primary rounded-3xl p-1 px-4 shadow-lg cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <span className="text-white text-lg">ทั้งหมด</span>
            </div>
            {CategoryData?.SubType?.map((subTypes, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-1 px-4 shadow-lg cursor-pointer hover:-translate-y-1 transition-transform duration-300"
              >
                <span className="text-gray-600 text-lg">{subTypes.name}</span>
              </div>
            ))}
          </div>

          <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
            {CategoryData?.SubType?.map((subTypes) =>
              subTypes?.Products?.map((product, index) => (
                <div
                  key={index}
                  className="max-w-sm rounded-xl overflow-hidden shadow-md h-full bg-white cursor-pointer tranform motion-safe:hover:scale-105 motion-safe:hover:border-primary border"
                  onClick={(e) => handleClick(e, "/products", product.name)}
                >
                  <img
                    src={product.image}
                    alt="productImage"
                    className="w-full"
                  />
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
        </div>
      )}
    </>
  );
}
