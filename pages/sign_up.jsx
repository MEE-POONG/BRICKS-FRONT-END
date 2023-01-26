/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { BiUserCircle } from "react-icons/bi";

export default function SignUpPage() {
  return (
    <>
      <div className=" font-fontTh2">
        <section className="bg-gray-50">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl text-gray-900 dark:text-white"
            >
              <img className="w-8 h-8 mr-2" src="/logo.png" alt="logo" />
              Welcome :)
            </a>
            <div className=" bg-white rounded-lg shadow-lg md:mt-0 min-w-screen ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  สมัครสมาชิก
                </h1>
                <form className="space-y-4 md:space-y-6 " action="#">
                  <div className="flex -mx-3">
                    <div className="w-1/2 px-3">
                      <label htmlFor="firstname" className="text-sm px-1 font-semibold">
                        ชื่อจริง
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center ">
                          <BiUserCircle />
                        </div>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div className="w-1/2 px-3">
                      <label htmlFor="lastname" className="text-sm px-1 font-semibold">
                        นามสกุล
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <BiUserCircle />
                        </div>
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none"
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="tel"
                      className="block mb-2 text-sm font-semibold text-gray-900 "
                    >
                      เบอร์โทร
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                      placeholder="0991234567"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-semibold text-gray-900"
                    >
                      อีเมล
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                      placeholder="dreambloc@mail.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-semibold text-gray-900"
                    >
                      ชื่อผู้ใช้
                    </label>
                    <input
                      type="username"
                      name="username"
                      id="username"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                      placeholder="dreamblock"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-semibold text-gray-900"
                    >
                      รหัสผ่าน
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                      required=""
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-sky-600 font-semibold rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Sign Up
                  </button>
                  <p className="text-sm font-light text-gray-500 ">
                    คุณมีบัญชีแล้วใช่หรือไม่?{" "}
                    <a
                      href="/login"
                      className="font-semibold text-blue-600 hover:underline "
                    >
                      Sign in
                    </a>
                  </p>
                </form>
              </div>
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
