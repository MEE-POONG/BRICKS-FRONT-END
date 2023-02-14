/* eslint-disable @next/next/no-img-element */
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

export default function LoginPage() {
  const handleSignIn = async () => {
    await signIn("google", {
      callbackUrl: "http://localhost:3000/",
    });
  };
  return (
    <>
      <div className=" font-fontTh2">
        <section className="bg-gray-50">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-5xl font-semibold text-gray-900"
            >
              <img className="w-8 h-8 mr-2 " src="/logo1.png" alt="logo" />
              Welcome :)
            </a>
            <div className="w-full bg-white rounded-lg shadow-lg  md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl\">
                  เข้าสู่ระบบ
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-3xl font-semibold text-gray-900"
                    >
                      ชื่อผู้ใช้ หรือ อีเมล
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-3xl rounded-lg block w-full p-2.5"
                      placeholder="dreambloc@mail.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-3xl font-semibold text-gray-900"
                    >
                      รหัสผ่าน
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-3xl rounded-lg block w-full p-2.5 "
                      required=""
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-500"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-3xl">
                        <label htmlFor="remember" className="text-gray-500">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-3xl font-semibold text-blue-600 hover:underline "
                    >
                      ลืมรหัสผ่าน?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-sky-600 font-semibold rounded-lg text-3xl px-5 py-2.5 text-center"
                  >
                    Sign in
                  </button>

                  <div className="border t bborder-b-2 border-gray-200"></div>

                  <button
                    type="button"
                    className="w-full text-white bg-red-600 hover:bg-red-700 font-semibold rounded-lg text-3xl px-5 py-2.5 text-center"
                    onClick={handleSignIn}
                  >
                    Google
                  </button>
                  <p className="text-3xl font-light text-gray-500 ">
                    ยังไม่มีบัญชีใช่หรือไม่?{" "}
                    <a
                      href="../sign_up"
                      className="font-semibold text-blue-600 hover:underline "
                    >
                      Sign up
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
