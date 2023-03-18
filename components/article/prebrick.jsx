/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionComponent from "../headtop";

export default function Prebrick() {
  return (
    <>
      <SectionComponent title="อิฐประสานของเรา" detail="Story">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg motion-safe:hover:scale-105">
              <div className=" flex flex-col justify-center lg:pr-4  mx-4 my-4">
                <a
                  href="#"
                  className="text-black text-3xl font-semibold mb-2 hover:text-[#f9632c] text-center "
                >
                  ข้อดี
                </a>
                <p className="text-gray-700 text-left  text-3xl ">
                  * สามารถยึดเกาะได้ดี มีความหนาแน่นสูง แข็งแรง <br />
                  * ทนทานต่อสภาพอากาศในไทย หาซื้อได้ง่าย มีราคาไม่แพง
                  <br />
                  * สามารถทนไฟได้ประมาณ 2 ชั่วโมง สามารถรับน้ำหนักได้ 30
                  กิโลกรัมต่อ 1 ตารางเซนติเมตร
                  <br />
                  * เป็นอิฐที่เกิดจากกระบวนการผลิตด้วยการเผาตามภูมิปัญญาชาวบ้าน
                  <br />* จึงทำให้มีสีสันที่มีความคลาสสิค
                  เป็นเสน่ห์ที่หลายคนชื่นชอบ
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg motion-safe:hover:scale-105">
              <div className=" flex flex-col justify-center lg:pr-4 mx-4 my-4">
                <a
                  href="#"
                  className="text-black text-3xl font-semibold mb-2 hover:text-[#f9632c] text-center "
                >
                  ข้อจำกัด
                </a>
                <p className="text-gray-700 text-left  text-3xl">
                  * ดูดความชื้น <br />
                  * สะสมความร้อน <br />
                  * อิฐมอญส่วนใหญ่ ผลิตจากชุมชน อาจมีคุณภาพ มาตรฐาน
                  และขนาดไม่สม่ำเสมอ
                  <br />
                  * มีคุณสมบัติอมความร้อน ส่งผลทำให้บ้านร้อนได้
                  <br />
                  * มีขนาดเล็ก จึงใช้เวลาก่อสร้างค่อนข้างนาน
                  และค่าแรงก่อสร้างแพง
                  <br />* ค่อนข้างมีปัญหาเรื่องการเก็บเสียง
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionComponent>
    </>
  );
}
