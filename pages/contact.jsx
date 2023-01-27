/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useRef } from "react";
import { BsTelephoneFill, BsFacebook, BsLine } from "react-icons/bs";
import { GrAd, GrAddCircle, GrHome, GrMail } from "react-icons/gr";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>ช่องทางติดต่อ</title>
      </Head>
      <div className="container pt-16 mx-auto font-fontTh2 p-4">
        <section className="text-gray-700 body-font overflow-hidden bg-white rounded-lg shadow-xl p-3 lg:p-10">
          <h1 className="text-[30px] lg:text-[50px] font-bold text-center text-primary ">ติดต่อ</h1>
          <p className="text-center uppercase">contact us</p>
          <div className="my-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.69728405411!2d102.18571121494826!3d14.842238175088035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3119573d88f346a9%3A0x52ec18c9eb4543c9!2z4LiK4LmI4Liy4LiH4Lie4Lit4LiHIOC4reC4tOC4kOC4m-C4o-C4sOC4quC4suC4mQ!5e0!3m2!1sen!2sth!4v1674703636285!5m2!1sen!2sth"
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
                <GrHome /> บ้านท่าอ่าง ตำบล ท่าอ่าง อำเภอโชคชัย นครราชสีมา 30190
              </p>
            </div>
            <div>
              <p className="text-[24px] lg:text-[30px]">ช่องทางติดต่อ</p>
              <hr />
                {" "}
                <a
                  href="tel:094 397 0414"
                  className=" flex lg:py-2 text-primary hover:underline mt-1"
                >
                  <BsTelephoneFill /> &nbsp; 094 397 0414
                </a>
              
              
              <a
                href="https://www.facebook.com/DreamBlock9"
                className=" flex lg:py-2 text-primary hover:underline"
              >
                {" "}
                <BsLine /> &nbsp;plingkratoke{" "}
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
                href="https://www.facebook.com/DreamBlock9"
                className=" flex lg:py-2 text-primary hover:underline mt-1"
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
