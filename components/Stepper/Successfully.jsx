import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Successfully() {
  const router = useRouter();
  // condition base redirecting

  const [remainingTime, setRemainingTime] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    if (remainingTime === 0) {
      redirectToOrder();
    }

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      router.push("/profile").finally(() => router.reload());
    }
  }, [remainingTime]);

  return (
    <div class="flex items-center justify-center h-fit m-40">
      <div>
        <div class="flex flex-col items-center space-y-2 font-fontTh text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-[#f9632c] w-28 h-28"
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
          <a class="inline-flex items-center px-4 py-2 text-white bg-[#a5522a] border border-[#b96800] rounded-full hover:bg-red-500 focus:outline-none focus:ring">
            <span class="text-2xl font-medium">
              <Link href="/">คลิกที่นี่เพื่อดูคำสั่งซื้อของท่าน</Link>
            </span>
          </a>
          <p className="text-3xl">
            นับถอยหลัง {remainingTime}
            {" วินาที"} เพื่อไปยังหน้าคำสั่งซื้อ
          </p>
        </div>
      </div>
    </div>
  );
}
