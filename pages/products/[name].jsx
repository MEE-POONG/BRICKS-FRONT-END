import useAxios from "axios-hooks";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import MapComponent from "../../components/Map/MapComponent";

export default function ProductDetailPage() {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false);
  const [productQty, setProductQty] = useState(1);
  const [
    { data: productData, loading: productLoading, error: productError },
    getProduct,
  ] = useAxios({ url: `/api/products/${router.query.name}`, method: "GET" });
  const { mapStore } = useSelector((state) => state);

  //เช็คระยะทางเพื่อบวกราคา
  const priceRule = (distance, constPrice, qty) => {
    if (distance !== 0) {
      const addOnArr = productData?.addOnRate.map((addOnArr) => addOnArr); // map array
      const addSort = addOnArr.sort((a, b) => a.length - b.length); //sort array
      const findDistance = addSort
        .map((lengthArr) => lengthArr.length)
        .find((length) => length > distance);
      const findAddOn = addSort
        .map((lengthArr) => lengthArr)
        .find((lengthArr) => lengthArr.length === findDistance);

      if (productData?.addOnRate.length !== 0) {
        if (findDistance === undefined) {
          return "ขออภัยไม่อยู่ในพื้นที่จัดส่ง";
        }
        return (
          ((constPrice + findAddOn?.addOn) * qty).toLocaleString("en-US") +
          " " +
          "บาท"
        );
      }
      return (constPrice * qty).toLocaleString("en-US") + " " + "บาท";
    }
    return "กรุณาเลือกพื้นที่จัดส่ง";
  };

  return (
    <>
      <Head>
        <title>{productData?.name}</title>
        <link rel="icon" href="/logo1.png" />
      </Head>
      {productLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800 lg:p-10">
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
                    <div className="flex items-center">
                      <div className="lg:flex">
                        <span className="my-auto text-xl font-bold lg:mr-4">
                          เลือกพื้นที่จัดส่ง
                        </span>
                        <div className="flex justify-center my-2">
                          <button type="button" onClick={() => setIsOpen(true)}>
                            <img className="w-14" src="/gmapLogo.png" />
                          </button>
                          <MapComponent isOpen={isOpen} setIsOpen={setIsOpen} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block text-center lg:text-left">
                    {/* <span className="font-medium text-2xl text-gray-900 block">
                      ระยะทาง {mapStore?.distance / 1000} กิโลเมตร
                    </span> */}
                    <span className="font-medium text-2xl text-gray-900">
                      {priceRule(
                        mapStore?.distance / 1000,
                        productData?.price,
                        productQty
                      )}
                    </span>
                    <div className="my-4">
                      <div className="block lg:flex">
                        <span className="font-medium text-lg text-gray-800 my-auto lg:mr-4">
                          จำนวนสินค้า
                        </span>
                        <div className="flex justify-center my-4 lg:justify-start">
                          <svg
                            className="fill-current w-3 text-gray-900 hover:text-primary cursor-pointer"
                            viewBox="0 0 448 512"
                            onClick={() => {
                              if (productQty > 1) {
                                setProductQty(productQty - 1);
                              }
                            }}
                          >
                            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                          </svg>

                          <input
                            className="mx-2 border text-center w-12 rounded-md text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                            type="number"
                            min={1}
                            value={productQty.toLocaleString("en-US")}
                            onChange={(e) =>
                              setProductQty(parseInt(e.target.value))
                            }
                          />
                          <svg
                            className="fill-current w-3 text-gray-900 hover:text-primary cursor-pointer"
                            viewBox="0 0 448 512"
                            onClick={() => setProductQty(productQty + 1)}
                          >
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                          </svg>
                        </div>
                      </div>

                      <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                        เพิ่มไปยังตะกร้า
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
