/* eslint-disable @next/next/no-img-element */
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

export default function LoginPage() {
  const handleSignIn = async () => {
    await signIn("google", {
      callbackUrl: "/",
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
        <div className="my-6">
          <button
            className="w-full text-center text-4xl py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
            onClick={handleSignIn}
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
