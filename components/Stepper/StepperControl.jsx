import Link from "next/link";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

export default function StepperControl({
  handleClick,
  currentStep,
  steps,
  handleExec,
  ImageCheck,
}) {
  const { addressId } = useSelector((state) => state.cartStore);
  const { cart } = useSelector((state) => state.cartStore);
  return (
    <>
      <Toaster
        reverseOrder={true}
        position={"bottom-center"}
        gutter={8}
        toastOptions={{
          error: {
            style: {
              background: "#e02424",
              color: "white",
              fontSize: "2rem",
              borderRadius: "2rem",
            },
          },
        }}
      />
      <div className="container flex justify-center mb-8 space-x-10 mx-auto">
        {/* back button */}
        {currentStep === 1 ? (
          <Link
            href="/"
            onClick={() => handleClick()}
            className="text-primary bg-white cursor-pointer py-2 px-4 rounded-xl font-semibold border-2 border-primary hover:bg-primary hover:text-white transition duration-200 ease-in-out"
          >
            ย้อนกลับ
          </Link>
        ) : (
          <button
            onClick={() => handleClick()}
            className="text-primary bg-white cursor-pointer py-2 px-4 rounded-xl font-semibold border-2 border-primary hover:bg-primary hover:text-white transition duration-200 ease-in-out"
          >
            ย้อนกลับ
          </button>
        )}
        {/* next button */}
        {currentStep === 3 ? (
          <button
            disabled={ImageCheck()}
            className={`${
              ImageCheck() ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }  bg-primary text-white py-2 px-4 rounded-xl font-semibold border-2 border-secondary hover:primary hover:text-white transition duration-200 ease-in-out`}
            onClick={async () => {
              await handleClick("next");
              await handleExec();
            }}
          >
            ยืนยัน
          </button>
        ) : currentStep === 2 ? (
          <button
            type="submit"
            form="formSubmit"
            className="bg-primary disabled:opacity-50 disabled:cursor-not-allowed text-white py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-primary hover:bg-primary hover:text-white transition duration-200 ease-in-out"
            onClick={async () => {
              if (addressId !== "") {
                await handleClick("next");
              } else {
                toast.error("กรุณาเลือกที่อยู่ในการรับสินค้า");
              }
            }}
          >
            ถัดไป
          </button>
        ) : (
          <button
            onClick={async () => {
              if (cart.length !== 0) {
                await handleClick("next");
              } else {
                toast.error("กรุณาเลือกซื้อสินค้าก่อนชำระเงิน");
              }
            }}
            className="bg-primary text-white py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-primary hover:bg-primary hover:text-white transition duration-200 ease-in-out"
          >
            ถัดไป
          </button>
        )}
      </div>
    </>
  );
}
