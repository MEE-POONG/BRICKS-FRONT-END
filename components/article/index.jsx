/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import Head from "next/head";
import React, { useRef } from "react";

export default function ArticlePage() {
  //   const [{ data: contactData,loading,error }, getContact] = useAxios({
  //     url: "/api/contact",
  //   });
  return (
    <>
      <Head>
        <title>บทความ</title>
      </Head>
      <div className="container pt-16 mx-auto font-fontTh2 p-4">
        {/* <section className="text-gray-700 body-font overflow-hidden bg-white rounded-lg shadow-xl p-3 lg:p-10"> */}
        <h1 className="text-[24px] lg:text-[40px] font-bold text-center text-[#f9632c] ">
          บทความ / สาระน่ารู้
        </h1>
        <p className="text-center uppercase">article</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src="/images/bw3.jpg" alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">สาระน่ารู้</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-4 pb-2 ">
                  <a
                    href="/article/block_detail"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#f9632c] hover:underline  "
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src="/images/bw3.jpg" alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">สาระน่ารู้</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-4 pb-2 ">
                  <a
                    href="/block/block_detail"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#f9632c] hover:underline  "
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src="/images/bw3.jpg" alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">สาระน่ารู้</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-4 pb-2 ">
                  <a
                    href="/block/block_detail"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#f9632c] hover:underline  "
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
          </div>


        </div>
        {/* </section> */}

        <br />
        <br />
        <br />
      </div>
    </>
  );
}
