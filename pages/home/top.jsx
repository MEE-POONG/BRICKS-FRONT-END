/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useRef } from "react";
import { BsTelephoneFill, BsFacebook, BsLine } from "react-icons/bs";
import { GrAd, GrAddCircle, GrHome, GrMail } from "react-icons/gr";

export default function HomeTop() {
  return (
    <>
      <div className="container mx-auto font-fontTh2">
        <h1>ร้านช่างพอง อิฐประสาน จัดสวน สร้างบ้าน ราคาโรงงาน</h1>
        <img src="/images/p1.jpg" 
        alt="" 
        className="w-full"/>
        
      </div>
    </>
  );
}
