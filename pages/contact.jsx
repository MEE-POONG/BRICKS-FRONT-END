/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import Head from "next/head";
import React, { useRef } from "react";
import { BsTelephoneFill, BsFacebook, BsLine } from "react-icons/bs";
import { GrAd, GrAddCircle, GrHome, GrMail } from "react-icons/gr";

export default function ContactPage() {

  
  const [{ data: contactData,loading,error }, getContact] = useAxios({
    url: "/api/contact",
  });
  return (
    <>
      <Head>
        <title>ช่องทางติดต่อ</title>
      </Head>
      <div className="container pt-16 mx-auto font-fontTh2 p-4">
      {contactData?.map((contact, index) => (
        <section key={index} className="text-gray-700 body-font overflow-hidden bg-white rounded-lg shadow-xl p-3 lg:p-10">
          <h1 className="text-[30px] lg:text-[50px] font-bold text-center text-primary ">ติดต่อ</h1>
          <p className="text-center uppercase">contact us</p>
          <div className="my-10">
            <iframe
              src={contact.linkMap}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=" w-full h-72 lg:h-96 rounded-md"
            ></iframe>
          </div>

          <div className="m-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:text-[18px]">
            <div>
              <p className="text-[24px] lg:text-[30px]">ที่ตั้ง</p>
              <hr />
              <p className=" flex lg:py-2 mt-1">
                {" "}
                <GrHome /> {contact.address}
              </p>
            </div>
            <div>
              <p className="text-[24px] lg:text-[30px]">ช่องทางติดต่อ</p>
              <hr />
                {" "}
                <a
                  href="tel:+"
                  className=" flex lg:py-2 text-primary hover:underline mt-1"
                >
                  <BsTelephoneFill /> &nbsp; {contact.tel}
                </a>
              
              
              <a
                href={contact.linkLine}
                className=" flex lg:py-2 text-primary hover:underline"
              >
                {" "}
                <BsLine /> &nbsp;{contact.line}{" "}
              </a>
              
              
                {" "}
                <a
                  href="mailto:apichart.pli@gmail.com"
                  className=" flex lg:py-2 text-primary hover:underline"
                >
                  <GrMail /> &nbsp;apichart.pli@gmail.com
                </a>
              
              
            </div>
            <div>
              <p className="text-[24px] lg:text-[30px]">ติดตามข่าวสาร</p>
              <hr />
              <a
                href={contact.linkFacebook}
                className=" flex lg:py-2 text-primary hover:underline mt-1"
              >
                {" "}
                <BsFacebook /> &nbsp;{contact.facebook}{" "}
              </a>
            </div>
          </div>
        </section>
        ))}
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
