/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import Head from "next/head";
import React, { useRef } from "react";
import Image from "next/image";
import SectionComponent from "../headtop";

export default function Brandblock() {
  const [{ data: pichomeTopData, loading, error }, getPichomeTop] = useAxios({
    url: "/api/pichomeTop",
  });
  return (
    <>
      <SectionComponent title="ลูกค้าของเรา" detail="Our Clients​">
        <section className="">
          <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 dark:text-gray-400">
              {pichomeTopData?.map((pichomeTop, index) => (
                <div key={index}>
                  <Image
                  width={"200"}
                  height={"200"}
                    src={pichomeTop.image}
                    alt="productImage"
                    className=" rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionComponent>
    </>
  );
}
