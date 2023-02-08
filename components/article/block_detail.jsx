/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";

export default function BlockDetail() {
  return (
    <>
      <div className="container pt-16 mx-auto font-fontTh2 p-4">
        {/* <div className="px-6 pb-2 mb-10 md:mb-24 ">
          <a
            href="../"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary hover:underline  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-return-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
              />
            </svg>
            Back
          </a>
        </div> */}

        {/* detail */}
        <img
          src="/images/bw3.jpg"
          className="w-auto h-auto lg:h-96 rounded-md mx-auto"
          alt=""
        />
        <h2 className="mt-24 text-center text-xl md:text-3xl font-bold">
          หัวข้อบทความที่ต้องการนำเสนอ
        </h2>

        <div className="m-4 md:m-12 indent-8 whitespace-normal text-justify">
          <p>
            ช่วงนี้กระแสการตกแต่งบ้าน ร้านอาหาร คาเฟ่ หรือสถานที่ท่องเที่ยวต่าง
            ๆ ด้วยอิฐแดงช่องลมกำลังมาแรง เพราะนอกจากจะช่วยเพิ่มความสวยงาม
            เป็นเอกลักษณ์แบบไม่ซ้ำใครแล้ว
            อิฐแดงช่องลมยังมีประโยชน์ในเรื่องของการเป็นช่องรับลม
            และรับแสงจากธรรมชาติ หลายคนจึงนิยมนำไปก่อเป็นฟาซาด กำแพง
            หรือผนังกั้นทั้งภายใน และภายนอก แต่สงสัยกันไหมว่า
            อิฐแดงช่องลมนั้นมีวิธีการก่ออย่างไรให้แข็งแรง ปลอดภัย
            เนื่องจากเป็นการก่อแบบโชว์แนว ไม่มีการฉาบปกปิด
            จึงเป็นเรื่องยากที่จะเห็นการใส่เสาเอ็น และคานทับหลัง
            ที่ทำหน้าที่เป็นตัวยยึดผนังให้แข็งแรง ถ้าอย่างนั้น ต้องก่ออย่างไร?
            ในบทคามนี้มีคำตอบครับ กับ How To ก่ออิฐแดงช่องลมอย่างไร ให้แข็งแรง
            สวยงาม
          </p>
        </div>
        <div className="flex mx-5 md:mx-10 flex-wrap-reverse mt-10">
          <div className="flex-auto w-96 md:mr-10 my-10 indent-8 ">
            <h4 className="text-lg text-primary font-semibold mb-5">
              หัวข้อย่อย
            </h4>
            <p>
              ช่วงนี้กระแสการตกแต่งบ้าน ร้านอาหาร คาเฟ่
              หรือสถานที่ท่องเที่ยวต่าง ๆ ด้วยอิฐแดงช่องลมกำลังมาแรง
              เพราะนอกจากจะช่วยเพิ่มความสวยงาม เป็นเอกลักษณ์แบบไม่ซ้ำใครแล้ว
              อิฐแดงช่องลมยังมีประโยชน์ในเรื่องของการเป็นช่องรับลม
            </p>
          </div>
          <div className="flex-auto w-32">
            <img
              src="/images/bw3.jpg"
              className="w-full h-auto rounded-md "
              alt=""
            />
          </div>
        </div>

        <div className="mx-10 mt-24 text-end text-primary hover:underline">
            <i>
                แหล่งที่มา :<a href="#">ร้านช่างพอง</a>
            </i>
        </div>
       
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
