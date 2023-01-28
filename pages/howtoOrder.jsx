import Head from "next/head";
import React from "react";

export default function HowToOrder() {
    return (
        <>
        <Head>
          <title>วิธีการสั่งซื้อสินค้า</title>
        </Head>
      <div className="container pt-16 mx-auto font-fontTh2 p-4">
      <section className="text-gray-700 body-font overflow-hidden bg-white rounded-lg shadow-xl p-3 lg:p-10">
      <h1 className="text-[30px] lg:text-[50px] font-bold text-center text-primary ">วิธีการสั่งซื้อสินค้า</h1>
          <p className="text-center uppercase">How to Order</p>

          <div className=" mt-16 mx-2">
            <h2 className="text-[16px] lg:text-[24px] text-left font-semibold mb-5">
              วิธีการสั่งซื้อสินค้าผ่านเว็บไซต์
            </h2>
            <i className=" text-blue-400">
              ***หมายเหตุ : กรูณาอ่านรายละเอียดการสั่งซื้อ และเงื่อนไขการสั่งซื้อ
            </i>

            <div className="mt-10 text-[16px] lg:text-[18px] text-left font-semibold">
              <h3>ขั้นตอนที่ 1</h3>
              <p></p>
            </div>
          </div>
      </section>

      </div>

        </>
    )
}