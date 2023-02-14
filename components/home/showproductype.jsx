/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Showproducts() {
  const [{ data: showproData, loading, error }, getProductsHome] = useAxios({
    url: "/api/productsHome",
  });

  return (
    <>
      <div className=" container mx-auto text-center font-fontTh1 mt-10 ">
        <h3 className="text-[24px] md:text-[30px] text-primary">
          {" "}
          สินค้าของเรา
        </h3>
        <h2 className=" text-[12px]  lg:text-[20px] text-center text-gray-400 ">
          Categories
        </h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 mt-10">
        {showproData?.map((productsHome, index) => (
         <div key={index}>
        <div className="cardp mt-10">
          <div className="cardp-img ">
                <Image
                  fill
                  sizes="100vw"
                  src={productsHome.products[0]?.image}
                  alt="productImage"
                  className=" rounded-xl"
                />
          </div>
          <div className="cardp-info">
            <p className="text-title text-xl font-fontTh1">{productsHome.name}</p>
            <p className="text-body  font-fontTh1">
              ใช้สำหรับก่องานโครงสร้าง หรือตกแต่งทำเป็นกำแพงในสวน
            </p>
          </div>
          <div className="cardp-footer">
            <Link href={`/products/category/${productsHome.type.name}` }>
              <button
                type="button"
                className=" svg-icon animate-bounce  text-white bg-primary hover:bg-red-700 focus:ring-primary rounded-full  px-16 lg:px-16 py-2 mt-4 text-center mr-2 mb-2  ml-8"
              >
                ช็อปเลย
              </button>
            </Link>
          </div>
        </div>
        </div>
            ))}
            </div>
      </div>
    </>
  );
}
