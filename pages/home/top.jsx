/* eslint-disable @next/next/no-img-element */

import useAxios from "axios-hooks";
import React, { useRef } from "react";

export default function HomeTop() {
  const [{ data: hometopData,loading,error }, getHomeTop] = useAxios({
    url: "/api/hometop",
  });
  return (
    <>
      <div className="font-fontTh2 ">
      <div className="bg-fixed bg-center w-full h-80 md:h-[450px] bg-[#a05a40] bg-[url('/images/bg-top.png')] mb-24">
        <div className="text-center pt-36">
          <h3 className="text-5xl text-white md:text-[60px] lg:text-8xl font-extrabold">ร้านช่างพอง</h3>
          <p className="text-xl py-5 md:text-[20px] lg:text-[40px] text-white"> อิฐประสาน จัดสวน สร้างบ้าน ราคาโรงงาน</p>
        </div>
      </div>
        
        {/* <div className=" py-10 grid lg:grid grid-cols-1 lg:grid-cols-3 gap-4 text-center mx-5 lg:mx-40">
          <div className="max-w-sm bg-white border-2 border-primary rounded-lg shadow-lg  ">
            <div className="p-5">
            <h5 className="mb-2 text-2xl  tracking-tight  ">ต่อคนในองค์กร</h5>
              <p className="mb-3 font-normal ">
                ส่งเสริมให้ทีมงานเป็นผู้เรียนรู้ ตลอดชีวิต
                มีคุณภาพชีวิตและความมั่นคง
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border-2 border-primary rounded-lg shadow-lg">
            <div className="p-5">
              <h5 className="mb-2 text-2xl  tracking-tight  ">สอบถามผ่าน</h5>
              <p className="mb-3 font-normal text-primary hover:underline">
                <a href="https://www.facebook.com/DreamBlock9">ร้านช่างพอง อิฐประสาน จัดสวน สร้างบ้าน ราคาโรงงาน</a>
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border-2 border-primary rounded-lg shadow-lg  ">
            <div className="p-5">
            <h5 className="mb-2 text-2xl  ">ติดต่อ</h5>
                <button className=" bg-primary rounded-3xl p-2">
                  <a href="tel:094 397 0414" className=" text-white">094 397 0414</a>
                </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
