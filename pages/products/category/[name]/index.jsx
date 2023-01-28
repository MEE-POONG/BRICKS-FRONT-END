import useAxios from "axios-hooks";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Loading from "../../../../components/Loading/Loading";
import ProductsCategory from "../../../../components/Products/ProductsCategory";
import ProductsList from "../../../../components/Products/ProductsList";

export default function CategoryPage() {
  const router = useRouter();
  const [
    {
      data: CategoryData,
      loading: CategoryDataLoading,
      error: CategoryDataError,
    },
    getProduct,
  ] = useAxios({
    url: `/api/category/type?typeName=${router.query.name}`,
    method: "GET",
  });

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
            <ProductsCategory typeName={CategoryData?.name} />
          </div>
          <ProductsList CategoryData={CategoryData} />
        </div>
      )}
    </>
  );
}
