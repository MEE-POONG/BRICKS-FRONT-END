/* eslint-disable @next/next/no-img-element */

import React, { useRef } from "react";

export default function HomeTop() {
  return (
    <>
      <div className="font-fontTh2 ">
        <div className="relative">
          <div className="w-full h-44 lg:h-[500px] bg-[#872a08d8] bg-[url('/images/brickwall.png')]"/>
          <div className="absolute bottom-10 left-10">
            <h1 className=" font-extrabold text-[38px] md:text-[120px] text-[#1d1f23]">
              ร้านช่างพอง{" "}
            </h1>
            <p className=" font-semibold text-white text-[18px] md:text-[48px]">
              อิฐประสาน จัดสวน สร้างบ้าน ราคาโรงงาน
            </p>
          </div>
        </div>

        <div className=" py-10 grid lg:grid grid-cols-1 lg:grid-cols-3 gap-4 text-center mx-5 lg:mx-40">
          <div className="max-w-sm bg-white border-2 border-primary rounded-lg shadow-lg  ">
            <div className="p-5">
              <h5 className="mb-2 text-2xl  ">ติดต่อ</h5>
                <button className=" bg-primary rounded-3xl p-2">
                  <a href="tel:094 397 0414" className=" text-white">094 397 0414</a>
                </button>
            </div>
          </div>
          <div className="max-w-sm bg-white border-2 border-primary rounded-lg shadow-lg">
            <div className="p-5">
              <h5 className="mb-2 text-2xl  tracking-tight  ">ต่อลูกค้า</h5>
              <p className="mb-3 font-normal ">
                ซื่อสัตย์ เป็นธรรม ส่งเสริมความก้าวหน้า
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border-2 border-primary rounded-lg shadow-lg  ">
            <div className="p-5">
              <h5 className="mb-2 text-2xl  tracking-tight  ">ต่อคนในองค์กร</h5>
              <p className="mb-3 font-normal ">
                ส่งเสริมให้ทีมงานเป็นผู้เรียนรู้ ตลอดชีวิต
                มีคุณภาพชีวิตและความมั่นคง
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
