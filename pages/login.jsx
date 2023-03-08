/* eslint-disable @next/next/no-img-element */
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

export default function LoginPage() {
  const handleSignInGmail = async () => {
    await signIn("google", {
      callbackUrl: window.location.origin,
    });
  };
  const handleSignInEmail = async () => {
    await signIn("credentials", {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      callbackUrl: window.location.origin,
    });
  };
  return (
    <>
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow-lg shadow-slate-300">
        <div className="flex justify-center my-3">
          <div className="w-1/2">
            <img src="/logo03.png" alt="logo" className="w-fit" />
          </div>
        </div>
        <h1 className="text-5xl font-medium">เข้าสู่ระบบ</h1>
        <p className="text-slate-500 text-4xl">ร้านช่างพองอิฐประสาน 👋</p>
        <div className="space-y-4 md:space-y-6 text-3xl">
          <div>
            <label
              htmlFor="email"
              className="block mb-2  font-semibold text-gray-900"
            >
              อีเมล
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm: rounded-lg block w-full p-2.5"
              placeholder="dreambloc@mail.com"
              required=""
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2  font-semibold text-gray-900"
            >
              รหัสผ่าน
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm: rounded-lg block w-full p-2.5"
              required=""
            />
          </div>
          <div className="my-6">
            <button
              type="button"
              className="w-full text-center text-4xl py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
              onClick={handleSignInEmail}
            >
              <img
                src="https://th.bing.com/th/id/OIP.b8eH9aaeIR_1YYeYYrFX7gHaHa?pid=ImgDet&rs=1"
                className="w-6 h-6"
                alt=""
              />
              <span>เข้าสู่ระบบ</span>
            </button>
          </div>
        </div>
        <div className="mb-6"></div>
        <hr />
        <div className="my-6">
          <button
            className="w-full text-center text-4xl py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
            onClick={handleSignInGmail}
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-6 h-6"
              alt=""
            />
            <span>เข้าสู่ระบบด้วย Google</span>
          </button>
        </div>
      </div>
    </>
  );
}
