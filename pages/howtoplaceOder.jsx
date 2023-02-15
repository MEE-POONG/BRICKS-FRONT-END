import useAxios from "axios-hooks";
import Head from "next/head";
import React, { useRef } from "react";
import SectionComponent from "../components/headtop";

export default function HowToOrder() {
  const [{ data: howtoplaceOderData, loading, error }, getHowtoplaceOder] =
    useAxios({
      url: "/api/howtoplaceOder",
    });
  return (
    <>

   <SectionComponent title="วิธีการสั่งซื้อสินค้า" detail="How to place an order to us?">
        <section className="text-gray-700 body-font overflow-hidden bg-white rounded-lg shadow-xl p-3 lg:p-10">
            <h2 className="text-[25px] lg:text-[34px] text-left font-bold mb-0">
              วิธีการสั่งซื้อสินค้าผ่านเว็บไซต์
            </h2>
            <h4 className=" text-blue-400  text-[20px] lg:text-[24px] text-left font-bold ">
              ***หมายเหตุ : กรูณาอ่านรายละเอียดการสั่งซื้อ และเงื่อนไขการสั่งซื้อ***
            </h4>

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
              <div className="mt-4 text-[20px] lg:text-[30px] text-left font-semibold bg-white ">
                <h3> {howtoplaceOder.steps}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: howtoplaceOder?.substeps }}
                ></div>
              </div>
            </div>
          ))}
        </section>
      </SectionComponent>
    </>
  );
}
