/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import BasketEmpty from "./BasketEmpty";
export default function Basket() {
  return (
    <>
      <div className="container lg:mt-10 lg:px-20">
        <div className="block my-10 rounded-xl lg:flex">
          <div className="w-full bg-white lg:px-10 lg:py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl mx-auto">ตระกร้าสินค้า</h1>
            </div>
            <div className="flex mt-10 mb-5 px-2 lg:px-6">
              <h3 className="font-semibold text-left text-gray-600 text-xs w-2/4">
                รายละเอียดสินค้า
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs w-1/4">
                จำนวน
              </h3>
              <h3 className="font-semibold text-right text-gray-600 text-xs w-1/4">
                ราคา
              </h3>
            </div>

            <div className="flex items-center hover:bg-gray-100 py-6 px-2 lg:px-6">
              <div className="flex w-2/4">
                <div className="w-20">
                  <img className="h-24" src={""} alt="product" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-nd text-primary">
                    {"product.name"}
                  </span>
                  <a
                    href="#"
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >
                    <FaTrashAlt />
                  </a>
                </div>
              </div>
              <div className="flex justify-center w-1/4">
                <input
                  className="mx-2 border text-center w-8 rounded-md"
                  type="text"
                  disabled
                  value={""}
                />
              </div>
              <span className="text-right w-1/4 font-semibold text-sm">
                {"product.sumPrice"}
              </span>
            </div>
          </div>
          <div className="relative w-full bg-white lg:px-8 py-10 lg:w-1/4">
            <h1 className="font-semibold text-2xl border-b pb-8 text-center">
              สรุปออเดอร์
            </h1>
            <div className="flex justify-between px-6 mt-10 lg:mb-5 lg:px-2">
              <span className="font-semibold text-sm">จำนวนสินค้า</span>
              <span className="font-semibold text-sm">
                {"cart.length"} รายการ
              </span>
            </div>
            <div className="px-6 mt-10 mb-20 lg:mb-5 lg:px-2">
              <label
                htmlFor="note"
                className="font-semibold inline-block mb-3 text-sm"
              >
                รายละเอียดเพิ่มเติม
              </label>
              <textarea
                type="text"
                rows={4}
                value={""}
                placeholder="กรอกรายละเอียดเพิ่มเติม (ไม่บังคับ)"
                className="p-4 mb-8 text-sm w-full rounded-lg bg-gray-200 resize-none outline-none focus-visible:shadow-none"
              ></textarea>
            </div>
            <div className="absolute flex justify-between mt-10 mb-5 mx-6 p-5 rounded-lg bg-primary text-white text-center inset-x-0 bottom-0">
              <span className="font-semibold text-lg">ราคารวม</span>
              <span className="font-semibold text-lg">{"totalPrice"} บาท</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
