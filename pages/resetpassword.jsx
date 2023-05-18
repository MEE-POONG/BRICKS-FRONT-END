/* eslint-disable @next/next/no-img-element */
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import Swal from "sweetalert2";

export default function ResetPasswordPage() {
  return (
    <>
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow-lg shadow-slate-300">
        <div className="flex justify-center my-3">
        </div>
        <h1 className="text-5xl font-medium">เปลี่ยนรหัสผ่าน</h1>
        <div className="space-y-4 md:space-y-6 text-3xl">
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
              className="bg-gray-50 border border-gray-300 text-gray-900 sm: rounded-lg block w-full p-2.5"
              placeholder="••••••••"
              required=""
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2  font-semibold text-gray-900"
            >
              ยืนยันรหัสผ่าน
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm: rounded-lg block w-full p-2.5"
               placeholder="••••••••"
              required=""
            />
          </div>

       
          <div className="my-6">
            <button
              type="button"
              className="w-full text-center  text-4xl py-3 my-3 border flex space-x-2 items-center justify-center bg-green-400 border-green-200 rounded-lg text-green-700 hover:border-green-400 hover:text-green-900 hover:shadow transition duration-150"
              
            >
              <span>ยืนยันเปลี่ยนการรหัส</span>
            </button>
          </div>
        </div>
        <div className="mb-6"></div>
        <hr />

      </div>
    </>
  );
}
