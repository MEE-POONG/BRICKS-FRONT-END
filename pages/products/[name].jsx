import useAxios from "axios-hooks";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Loading from "../../components/Loading/Loading";
import MapComponent from "../../components/Map/MapComponent";

export default function ProductDetailPage() {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false);
  
  const [
    { data: productData, loading: productLoading, error: productError },
    getProduct,
  ] = useAxios({ url: `/api/products/${router.query.name}`, method: "GET" });

  const [
    { data: addOnRateData, loading: addOnRateLoading, error: addOnRateError },
    getAddOnRate,
  ] = useState({ url: `/api/addOnRate?productId=${productData}`, method: "GET" });

  console.log("productResponse",)
  return (
    <>
      <Head>
        <title>{productData?.name}</title>
      </Head>
      {productLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col min-h-screen p-10 bg-gray-100 text-gray-800">
          <div>
            <Link
              href={`/products/category/${productData?.subType?.type?.name}`}
              className="hover:text-primary"
            >
              {productData?.subType?.type?.name}
            </Link>
            <span> / </span>
            <Link
              href={`/products/category/${productData?.subType?.type?.name}/${productData?.subType?.name}`}
              className="hover:text-primary"
            >
              {productData?.subType?.name}
            </Link>
          </div>
          <section className="text-gray-700 body-font overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="container px-5 py-8 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  src={productData?.image}
                  alt="product"
                  className="lg:w-1/2 w-full object-cover object-center border border-gray-200 rounded-lg"
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {productData?.Type?.name}
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {productData?.name}
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <span className="text-gray-600 ml-3">
                        รายละเอียดสินค้า
                      </span>
                    </span>
                  </div>
                  <p className="leading-relaxed">
                    <div
                      dangerouslySetInnerHTML={{ __html: productData?.detail }}
                    />
                  </p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 justify-center lg:justify-start">
                    <div className="flex ml-6 items-center">
                      <div className="lg:flex">
                        <span className="my-auto mr-3 text-xl font-bold">
                          จัดส่งไปยัง
                        </span>
                        <div>
                          <span onClick={() => setIsOpen(true)}>
                            GOOGLE MAP ICON
                          </span>
                          <MapComponent isOpen={isOpen} setIsOpen={setIsOpen} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block text-center lg:text-left">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ราคา {productData?.price} บาท / ชื้น
                    </span>
                    <div className="flex mt-4 justify-center lg:justify-start">
                      <button className="flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                        เพิ่มไปยังตะกร้า
                      </button>
                      <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
