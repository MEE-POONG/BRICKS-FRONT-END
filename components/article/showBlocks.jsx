/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function ShowBlocks() {
  return (
    <>
      <div className=" container mx-auto text-center font-fontTh2 mt-10">
        <h3 className="text-[24px] md:text-[30px] text-primary mb-5">
          {" "}
          บทความ
          <span className="text-gray-400"> | Blocks </span>
        </h3>
        <div className="mx-2">
        <Swiper
                  className=""
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}
                >
                 <SwiperSlide className=" max-w-sm rounded overflow-hidden shadow-xl border" >
                  <img className="w-full"
                  src="/images/bw3.jpg"
                  alt="Sunset in the mountains"/>
                    </SwiperSlide>
                    <SwiperSlide className=" max-w-sm rounded overflow-hidden shadow-xl border" >
                  <img className="w-full"
                  src="/images/bw3.jpg"
                  alt="Sunset in the mountains"/>
                    </SwiperSlide>
                    <SwiperSlide className=" max-w-sm rounded overflow-hidden shadow-xl border" >
                  <img className="w-full"
                  src="/images/bw3.jpg"
                  alt="Sunset in the mountains"/>
                    </SwiperSlide>
                    <SwiperSlide className=" max-w-sm rounded overflow-hidden shadow-xl border" >
                  <img className="w-full"
                  src="/images/bw3.jpg"
                  alt="Sunset in the mountains"/>
                    </SwiperSlide>
           </Swiper>
           
          {/* <Swiper
            spaceBetween={30}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              // when window width is >= 640px
              300: {
                width: 300,
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div className=" max-w-sm rounded overflow-hidden shadow-xl border">
                <img
                  className="w-full"
                  src="/images/bw3.jpg"
                  alt="Sunset in the mountains"
                />
                  <div className="font-bold text-xl px-6 py-4 mb-2 truncate ">
                  หัวข้อบล็อกหัวข้อบล็อกหัวข้อบล็อกหัวข้อหัวข้อหัวข้อหัวข้อหัวข้อหัวข้อหัวข้อหัวข้อหัวข้อหัวข้อหัวข้อ
                  </div>
                <div className="px-6 pb-2 ">
                  <a
                    href="/article/block_detail"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary hover:underline  "
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper> */}


          <p className="text-right text-red-500 hover:underline">
            <a href="/article" >เพิ่มเติม</a>
          </p> 
        </div>
      </div>
    </>
  );
}
