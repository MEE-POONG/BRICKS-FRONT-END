import _ from "lodash";
import React from "react";
import Link from "next/link";
import SectionComponent from "../headtop";

export default function PurchaseHistory() {
  return (
    <>
      <SectionComponent title="ประวัติการซื้อของฉัน" detail="">
        <main>
          <section>
            <div className="grid grid-cols-5 ">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 col-span-4 ">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8 ">
                  <div className="overflow-hidden rounded-md">
                    <table className="min-w-full text-center text-2xl font-bold ">
                      <thead className="border-b bg-gray-800 ">
                        <tr>
                          <th scope="col" className="  text-white px-6 py-4">
                            ลำดับ
                          </th>
                          <th scope="col" className=" text-white px-6 py-4">
                            หมายเลขคำสั่งซื้อ
                          </th>
                          <th scope="col" className=" text-white px-6 py-4">
                            สินค้า
                          </th>
                          <th scope="col" className=" text-white px-6 py-4">
                            ราคา
                          </th>
                          <th scope="col" className="  text-white px-6 py-4">
                            วันที่สั่งซื้อ
                          </th>
                          <th scope="col" className="  text-white px-6 py-4">
                            สถานะ
                          </th>
                          <th scope="col" className="  text-white px-6 py-4">
                            รายละเอียด
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap  text-gray-900  border-l">
                            1
                          </td>
                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark
                          </td>
                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @mdo
                          </td>
                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <p className="py-3 px-3 focus:outline-none leading-none  bg-gray-100 rounded">
                              15/2/2565 เมื่อ 18:00
                            </p>
                          </td>
                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                            <span className="relative inline-block px-10 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-md  "
                              ></span>
                              <span className="relative inline-block py-1 text-xl">
                                กำลังดำเนินการจัดส่ง
                              </span>
                            </span>
                          </td>
                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap  border-r">
                            <button className="relative inline-block px-4 py-1  border-blue-500 border text-blue-500 rounded-md transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                              ดูรายละเอียด
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-gray-900 border-l">
                            2
                          </td>
                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Jacob
                          </td>
                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Thornton
                          </td>
                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @fat
                          </td>
                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <p className="py-3 px-3 focus:outline-none leading-none  bg-gray-100 rounded">
                              15/2/2565 เมื่อ 18:00
                            </p>
                          </td>
                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                            <span className="relative inline-block px-10 py-1 font-semibold text-red-900 leading-tight">
                              <span
                                aria-hidden
                                className="absolute inset-0 bg-red-200 opacity-50 rounded-md  "
                              ></span>
                              <span className="relative inline-block py-1 text-xl">
                                การจัดส่งเสร็จสิ้น
                              </span>
                            </span>
                          </td>
                          <Link href="/Showpurchase">
                            <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap  border-r">
                              <button className="relative inline-block px-4 py-1  border-blue-500 border text-blue-500 rounded-md transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                                ดูรายละเอียด
                              </button>
                            </td>
                          </Link>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className=" col-span-1 ml-4 mt-4">
                <div className="bg-white  rounded-md border-[#b96800] border text-2xl ">
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
