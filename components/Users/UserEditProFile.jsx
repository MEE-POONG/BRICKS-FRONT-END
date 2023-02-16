/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import React from "react";
import SectionComponent from "../headtop";

export default function UserEditProFile() {
  const [
    { data: userData, loading: userLoading, error: userError },
    getUser,
  ] = useAxios({
    url: `/api/user`,
  });

  return (
    <>
      <SectionComponent title="ข้อมูลของฉัน" detail="My Profile">
        <hr className="w-full bg-red-500 rounded mt-2 "></hr>

        <div className="py-10 mx-auto flex flex-col bg-slate-100">
          <div className="lg:w-3/4 mx-auto">
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <form className="sm:w-1/3  text-center py-3">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    src="/logo.png"
                    alt=""
                    className="h-16 w-16 object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-bold mt-4 text-gray-900 text-4xl">
                    ชื่อจริง นามสกุล
                  </h2>
                  <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                  <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      className="block w-full text-lg text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-lg file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                  "
                    />
                  </label>

                  <p className="text-base">เลือกรูปภาพโปรไฟล์ของคุณ</p>
                </div>
              </form>

              {/* Detail */}
              <form className=" font-semibold text-3xl sm:w-2/4 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
                <div className="">
                  <label htmlFor="">
                    ชื่อ :
                    <input
                      type="text"
                      id=""
                      className="block rounded-t-lg px-2.5 w-full text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                      placeholder=" "
                    />
                  </label>
                </div>
                <div className="py-3">
                  <label htmlFor="">เบอร์โทร : &nbsp;</label>
                  <input
                    type="text"
                    id=""
                    className="block rounded-t-lg px-2.5 w-full text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                    placeholder=" "
                  />
                </div>
                <div className="">
                  <label htmlFor="">อีเมล : &nbsp;</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="block rounded-t-lg px-2.5 w-full text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                    placeholder=""
                  />
                </div>
                <div className="py-3">
                  <label htmlFor="">ที่อยู่ : &nbsp;</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className=" block
                                w-full
                                h-24
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
                <button
                  type="submit"
                  className="mt-10 bg-red-500 rounded-3xl text-white text-[24px] px-5 hover:bg-red-700"
                >
                  บันทึก
                </button>
              </form>
            </div>
          </div>
        </div>
      </SectionComponent>
    </>
  );
}
