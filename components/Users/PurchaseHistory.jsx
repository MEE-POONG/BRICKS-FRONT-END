import { useSession, signOut } from "next-auth/react";
import useAxios from "axios-hooks";
import _ from "lodash";
import { useRouter } from "next/router";
import React from "react";
import { FaBars, FaRegUser, FaShoppingBasket, FaSistrix } from "react-icons/fa";
import SectionComponent from "../headtop";

export default function PurchaseHistory() {

  return (
    <>
      <SectionComponent title="ประวัติการซื้อของฉัน" detail="">
        <main>
          <section>
            <div className="bg-gray-100 sm:grid grid-cols-5 grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-4 sm:space-y-0 sm:gap-4">
              <div className="h-56 col-span-4 flex items-center container mx-auto sm:-mx-8  sm:px-8 text-2xl ">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal px-5 border-b-2 border-gray-200 bg-[#1f2937] text-center  font-semibold text-white uppercase tracking-wider ">
                    <thead >
                      <tr className="">
                        <th className=" ">ลำดับ</th>
                        <th className="p-2 ">สินค้า</th>
                        <th className="">จำนวน</th>
                        <th className="">ราคา/ชิ้น</th>
                        <th className="">ราคารวม</th>
                        <th className="">สถานะ</th>
                        <th className="">สั่งซื้อเมื่อ</th>
                        <th className="">รายละเอียด</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl  hover:bg-gray-100">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            1
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl w-2/6 hover:bg-gray-100">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                            แมว เหมียว
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl  hover:bg-gray-100">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0333
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl  hover:bg-gray-100">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            3333
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl  hover:bg-gray-100">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            3333
                          </p>
                        </td>
                        <td className=" whitespace-no-wrap border-bpx-5 py-5 border-b border-gray-200 bg-white hover:bg-gray-100 ">
                          <span className="relative inline-block px-10 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-md  "
                            ></span>
                            <span className="relative text-xl">
                                อิอิ
                                </span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl  hover:bg-gray-100">
                          <p className="py-3 px-3 focus:outline-none leading-none text-red-700 bg-red-100 rounded">
                            15/2/2565 เมื่อ 18:00
                          </p>
                        </td>
                        <td className=" px-5 py-5 border-b border-gray-200 bg-white text-xl  hover:bg-gray-100">
                          <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded-md transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                            ดูรายละเอียด
                          </button>
                        </td>
                      </tr>

                      <tr>
                      <td className="px-5 py-5 border-b-3 border-gray-200 bg-white text-2xl  hover:bg-gray-100">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            1
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl w-2/6 hover:bg-gray-100">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                            แมว เหมียว
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl  hover:bg-gray-100">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0333
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl  hover:bg-gray-100">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            3333
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl  hover:bg-gray-100">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            3333
                          </p>
                        </td>
                        <td className=" whitespace-no-wrap border-bpx-5 py-5 border-b border-gray-200 bg-white hover:bg-gray-100 ">
                          <span className="relative inline-block px-10 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-md  "
                            ></span>
                            <span className="relative text-xl">
                                อิอิ
                                </span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl  hover:bg-gray-100">
                          <p className="py-3 px-3 focus:outline-none leading-none text-red-700 bg-red-100 rounded">
                            15/2/2565 เมื่อ 18:00
                          </p>
                        </td>
                        <td className=" px-5 py-5 border-b border-gray-200 bg-white text-xl  hover:bg-gray-100">
                          <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded-md transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                            ดูรายละเอียด
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="h-96 col-span-1 ">
                <div className="bg-white  rounded-md border-primary border text-2xl ">
                  <h1 className="text-center my-4  bg-white py-2 rounded-md border-b-2  text-gray-600">
                    Service
                  </h1>
                  <div className="bg-white rounded-md list-none  text-center ">
                    <li className="py-3 border-b-2">
                      <a href="#" className="list-none  hover:text-indigo-600">
                        Products
                      </a>
                    </li>
                    <li className="py-3 border-b-2">
                      <a href="#" className="list-none  hover:text-indigo-600">
                        Models
                      </a>
                    </li>
                    <li className="py-3 border-b-2">
                      <a href="#" className="list-none  hover:text-indigo-600">
                        Pricing
                      </a>
                    </li>
                    <li className="py-3 border-b-2">
                      <a href="#" className="list-none  hover:text-indigo-600">
                        Hire
                      </a>
                    </li>
                    <li className="py-3 ">
                      <a
                        href="#"
                        className="list-none border-b-2 hover:text-indigo-600"
                      >
                        Business
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </SectionComponent>
    </>
  );
}
