import Link from "next/link";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

export default function BasketEmpty() {
  return (
    <>
      <div className="text-gray-400 text-center text-xl hover:text-secondary">
        <Link href="/">
          <FaShoppingBasket className="text-9xl cursor-pointer mx-auto" />
          <span>ตระกร้ายังว่าง เลือกซื้อเลย !!!</span>
        </Link>
      </div>
    </>
  );
}
