/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import Head from "next/head";
import React, { useRef } from "react";

export default function AboutPage() {

  const [{ data: aboutData,loading,error }, getAbout] = useAxios({
    url: "/api/about",
  });
  const [{ data: policyData,loading: policyLoading ,error:policyError  }, getPolicy] = useAxios({
    url: "/api/about/policy",
  });

  return (
    <>
      <Head>
        <title>เกี่ยวกับเรา</title>
          <link rel="icon" href="/logo.png" />
      </Head>
      <div className="flex flex-col min-h-screen p-10 bg-gray-100 text-gray-800 font-fontTh2 ">
        <section className="text-gray-700 body-font overflow-hidden bg-white rounded-lg shadow-lg">
          {aboutData?.map((about,index) =>(
          <div key={index} className="container p-16 mx-auto">
            <h2 className=" text-[30px]  lg:text-[50px] text-center text-primary font-semibold">
              {about.headtitle}
            </h2>
            <h2 className=" text-[12px]  lg:text-[20px] text-center ">About</h2>
            <h4 className=" mt-4 text-[16px]  lg:text-[35px] text-left font-semibold">
              {about.history}
            </h4>
            <h4 className=" text-[12px] lg:text-[20px] text-left  text-primary">
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

              <p className="lg:mt-4 text-[14px] lg:text-[20px] text-left lg:text-left ">
                {" "}
                {about.subhistory}
              </p>
            </div>
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light ">
                <h4 className=" mt-2 text-[18px]  lg:text-[35px] text-left font-semibold">
                {about.portfolio}
                </h4>
                <h4 className=" text-[12px] lg:text-[20px] text-left  text-primary">
                  Portfolio
                </h4>
                <p className="mb-4 text-[14px] lg:text-[20px] ">
                  {" "}
                  {about.subportfolio}
                </p>
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
              <video className="lg:w-3/4 mx-auto " controls>
                <source src={about.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h4 className=" mt-4 lg:mt-10 text-[16px]  lg:text-[35px] text-left font-semibold">
            {about.headpolicy}
            </h4>
            <h4 className=" text-[12px] lg:text-[20px] text-left  text-primary">
              Policy
            </h4>
            <div className="py-2 lg:py-4 ">
              <p className=" text-[14px] lg:text-[20px] text-left lg:text-left ">
                {" "}
            {about.subpolicy}
              </p>
            </div>
            {policyData?.map((policy,index) => (
            <div key={index} className=" py-3 grid lg:grid grid-cols-1 lg:grid-cols-3 gap-4 text-center  ">
              <div className="max-w-sm bg-white border-2 border-primary rounded-lg shadow-lg  ">
                <div className="p-5">
                    <h5 className="mb-2 text-[18px] lg:text-[25px]  tracking-tight  ">
                      {policy.headpolicy}
                    </h5>
                  <p className="mb-3 text-[12px] lg:text-[20px] ">
                  {policy.subpolicy}
                  </p>
                </div>
              </div>
            </div>
            ))}

          </div>
          ))}
        </section>
      </div>
    </>
  );
}
