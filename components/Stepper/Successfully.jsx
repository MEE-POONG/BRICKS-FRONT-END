import useAxios from "axios-hooks";
import Link from "next/link";
import React from "react";

export default function Successfully() {


  return (
    <div class="flex items-center justify-center h-fit m-40">
      <div>
        <div class="flex flex-col items-center space-y-2 font-fontTh text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-primary w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 class="text-4xl font-bold leading-normal">
            ขอบคุณสำหรับคำสั่งซื้อ
          </h1>
          <p className="text-3xl">คำสั่งซื้อของท่านอยู่ในระหว่างการตรวจสอบ</p>
          <a class="inline-flex items-center px-4 py-2 text-white bg-primary border border-primary rounded-full hover:bg-lime-800 focus:outline-none focus:ring">
            <span class="text-2xl font-medium">
              <Link href="/">คลิกที่นี่เพื่อดูคำสั่งซื้อของท่าน</Link>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
