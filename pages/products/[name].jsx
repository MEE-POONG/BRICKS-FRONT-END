import useAxios from "axios-hooks";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import MapComponent from "../../components/Map/MapComponent";
import { postCart } from "../../store/cart/cartSlice";
import { priceRule } from "../../utils/priceRule";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ProductDetailPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleZoom = e => {
    const zoomer = e.currentTarget;
    const rect = zoomer.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const x = (offsetX / zoomer.offsetWidth) * 100;
    const y = (offsetY / zoomer.offsetHeight) * 100;
    setPosition({ x, y });
  };
  const router = useRouter();
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const { mapStore } = useSelector((state) => state);
  let [isOpen, setIsOpen] = useState(false);
  const [productQty, setProductQty] = useState(1);
  const [productSumPrice, setProductSumPrice] = useState("");
  const [
    { data: productData, loading: productLoading, error: productError },
    getProduct,
  ] = useAxios({
    url: `/api/products/name?name=${router.query.name}`,
    method: "GET",
  });
  //SUBMIT DATA
  const handleAddToCart = async () => {
    try {
      if (session) {
        if (
          mapStore?.lat !== null &&
          mapStore?.lng !== null &&
          mapStore?.distance !== null
        ) {
          if (typeof productSumPrice !== "string") {
            dispatch(
              postCart({
                cartId: session?.user.cartId,
                productId: productData?.id,
                name: productData?.name,
                price: productSumPrice,
                qty: productQty,
                lat: mapStore?.lat,
                lng: mapStore?.lng,
                distance: mapStore?.distance,
                image: productData?.image,
              })
            ).then(toast.success("เพื่อไปยังตระกล้าสินค้าแล้ว"));
          } else {
            toast.error("ขออภัยคุณไม่อยู่ในพื้นที่จัดส่ง");
          }
        } else {
          toast.error("กรุณาเลือกพื้นที่จัดส่ง");
        }
      } else {
        toast.error("กรุณาเข้าสู่ระบบก่อนสั่งซื้อสินค้า");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let result = priceRule(
      mapStore?.distance,
      productData?.price,
      +productQty,
      productData?.qtyRate
    );
    setProductSumPrice(result);
  }, [
    mapStore?.distance,
    productData?.price,
    productQty,
    productData?.qtyRate,
  ]);

  return (
    <>
      <Toaster
        reverseOrder={true}
        position={"bottom-center"}
        gutter={8}
        toastOptions={{
          success: {
            style: {
              background: "#0a8f2d",
              color: "white",
              fontSize: "2rem",
              borderRadius: "2rem",
            },
          },
          error: {
            style: {
              background: "#e02424",
              color: "white",
              fontSize: "2rem",
              borderRadius: "2rem",
            },
          },
        }}
      />
      <Head>
        <title>{productData?.name}</title>
        <link rel="icon" href="/logo1.png" />
      </Head>
      {productLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800 lg:p-10">
          <div className="text-2xl font-bold">
            <Link
              href={`/products/category/${productData?.subType?.type?.name}`}
              className="hover:text-[#f9632c]"
            >
              {productData?.subType?.type?.name}
            </Link>
            <span> / </span>
            <Link
              href={`/products/category/${productData?.subType?.type?.name}/${productData?.subType?.name}`}
              className="hover:text-[#f9632c]"
            >
              {productData?.subType?.name}
            </Link>
          </div>
          <section className="text-gray-700 body-font overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="container px-5 py-8 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="w-full h-auto border border-gray-200 rounded-lg lg:w-1/2 lg:h-auto">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#000",
                      "--swiper-pagination-color": "#000",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                  >
                    <SwiperSlide>
                      <div
                        className="zoom"
                        style={{ backgroundImage: `url(${productData?.image})`, backgroundPosition: `${position.x}% ${position.y}%` }}
                        onMouseMove={handleZoom}
                      >
                        <img src={productData?.image} className="mx-auto" />
                      </div>
                    </SwiperSlide>
                    {productData?.imageProduct.map((img, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="zoom"
                          style={{ backgroundImage: `url(${productData?.image})`, backgroundPosition: `${position.x}% ${position.y}%` }}
                          onMouseMove={handleZoom}
                        >
                          <img src={productData?.image} className="mx-auto" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {/* <div>
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      spaceBetween={10}
                      slidesPerView={4}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img src={productData?.image} />
                      </SwiperSlide>
                      {productData?.imageProduct.map((img, index) => (
                        <SwiperSlide key={index}>
                          <img src={img.image} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div> */}
                </div>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-2xl font-bold title-font text-gray-500 tracking-widest">
                    {productData?.subType?.name}
                  </h2>
                  <h1 className="text-gray-900 text-4xl font-bold title-font mb-1">
                    {productData?.name}
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <span className="text-gray-600 text-xl font-bold ml-3">
                        รายละเอียดสินค้า
                      </span>
                    </span>
                  </div>
                  <div className="leading-relaxed text-2xl font-bold ml-5 border-b-2">
                    <p
                      dangerouslySetInnerHTML={{ __html: productData?.detail }}
                    />
                  </div>
                  <div className="flex mt-6 items-center pb-5 border-gray-200 mb-5 justify-center lg:justify-start">
                    <div className="flex items-center">
                      <div className="lg:flex">
                        <span className="my-auto text-2xl font-bold lg:mr-4 text-red ">
                          เลือกพื้นที่จัดส่ง
                        </span>
                        <div className="flex justify-center my-2">
                          <button type="button" onClick={() => setIsOpen(true)} className={mapStore?.distance == null ? "animate-bounce select-map" : "animate-bounce select-map active"}>
                            <img className="w-14" src="/gmapLogo.png" />
                          </button>
                          <MapComponent isOpen={isOpen} setIsOpen={setIsOpen} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block text-center lg:text-left">
                    <span className="text-2xl font-bold text-gray-900 block">
                      ระยะทาง {mapStore?.distance / 1000} กิโลเมตร
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {typeof productSumPrice === "number"
                        ? productSumPrice.toLocaleString("en-US") + " " + "บาท"
                        : productSumPrice}
                    </span>
                    <div className="my-4">
                      <div className="block lg:flex">
                        <span className="text-2xl font-bold text-gray-800 my-auto lg:mr-4">
                          จำนวนสินค้า
                        </span>
                        <div className="flex justify-center items-center my-4 lg:justify-start ">
                          <svg
                            className="fill-current w-3 text-gray-900 hover:text-[#f9632c] cursor-pointer "
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
                            className="mx-2 border text-2xl text-center w-16 rounded-md text-gray-900 focus:outline-none focus:border-[#b96800] focus:ring-1 focus:ring-primary [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                            type="number"
                            min={1}
                            value={parseInt(productQty)}
                            onChange={(e) =>
                              setProductQty(parseInt(e.target.value))
                            }
                          />
                          <svg
                            className="fill-current w-3 text-gray-900 hover:text-[#f9632c] cursor-pointer"
                            viewBox="0 0 448 512"
                            onClick={() => setProductQty(productQty + 1)}
                          >
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                          </svg>
                        </div>
                      </div>

                      <button
                        className="text-white text-2xl font-bold bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                        onClick={handleAddToCart}
                      >
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
