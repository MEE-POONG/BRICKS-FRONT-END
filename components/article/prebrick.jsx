/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Prebrick() {
  return (
    <>
      <div className=" container mx-auto  font-fontTh2 mt-10">
        <h3 className="text-[24px] md:text-[30px] text-primary text-center">
          {" "}
          อิฐประสานของเรา
          </h3>
          <h2 className=" text-[12px]  lg:text-[20px] text-center text-gray-400">
          Story
          </h2>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg motion-safe:hover:scale-105">
              <div className=" flex flex-col justify-center lg:pr-4  mx-4 my-4">
                <a
                  href="#"
                  className="text-black text-xl font-semibold mb-2 hover:text-primary text-center "
                >
                  ข้อดี
                </a>
                <p className="text-gray-700 text-base">
                 * สามารถยึดเกาะได้ดี มีความหนาแน่นสูง แข็งแรง <br />
                 * ทนทานต่อสภาพอากาศในไทย หาซื้อได้ง่าย มีราคาไม่แพง
                  <br />
                 * สามารถทนไฟได้ประมาณ 2 ชั่วโมง สามารถรับน้ำหนักได้ 30
                  กิโลกรัมต่อ 1 ตารางเซนติเมตร
                  <br />
                 * เป็นอิฐที่เกิดจากกระบวนการผลิตด้วยการเผาตามภูมิปัญญาชาวบ้าน
                  <br />
                 * จึงทำให้มีสีสันที่มีความคลาสสิค เป็นเสน่ห์ที่หลายคนชื่นชอบ
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg motion-safe:hover:scale-105">
              <div className=" flex flex-col justify-center lg:pr-4 mx-4 my-4">
                <a
                  href="#"
                  className="text-black text-xl font-semibold mb-2 hover:text-primary text-center "
                >
                  ข้อจำกัด
                </a>
                <p className="text-gray-700 text-base">
                 * ดูดความชื้น <br />
                 * สะสมความร้อน <br />
                 * อิฐมอญส่วนใหญ่ ผลิตจากชุมชน อาจมีคุณภาพ มาตรฐาน และขนาดไม่สม่ำเสมอ
                  <br />
                 * มีคุณสมบัติอมความร้อน ส่งผลทำให้บ้านร้อนได้
                  <br />
                 * มีขนาดเล็ก จึงใช้เวลาก่อสร้างค่อนข้างนาน และค่าแรงก่อสร้างแพง
                  <br />
                 * ค่อนข้างมีปัญหาเรื่องการเก็บเสียง
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
