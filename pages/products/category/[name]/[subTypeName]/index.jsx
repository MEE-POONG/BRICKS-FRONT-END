import useAxios from "axios-hooks";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Loading from "../../../../../components/Loading/Loading";
import Pagination from "../../../../../components/Pagination/Pagination";
import ProductsCategory from "../../../../../components/Products/ProductsCategory";
import ProductsList from "../../../../../components/Products/ProductsList";

export default function CategoryPage() {
  const router = useRouter();
  const [
    {
      data: subCategoryData,
      loading: subCategoryLoading,
      error: subCategoryError,
    },
    getSubCategory,
  ] = useAxios({
    url: `/api/category/subType?typeName=${router.query.name}&subTypeName=${router.query.subTypeName}`,
    method: "GET",
  });

  const handleSelectPage = (pageValue) => {
    getSubCategory(
      {
        url: `/api/category/subType?typeName=${router.query.name}&subTypeName=${router.query.subTypeName}&page=${pageValue}`,
      },
      { manual: true }
    );
  };

  return (
    <>
      <Head>
        <title>สินค้าทั้งหมด</title>
      </Head>
      {subCategoryLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col min-h-screen p-10 bg-gray-100 text-gray-800">
          <h1 className="text-3xl my-6">{subCategoryData?.data.name}</h1>
          <div className="flex gap-4">
            <ProductsCategory typeName={subCategoryData?.data.name} />
          </div>
          <ProductsList productsData={subCategoryData?.data} />
          <div className="p-10">
            {subCategoryData?.data.subType[0].products.length !== 0 ? (
              <Pagination
                page={subCategoryData?.page}
                totalPage={subCategoryData?.totalPage}
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
