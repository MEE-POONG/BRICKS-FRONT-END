/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import Head from "next/head";
import React, { useRef } from "react";
import { BsTelephoneFill, BsFacebook, BsLine  } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GrAd, GrAddCircle, GrMail } from "react-icons/gr";

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
          <h1 className=" text-5xl  lg:text-6xl font-bold text-center text-[#f9632c] ">ติดต่อ</h1>
          <p className=" text-4xl lg:text-5xl text-center uppercase">contact us</p>
          <div className="my-10">
            <iframe
              src={contact.linkMap}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=" w-full h-72 lg:h-96 rounded-md"
            ></iframe>
          </div>

          <div className="m-5 grid grid-cols-1 lg:grid-cols-3 gap-8 text-3xl">
            <div>
              <p>ที่ตั้ง</p>
              <hr />
              <p className=" flex lg:py-2 mt-1 text-[#f9632c]">
                {" "}
                <FaHome /> &nbsp; {contact.address}
              </p>
            </div>
            <div>
              <p>ช่องทางติดต่อ</p>
              <hr />
                {" "}
                <a
                  href="tel:+"
                  className=" flex lg:py-2 text-[#f9632c] hover:underline mt-1"
                >
                  <BsTelephoneFill /> &nbsp; {contact.tel}
                </a>
              
              
              <a
                href={contact.linkLine}
                className=" flex lg:py-2 text-[#f9632c] hover:underline"
              >
                {" "}
                <BsLine /> &nbsp;{contact.line}{" "}
              </a>
              
              
                {" "}
                <a
                  href="mailto:"
                  className=" flex lg:py-2 text-[#f9632c] hover:underline"
                >
                  <GrMail /> &nbsp;{contact.email}
                </a>
              
              
            </div>
            <div>
              <p>ติดตามข่าวสาร</p>
              <hr />
              <a
                href={contact.linkFacebook}
                className=" flex lg:py-2 text-[#f9632c] hover:underline mt-1"
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
