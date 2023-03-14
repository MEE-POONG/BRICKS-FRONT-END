/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SectionComponent from "../headtop";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import Slider from "react-slick";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Showproducts() {
  const [{ data: showproData, loading, error }, getProductsHome] = useAxios({
    url: "/api/productsHome",
  });
  console.log(showproData);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <SectionComponent title="สินค้าของเรา" detail="Categories">
        <div>
          <Slider {...settings}>
            {showproData
              ?.filter((fltProduct) => fltProduct.products.length !== 0)
              .map((productsHome, index) => (
                <div key={index} className="mb-2 mt-16">
                  <div className="card-est shadow-lg rounded-lg mx-5">
                    <div className="cardp-img">
                      <Image
                        fill
                        sizes="100%"
                        src={productsHome?.products[0]?.image}
                        alt="productImage"
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="cardp-info">
                      <p className="text-title text-2xl lg:text-3xl font-fontTh1">
                        {productsHome?.name}
                      </p>
                      <p className="text-body text-xl lg:text-2xl font-fontTh1  text-gray-400 font-bold" dangerouslySetInnerHTML={{ __html: productsHome?.products[0]?.detail }} />
                    </div>
                    <div className="cardp-footer">
                      <Link href={`/products/category/${productsHome?.type.name}`} className="w-full pt-5">
                        <button type="button" className="border border-[#b96800] animate-bounce rounded-full text-[20px] font-bold text-white bg-[#a5522a] px-16 py-2 hover:bg-transparent hover:text-[#c94413] ">
                          ช็อปเลย
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </SectionComponent>
    </>
  );
}
