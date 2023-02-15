import React from "react";
import SectionComponent from "../headtop";

export default function PurchaseHistory () {
    return (
        <>

 <SectionComponent title="ประวัติการซื้อของฉัน" detail="" >
   <div className="container mx-auto px-4 sm:px-8 ">
    <div className="py-2">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto text-2xl">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal px-5 py-4 border-b-2 border-gray-200 bg-gray-100 text-center  font-semibold text-gray-600 uppercase tracking-wider ">
                    <thead>
                        <tr>
                            <th
                                className=" ">
                                สินค้า
                            </th>
                            <th
                                className="">
                                จำนวน
                            </th>
                            <th
                                className="">
                                ราคา/ชิ้น
                            </th>
                            <th
                                className="">
                                ราคารวม
                            </th>
                            <th
                                className="">
                                สถานะ
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl w-2/5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 w-10 h-10 hidden sm:table-cell">
                                        <img className="w-full h-full rounded-full"
                                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                            alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Team 1
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl">
                                <p className="text-gray-900 whitespace-no-wrap text-center">0</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl">
                                <p className="text-gray-900 whitespace-no-wrap text-center">
                                    3
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl">
                                <p className="text-gray-900 whitespace-no-wrap text-center">
                                    3
                                </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-2xl">
                                    <p class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">Due today at 18:00</p>
                                </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</SectionComponent>
        </>
    )
}