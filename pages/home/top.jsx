/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useRef } from "react";
import { BsTelephoneFill, BsFacebook, BsLine } from "react-icons/bs";
import { GrAd, GrAddCircle, GrHome, GrMail } from "react-icons/gr";

export default function HomeTop() {
  return (
    <>
      <div className="container mx-auto font-fontTh2 relative">
        <div className="w-full h-[600px] bg-[#713f12]"/>
        <div className="absolute bottom-10 left-10">
        <h1 className=" font-extrabold text-[120px] text-[#0e7490]">ร้านช่างพอง </h1>
        <p className=" font-semibold text-white text-[48px]">อิฐประสาน จัดสวน สร้างบ้าน ราคาโรงงาน</p>
        </div>
      </div>
    </>
  );
}
