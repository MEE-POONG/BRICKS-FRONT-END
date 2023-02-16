import React from "react";
import { FileUploader } from "react-drag-drop-files";
import { BiCopy } from "react-icons/bi";

const fileTypes = ["JPG", "PNG", "JPEG"];

export default function CheckBill({ imageURL, onImageSlipChange }) {
  const handleChange = (file) => {
    onImageSlipChange(file);
  };

  return (
    <>
      <div className="w-full p-10 bg-white rounded-xl z-10 font-fontTh mx-auto lg:w-1/2">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">
            บัญชีธนาคาร <span className="text-secondary">กสิกร</span>
          </h2>
          <p className="mt-2 text-2xl">
            ชื่อบัญชี <span className="text-secondary">นายกัญชา หมูป่า</span>
          </p>
          <div className="text-2xl mt-2">
            {/* <CopyToClipboard text={"088-999-9999"}>
              <div className="flex justify-center">
                <div className="mr-2">
                  เลขที่บัญชี{" "}
                  <span className="text-secondary">088-999-9999</span>
                </div>
                <Button id="copyclipboard" type="button">
                  <span className="text-xl">
                    <BiCopy />
                  </span>
                </Button>
              </div>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="copyclipboard"
              className="text-sm"
            ></UncontrolledTooltip> */}
          </div>
          <div className="text-center mt-4">
            <p className="text-xl">จำนวนที่ต้องโอน</p>
            <p className="text-3xl my-2 text-secondary">
              {/* {allCart.totalPrice.toLocaleString("en-US")} */}
            </p>
            <p className="text-xl">บาท</p>
          </div>
        </div>
        <div className="grid grid-cols-1 space-y-2 mt-4">
          <label className="text-sm font-bold text-gray-500 tracking-wide text-center">
            รูปภาพสลิปโอนเงิน
          </label>
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          >
            <div className="flex flex-col justify-center items-center mx-auto min-w-fit">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full p-10 group text-center cursor-pointer">
                <div className="h-full w-full text-center flex flex-col justify-center items-center">
                  {imageURL.map((slipImg, index) => (
                    <div key={index}>
                      <img className="mb-2" src={slipImg} alt="slipImage" />
                    </div>
                  ))}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-lime-600 group-hover:text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-gray-500 ">
                    <span>ลากวาง</span> ที่นี่ <br /> หรือ{" "}
                    <span className="text-secondary hover:underline">
                      คลิกเพื่อเลือกไฟล์
                    </span>
                  </p>
                </div>
              </label>
            </div>
          </FileUploader>
        </div>
        <p className="text-sm text-gray-500">
          <span>จะต้องเป็นไฟล์รูปเท่านั้น ชนิด .jpg .jpeg .png</span>
        </p>
      </div>
    </>
  );
}
