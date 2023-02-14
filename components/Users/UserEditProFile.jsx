/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function UserEditProFile() {
  return (
    <>
      <div className="text-left">
        <h2 className="text-[30px] font-bold ">ข้อมูลของฉัน</h2>
        <i className="text-[24px]">จัดการข้อมูลส่วนตัวของคุณ</i>
      </div>
      <hr className="w-full bg-red-500 rounded mt-2 "></hr>

      <section class="text-gray-600 body-font">
        <div class="py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    src="/logo.png"
                    alt=""
                    className="h-16 w-16 object-cover rounded-full"
                  />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-bold mt-4 text-gray-900 text-4xl">
                    ชื่อจริง นามสกุล
                  </h2>
                  <div class="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                    Raclette knausgaard hella meggs normcore williamsburg enamel
                    pin sartorial venmo tbh hot chicken gentrify portland.
                  </p>
                </div>
              </div>
              <div class=" font-semibold text-3xl sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
                <div className="grid grid-cols-1 gap-4">
                  <div className="col">
                    <label htmlFor="">ชื่อ :</label>
                    <input type="text" name="" id="" />
                  </div>
                  <div className="col">
                    <label htmlFor="">เบอร์โทร :</label>
                    <input type="tel" name="" id="" />
                  </div>
                  <div className="col">
                    <label htmlFor="">อีเมล :</label>
                    <input type="email" name="" id="" />
                  </div>
                  <div className="col">
                    <label htmlFor="">ที่อยู่ :</label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className=" block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0"
                    ></textarea>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
