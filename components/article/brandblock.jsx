/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import Head from "next/head";
import React, { useRef } from "react";

export default function Brandblock() {
  const [{ data: pichomeTopData, loading, error }, getPichomeTop] = useAxios({
    url: "/api/pichomeTop",
  });
  return (
    <>
      <div className=" container mx-auto text-center font-fontTh2 mt-10">
        <h3 className="text-[24px] md:text-[30px] text-primary mb-5">
          {" "}
          ลูกค้าของเรา
          <span className="text-gray-400"> | Our Clients​</span>
        </h3>
        <section className="">
          <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 dark:text-gray-400">
              {pichomeTopData?.map((pichomeTop, index) => (
                <div key={index}>
                  <a href="#" className="flex justify-center items-center">
                    <img
                      className="w-full"
                      src={pichomeTop.image}
                      alt="logo"
                      width={"200px"}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
