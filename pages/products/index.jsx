import React from "react";
import useAxios from "axios-hooks";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";

export default function ProductsPage() {
  const router = useRouter();

  const [
    { data: productsData, loading: productsLoading, error: productsError },
    getProducts,
  ] = useAxios({
    url: `/api/products?page=${router.query.page}`,
  });

  const handleClick = (e, path, name) => {
    e.preventDefault();

    if (path === "/products") {
      router.push({
        pathname: path + `/${name}`,
      });
    }
  };

  const handleSelectPage = (pageValue) => {
    if (pageValue !== 1) {
      router.push({
        pathname: "/products",
        query: { page: pageValue },
      });
    } else {
      router.push({
        pathname: "/products",
      });
    }
  };
  return (
    <>
      <Head>
        <title>สินค้าทั้งหมด</title>
        <link rel="icon" href="/logo1.png" />
      </Head>
      {productsLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col p-3 bg-gray-100 text-gray-800 lg:p-10">
            <div className="grid grid-cols-2 gap-x-4  gap-y-12 w-full mt-6 lg:grid-cols-5 lg:gap-x-12">
              {productsData?.data.map((product, index) => (
                <div
                  key={index}
                  className="w-full cursor-pointer"
                  onClick={(e) => handleClick(e, "/products", product?.name)}
                >
                  <div className="block bg-white h-full shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-transform duration-300">
                    <div className="relative py-28">
                      <div className="absolute mx-auto inset-0 object-center lg:w-full">
                        <Image
                          fill
                          sizes="100vw"
                          style={{
                            objectFit: "contain",
                          }}
                          src={product.image}
                          alt="productImage"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="bg-[#a5522a] rounded-xl p-1 px-2 w-fit">
                        <span className="block text-xl text-white font-semibold">
                          {product.subType?.name}
                        </span>
                      </div>
                      <span className="block text-[26px] font-semibold mt-2">
                        {product.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-10 bg-gray-100">
            <Pagination
              page={productsData?.page}
              totalPage={productsData?.totalPage}
              handleSelectPage={handleSelectPage}
            />
          </div>
        </>
      )}
    </>
  );
}
