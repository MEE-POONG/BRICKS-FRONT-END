/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import Head from "next/head";
import React, { useRef } from "react";
import { useState } from "react";

export default function AboutPage() {
  const [{ data: aboutData, loading, error }, getAbout] = useAxios({
    url: "/api/about",
  });
  const [
    { data: policyData, loading: policyLoading, error: policyError },
    getPolicy,
  ] = useAxios({
    url: "/api/about/policy",
  });

  const [textSize] = useState({
    textSubHead:" text-5xl  lg:text-6xl",
    textSubEn:" text-4xl lg:text-5xl",
    textDetail:" text-2xl lg:text-3xl",
  })

  return (
    <>
      <Head>
        <title>เกี่ยวกับเรา</title>
        <link rel="icon" href="/logo1.png" />
      </Head>
      <div className="flex flex-col min-h-screen p-10 bg-gray-100 text-gray-800 font-fontTh2 ">
        <section className="text-gray-700 body-font overflow-hidden bg-white rounded-lg shadow-lg">
          {aboutData?.map((about, index) => (
            <div key={index} className="container p-16 mx-auto">
              <h1 className=" text-7xl text-center text-[#f9632c] font-semibold">
                {about.headtitle}
              </h1>
              <h2 className=" text-5xl text-center ">
                About
              </h2>
              <h4 className={` ${textSize.textSubHead} mt-4 text-left font-semibold"`}>
                {about.history}
              </h4>
              <h4 className={` ${textSize.textSubEn}  text-left  text-[#f9632c]`}>
                History
              </h4>
              <div className="py-2 lg:py-4 ">
                {/* <img
            src="/Gong_Yoo.png"
            alt=""
            width={"300px"}
            height={"200px"}
            className=""
          /> */}
                <div
                  dangerouslySetInnerHTML={{ __html: about?.subhistory }}
                  className={` ${textSize.textDetail} lg:mt-4 text-left`}
                ></div>
              </div>
              <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light ">
                  <h4 className={` ${textSize.textSubHead}   mt-2 text-left font-semibold`}>
                    {about.portfolio}
                  </h4>
                  <h4 className={` ${textSize.textSubEn} text-left  text-[#f9632c]`}>
                    Portfolio
                  </h4>
                  <div
                    dangerouslySetInnerHTML={{ __html: about?.subportfolio }}
                    className={` ${textSize.textDetail} mb-4`}
                  ></div>
                </div>
                <div className="lg:grid lg:grid-cols-2 gap-4 mt-8">
                  <img
                    className="w-full rounded-lg"
                    src="/Gong_Yoo.png"
                    alt="office content 1"
                  />
                  <img
                    className="mt-4 w-full lg:mt-10 rounded-lg"
                    src="/Gong_Yoo.png"
                    alt="office content 2"
                  />
                </div>
              </div>
              <div className="mt-14 py-4 hidden lg:block">
                <h2 className="text-[20px] lg:text-[35px] text-center ">
                  {about.videotitle}
                </h2>
                <iframe
                                src={about?.video}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className=" mx-auto"
                                height="500px"
                                width="1000px"
                ></iframe>
              
              </div>
                <h4 className={`"  ${textSize.textSubHead}  mt-4 lg:mt-10 text-left font-semibold"`}>
                {about.headpolicy}
              </h4>
              <h4 className={`" ${textSize.textSubEn} text-left  text-[#f9632c]"`}>
                Policy
              </h4>
              <div
                dangerouslySetInnerHTML={{ __html: about?.subpolicy }}
                className={`" ${textSize.textDetail} py-2 lg:py-4 text-left lg:text-left"`}
              ></div>
            </div>
          ))}

          <div className=" py-3  grid  grid-cols-1 lg:grid-cols-3 gap-4 text-center items-center lg:mx-20   ">
            {policyData?.map((item, index) => (
                <div key={index} className="p-5 max-w-sm bg-white border-2 border-[#b96800] rounded-lg shadow-lg  ">
                  <div
                    dangerouslySetInnerHTML={{ __html: item?.headpolicy }}
                    className="mb-2 text-2xl lg:text-4xl  tracking-tight  "
                  ></div>
                  <div
                    dangerouslySetInnerHTML={{ __html: item?.subpolicy }}
                    className="mb-3 text-1xl lg:text-3xl"
                  ></div>
                </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
