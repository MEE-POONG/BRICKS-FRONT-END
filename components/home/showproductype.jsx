/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function Showproducts() {
  return (
    <>
      <div className=" container mx-auto text-center font-fontTh2 mt-10">
        <h3 className="text-[24px] md:text-[30px] text-primary">
          {" "}
          สินค้าของเรา
          </h3>
          <h2 className=" text-[12px]  lg:text-[20px] text-center text-gray-400">
          Categories
          </h2>
   
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-5">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white  shadow-lg motion-safe:hover:scale-105">
              <img
                className=" w-full h-auto object-contain md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="/images/36.jpg"
                alt=""
              />
              <div className=" flex flex-col justify-center lg:pr-4">
                <p className="text-black text-xl font-semibold mb-2 hover:text-primary ">
                  อิฐประสาน
                </p>
                <p className="text-gray-700 text-base">
                อิฐมวลเบา อิฐมอญ  
                </p>
                <Link href="/products/category/วัสดุก่อสร้าง">
                  <button
                    type="button"
                    className="text-white bg-primary hover:bg-yellow-700 focus:ring-primary rounded-full text-sm px-5 lg:px-3 py-2 text-center mr-2 mb-2 "
                  >
                    ช็อปเลย
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg motion-safe:hover:scale-105">
              <img
                className=" w-full h-auto object-contain md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="/images/16.jpg"
                alt=""
              />
              <div className=" flex flex-col justify-center lg:pr-4">
                <p className="text-black text-xl font-semibold mb-2 hover:text-primary ">
                ตกแต่งบ้าน
                </p>
                <p className="text-gray-700 text-base">
                บล็อกทึบ บล็อกช่องลม
                </p>
                <Link href="/products/category/ของตกแต่งบ้าน ">
                  <button
                    type="button"
                    className="text-white bg-primary hover:bg-yellow-700 focus:ring-primary rounded-full text-sm px-5 lg:px-3 py-2 text-center mr-2 mb-2 "
                  >
                    ช็อปเลย
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg motion-safe:hover:scale-105">
              <img
                className=" w-full h-auto object-contain md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="/images/bw2.jpg"
                alt=""
              />
              <div className=" flex flex-col justify-center lg:pr-4">
                <p className="text-black text-xl font-semibold mb-2 hover:text-primary ">
                ตกแต่งสวน
                </p>
                <p className="text-gray-700 text-base">
                บล็อกปูพื้น/สนามหญ้า
                </p>
                <Link href="/products/category/ของตกแต่งสวน ">
                  <button
                    type="button"
                    className="text-white bg-primary hover:bg-yellow-700 focus:ring-primary rounded-full text-sm px-5 lg:px-3 py-2 text-center mr-2 mb-2 "
                  >
                    ช็อปเลย
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg motion-safe:hover:scale-105">
              <img
                className=" w-full h-auto object-contain md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="/images/bw3.jpg"
                alt=""
              />
              <div className=" flex flex-col justify-center lg:pr-4">
                <p className="text-black text-xl font-semibold mb-2 hover:text-primary ">
                อื่นๆ
                </p>
                <p className="text-gray-700 text-base">
                หินกรวดแม่น้ำโขง
                </p>
                <Link href="/products/category/อื่นๆ ">
                  <button
                    type="button"
                    className="text-white bg-primary hover:bg-yellow-700 focus:ring-primary rounded-full text-sm px-5 lg:px-3 py-2.5 text-center mr-2 mb-2 "
                  >
                    ช็อปเลย
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
