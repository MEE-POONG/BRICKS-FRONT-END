import Link from "next/link";
import React from "react";

export default function StepperControl({
  handleClick,
  currentStep,
  steps,
  handleExec,
  handleSubmit,
  isValid,
  ImageCheck,
}) {
  return (
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
          disabled={!isValid}
          className="bg-primary disabled:opacity-50 disabled:cursor-not-allowed text-white py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-primary hover:bg-primary hover:text-white transition duration-200 ease-in-out"
          onClick={async () => {
            await handleSubmit();
            await handleClick("next");
          }}
        >
          ถัดไป
        </button>
      ) : (
        <button
          onClick={async () => await handleClick("next")}
          className="bg-primary text-white py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-primary hover:bg-primary hover:text-white transition duration-200 ease-in-out"
        >
          ถัดไป
        </button>
      )}
    </div>
  );
}
