/* eslint-disable @next/next/no-img-element */

import useAxios from "axios-hooks";
import React, { useRef } from "react";

export default function HomeTop() {
  const [{ data: hometopData, loading, error }, getHomeTop] = useAxios({
    url: "/api/home/homeTop",
  });
  return (
    <>
      <div className="font-fontTh2 ">
        {hometopData?.map((HomeTop, index) => (
          <div key={index} className="bg-fixed bg-center bg-cover w-full h-80 md:h-[450px] bg-[url('/images/bg-top.png')] mb-16" >
            <div className="text-center pt-36">
              <h3 className="text-5xl text-[#c94413] md:text-[60px] lg:text-8xl font-extrabold">{HomeTop.title}</h3>
              <p className="text-xl py-5 md:text-[20px] lg:text-[40px] text-[#c94413]">{HomeTop.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
