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
              {/* {productsData?.data.map((product, index) => (
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
              ))} */}
              {productsData?.data.map((product, index) => (

                <div key={index} className="mb-2 mt-16" >
                  <div className="card-est shadow-lg rounded-lg ">
                    <div className="cardp-img">
                      <Image
                        fill
                        sizes="100%"
                        src={product?.image}
                        alt="productImage"
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="cardp-info">
                      <div className=" rounded-xl w-fit">
                        <span className="block text-xl font-semibold text-[#a5522a]">
                         # {product.subType?.name}
                        </span>
                      </div>
                      <p className="text-title text-2xl lg:text-3xl font-fontTh1">
                        {product?.name}
                      </p>
                      <p className="text-body text-xl lg:text-2xl font-fontTh1  text-gray-400 font-bold" dangerouslySetInnerHTML={{ __html: product?.detail }} />
                    </div>
                    <div className="cardp-footer">
                      <div className="w-full text-center">
                        <button type="button" className="border border-[#b96800] animate-bounce rounded-full text-[20px] font-bold text-white bg-[#a5522a] px-16 py-2 hover:bg-transparent hover:text-[#c94413] " onClick={(e) => handleClick(e, "/products", product?.name)}>
                          เลือก
                        </button>
                      </div>
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
