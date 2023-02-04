import useAxios from "axios-hooks";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Loading from "../../../../components/Loading/Loading";
import Pagination from "../../../../components/Pagination/Pagination";
import ProductsCategory from "../../../../components/Products/ProductsCategory";
import ProductsList from "../../../../components/Products/ProductsList";

export default function CategoryPage() {
  const router = useRouter();
  const [
    {
      data: categoryData,
      loading: categoryDataLoading,
      error: categoryDataError,
    },
    getCategoryData,
  ] = useAxios({
    url: `/api/category/type?typeName=${router.query.name}`,
    method: "GET",
  });

  const handleSelectPage = (pageValue) => {
    getCategoryData(
      {
        url: `/api/category/type?typeName=${router.query.name}&page=${pageValue}`,
      },
      { manual: true }
    );
  };
  console.log(categoryData?.data);
  return (
    <>
      <Head>
        <title>สินค้าทั้งหมด</title>
        <link rel="icon" href="/logo1.png" />
      </Head>
      {categoryDataLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col min-h-screen p-5 md:p-10 bg-gray-100 text-gray-800">
          <h1 className="text-3xl my-6">{categoryData?.data.name}</h1>
          <div className="flex gap-4 mb-2">
            <ProductsCategory typeName={categoryData?.data.name} />
          </div>
          <ProductsList productsData={categoryData?.data} />
          <div className="p-10">
            {categoryData?.data.subType.length !== 0 ? (
              <Pagination
                page={categoryData?.page}
                totalPage={categoryData?.totalPage}
                handleSelectPage={handleSelectPage}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
}
