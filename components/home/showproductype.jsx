/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

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
        <div className="cardp">
          <div className="cardp-img ">

          </div>
          <div className="cardp-info">
            <p className="text-title font-fontTh2">อิฐแดง </p>
            <p className="text-body  font-fontTh2">อิฐแดงงงงงงงงงงงงงงงงงง</p>
          </div>
          <div className="cardp-footer">
             <Link href="/products/category/ของตกแต่งบ้าน ">
            <button
              type="button"
              className=" svg-icon animate-bounce  text-white bg-primary hover:bg-red-700 focus:ring-primary rounded-full  px-16 lg:px-16 py-2 mt-4 text-center mr-2 mb-2  ml-6"
            >
              ช็อปเลย
            </button>
          </Link>
          </div>
         
        </div>
      </div>
    </>
  );
}
