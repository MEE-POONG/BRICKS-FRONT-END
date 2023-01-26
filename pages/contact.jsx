/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useRef } from "react";
import { BsTelephoneFill, BsFacebook } from "react-icons/bs";
import { GrAd, GrAddCircle, GrHome, GrMail } from "react-icons/gr";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>ช่องทางติดต่อ</title>
      </Head>
      <div className="container pt-16 mx-auto font-fontTh2 p-4">
        <section className="text-gray-700 body-font overflow-hidden bg-white rounded-lg shadow-xl p-10">
          <h1 className="text-[50px]  font-bold text-center text-primary">ช่องทางติดต่อ</h1>
          <p className="text-center uppercase">contact us</p>
          {/* <div className="">
            <img src="/images/pp.jpg" alt="" className="rounded-md w-full" />
          </div> */}
          <div className="p-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.69728405411!2d102.18571121494826!3d14.842238175088035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3119573d88f346a9%3A0x52ec18c9eb4543c9!2z4LiK4LmI4Liy4LiH4Lie4Lit4LiHIOC4reC4tOC4kOC4m-C4o-C4sOC4quC4suC4mQ!5e0!3m2!1sen!2sth!4v1674703636285!5m2!1sen!2sth"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=" w-full h-72 lg:h-96"
            ></iframe>
          </div>

          <div className="m-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <p className="text-[24px]">ที่ตั้ง</p>
              <p className=" flex lg:py-2 ">
                {" "}
                <GrHome /> บ้านท่าอ่าง ตำบล ท่าอ่าง อำเภอโชคชัย นครราชสีมา 30190
              </p>
            </div>
            <div>
              <p className="text-[24px]">ช่องทางติดต่อ</p>
              <p>
                {" "}
                <a
                  href="tel:094 397 0414"
                  className=" flex lg:py-2 text-primary dark:text-tertiary"
                >
                  <BsTelephoneFill /> &nbsp; 094 397 0414
                </a>
              </p>
              <p>
                {" "}
                <a
                  href="mailto:apichart.pli@gmail.com"
                  className=" flex lg:py-2 text-primary dark:text-tertiary  hover:underline"
                >
                  <GrMail /> &nbsp;apichart.pli@gmail.com
                </a>
              </p>
            </div>
            <div>
              <p className="text-[24px]">ติดตามข่าวสาร</p>
              <a
                href="https://www.facebook.com/DreamBlock9"
                className=" flex lg:py-2 text-primary dark:text-tertiary  hover:underline"
              >
                {" "}
                <BsFacebook /> &nbsp;ร้านช่างพอง อิฐประสาน จัดสวน สร้างบ้าน
                ราคาโรงงาน{" "}
              </a>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
