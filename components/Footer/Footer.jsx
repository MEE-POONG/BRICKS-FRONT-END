import React from "react";
import { BsFacebook, BsLine, BsTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-[#1f2937] mt-24 pt-8 pb-6 font-fontTh2">
        <div className="container mx-auto px-4 text-white">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-5xl text-primary font-semibold ">
                ช่างพอง อิฐประสาน
              </h4>
              <h5 className="text-3xl mt-0 mb-2 text-blueGray-600">
                อิฐประสาน จัดสวน สร้างบ้าน ราคาโรงงาน
              </h5>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-3xl font-semibold mb-2 text-primary">
                    pages
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="font-semibold block pb-2 text-3xl hover:underline"
                        href="../products"
                      >
                        สินค้า
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-3xl hover:underline"
                        href="../portfolio"
                      >
                        ผลงานของเรา
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-3xl hover:underline"
                        href="../about"
                      >
                        เกี่ยวกับเรา
                      </a>
                    </li>
                    <li>
                      <a
                        className=" font-semibold block pb-2 text-3xl hover:underline"
                        href="../contact"
                      >
                        ช่องทางติดต่อ
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-3xl font-semibold mb-2 text-primary">
                    ติดต่อด่วน
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="flex font-semibold  pb-2 text-3xl hover:underline"
                        href="tel:094 397 0414"
                      >
                        <BsTelephoneFill /> &nbsp; 094 397 0414
                      </a>
                    </li>
                    <li>
                      <a
                        className=" flex font-semibold  pb-2 text-3xl hover:underline"
                        href="https://www.facebook.com/DreamBlock9"
                      >
                        <BsFacebook /> &nbsp; ร้านช่างพอง อิฐประสาน 
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex font-semibold  pb-2 text-3xl hover:underline"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        <BsLine /> &nbsp; plingkratoke
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          {/* <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full px-4 mx-auto text-center">
              <div className="text-sm text-primary font-semibold py-1">
                Copyright © 2023 All rights Reserved. &nbsp;
                <span>
                  Design by &nbsp;
                  <a
                    href="https://www.meepoong.com/?fbclid=IwAR3oOETDbweOk5D86c_Io3rq733SroxhxbsQbfiX7dv1E8YT3cKGqLeBlRE"
                    className="text-blueGray-500 hover:underline"
                  >
                    Design by &nbsp;
                  </a>
                </span>
              </div>
            </div>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-primary text-center">
            <div className="text-3xl md:text-left">
              Copyright 2023 © All rights Reserved.
            </div>
            <div className=" md:text-right text-3xl">
              Design by &nbsp;
              <a
                href="https://www.meepoong.com/?fbclid=IwAR3oOETDbweOk5D86c_Io3rq733SroxhxbsQbfiX7dv1E8YT3cKGqLeBlRE"
                className="text-blueGray-500 hover:underline uppercase"
              >
                me promt technology company limited
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
