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

            <div className="  grid grid-cols-1 lg:grid-cols-3   py-10  ">
              <img
                src="/1.png"
                alt=""
                width={"55%"}
                height={"55%"}
                className=" lg:w-96 mx-auto my-3 rounded-lg  bg-white shadow-lg motion-safe:hover:scale-105 focus:hover: "
              />
              <img
                src="/2.png"
                alt=""
                width={"55%"}
                height={"55%"}
                className=" lg:w-96 mx-auto rounded-lg my-3  bg-white shadow-lg motion-safe:hover:scale-105 "
              />
              <img
                src="/4.png"
                alt=""
                width={"55%"}
                height={"55%"}
                className=" lg:w-96 mx-auto rounded-lg my-3  bg-white shadow-lg motion-safe:hover:scale-105 "
              />
              <img
                src="/3.png"
                alt=""
                width={"55%"}
                height={"55%"}
                className=" lg:w-96  mx-auto rounded-lg my-3  bg-white shadow-lg motion-safe:hover:scale-105 "
              />
              <img
                src="/5.png"
                alt=""
                width={"55%"}
                height={"55%"}
                className=" lg:w-96 mx-auto rounded-lg bg-white shadow-lg motion-safe:hover:scale-105 "
              />
            </div>
            <div className="mt-10 text-[16px] lg:text-[18px] text-left font-semibold bg-white ">
              <h3>ขั้นตอนที่ 1</h3>
              <p>เข้าชมทางเว็บไซต์ เลือกสินค้าที่คุณต้องการ </p>
            </div>

            <div className="mt-10 text-[16px] lg:text-[18px] text-left font-semibold bg-white ">
              <h3>ขั้นตอนที่ 2</h3>
              <p> กรอกรายละเอียดข้อมูลที่อยู่เพื่อจัดส่งสินค้า และตรวจสอบเงื่อนไขก่อนทำการชำระเงินค่ามัดจำสินค้า</p>
            </div>

            <div className="mt-10 text-[16px] lg:text-[18px] text-left font-semibold bg-white  ">
              <h3>ขั้นตอนที่ 3</h3>
              <p> โอนชำระค่ามัดจำสินค้า </p>
            </div>
            
            <div className="mt-10 text-[16px] lg:text-[18px] text-left font-semibold bg-white  ">
              <h3>ขั้นตอนที่ 4</h3>
              <p> สมัครสมาชิก เพื่อใช้เข้าสู่ระบบ เพื่อตรวจสอบสถานะการจัดส่ง</p>
            </div>
            
            <div className="mt-10 text-[16px] lg:text-[18px] text-left font-semibold bg-white  ">
              <h3>ขั้นตอนที่ 5</h3>
              <p> จัดส่งสินค้าภายใน 3-5 วัน หลังจากชำระเงิน กรณีเป็นสินค้าที่สั่งผลิต อาจเป็น 5-10 วัน ขึ้นอยู่กับประเภทสินค้าและจำนวนการผลิต</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
