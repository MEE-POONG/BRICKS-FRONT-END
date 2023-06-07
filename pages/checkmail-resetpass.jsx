/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import Swal from "sweetalert2";

export default function ResetPasswordPage() {
  const handleSignInEmail = async () => {
    Swal.fire({
      title: 'กรุณารอสักครู่...',
      didOpen: () => {
        Swal.showLoading()
      },
    })
    try {
      await axios({
        method: "post",
        url: "/api/forget-password",
        data: {
          email: document.getElementById("email").value,
        },
      })
      Swal.close()
      return Swal.fire({
        icon: 'success',
        title: 'สำเร็จ',
        text: 'กรุณาตรวจสอบอีเมลของท่าน!',
      })
    } catch (error) {
      Swal.close()
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message,
      })
    }
  }
  return (
    <>
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow-lg shadow-slate-300">
        <div className="flex justify-center my-3">
          <div className="w-1/2">
            <img src="/logo03.png" alt="logo" className="w-fit" />
          </div>
        </div>
        <h1 className="text-5xl font-medium">ลืมรหัสผ่าน</h1>
        <p className="text-slate-500 text-4xl">โปรดกรอกอีเมลที่สมัคร</p>
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


          <div className="my-6">
            <button
              type="button"
              className="w-full text-center text-4xl py-3 my-3 border flex space-x-2 items-center justify-center border-red-200 rounded-lg text-red-700 hover:border-red-400 hover:text-red-900 hover:shadow transition duration-150"
              onClick={handleSignInEmail}
            >
              <span>Sent Reset Code</span>
            </button>
          </div>
        </div>
        <div className="mb-6"></div>
        <hr />

      </div>
    </>
  );
}
