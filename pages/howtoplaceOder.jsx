import useAxios from "axios-hooks";
import Head from "next/head";
import React, { useRef } from "react";

export default function HowToOrder() {
  const [{ data: howtoplaceOderData, loading, error }, getHowtoplaceOder] =
    useAxios({
      url: "/api/howtoplaceOder",
    });
  return (
    <>
      <Head>
        <title>วิธีการสั่งซื้อสินค้า</title>
      </Head>
      <div className="container pt-16 mx-auto font-fontTh2 p-4">
        <section className="text-gray-700 body-font overflow-hidden bg-white rounded-lg shadow-xl p-3 lg:p-10">
          <h1 className="text-[30px] lg:text-[50px] font-bold text-center text-primary ">
            วิธีการสั่งซื้อสินค้า
          </h1>
          <p className="text-center uppercase">How to place an order to us?</p>

          <div className=" mt-16 mx-2">
            <h2 className="text-[16px] lg:text-[24px] text-left font-semibold mb-5">
              วิธีการสั่งซื้อสินค้าผ่านเว็บไซต์
            </h2>
            <i className=" text-blue-400">
              ***หมายเหตุ : กรูณาอ่านรายละเอียดการสั่งซื้อ
              และเงื่อนไขการสั่งซื้อ
            </i>
          </div>

          <div className="  grid grid-cols-1 lg:grid-cols-3   py-10  ">
            {howtoplaceOderData?.map((howtoplaceOder, index) => (
              <div key={index}>
                <img
                  src={howtoplaceOder.image}
                  alt=""
                  width={"55%"}
                  height={"55%"}
                  className=" lg:w-96 mx-auto my-3 rounded-lg  bg-white shadow-lg motion-safe:hover:scale-105 focus:hover: "
                />
              </div>
            ))}
          </div>

          {howtoplaceOderData?.map((howtoplaceOder, index) => (
            <div key={index}>
              <div className="mt-10 text-[16px] lg:text-[18px] text-left font-semibold bg-white ">
                <h3> {howtoplaceOder.steps}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: howtoplaceOder?.substeps }}
                ></div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
