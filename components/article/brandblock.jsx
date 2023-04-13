/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import Head from "next/head";
import React, { useRef } from "react";
import Image from "next/image";
import SectionComponent from "../headtop";
import Slider from "react-slick";

export default function Brandblock() {
  const [{ data: pichomeTopData, loading, error }, getPichomeTop] = useAxios({
    url: "/api/pichomeTop",
  });
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };
  return (
    <>
      <SectionComponent title="ลูกค้าของเรา" detail="Our Clients​">
        <section className="">
          <div className="mx-auto max-w-screen-xl">
            <Slider {...settings}>
              {pichomeTopData?.map((pichomeTop, index) => (
                <div key={index} className="grid gap-8 text-gray-500 grid-cols-2 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 dark:text-gray-400">
                  <Image
                    width={"300"}
                    height={"250"}
                    src={pichomeTop.image}
                    alt="productImage"
                    className=" rounded-xl object-scale-down  lg:h-52 lg:w-full h-44 w-44 m-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section >
      </SectionComponent >
    </>
  );
}
