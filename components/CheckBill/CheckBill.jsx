import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FileUploader } from "react-drag-drop-files";
import { toast, Toaster } from "react-hot-toast";
import { BiCopy } from "react-icons/bi";
import { useSelector } from "react-redux";

const fileTypes = ["JPG", "PNG", "JPEG"];

export default function CheckBill({ imageURL, onImageSlipChange }) {
  const totalPrice = useSelector((state) => state.cartStore.totalPrice);
  const handleChange = (file) => {
    onImageSlipChange(file);
  };

  console.log(totalPrice);

  let price = 300;
  if (totalPrice > 100000) {
    price = 30000;
  } else if (totalPrice > 10000) {
    price = 3000;
  } else if (totalPrice > 1000) {
    price = 300;
  }

  return (
    <>
      <Toaster
        reverseOrder={true}
        position={"bottom-center"}
        gutter={8}
        toastOptions={{
          success: {
            style: {
              background: "#0a8f2d",
              color: "white",
              fontSize: "2rem",
              borderRadius: "2rem",
            },
          },
        }}
      />
      <div className="w-full p-10 bg-white rounded-xl z-10 mx-auto lg:w-1/2">
        <div className="text-center">
          <h2 className="mt-5 text-4xl">
            บัญชีธนาคาร <span className="text-secondary">กสิกร</span>
          </h2>
          <p className="mt-2 text-5xl font-bold">
            ชื่อบัญชี <span className="text-secondary">ช่างพองอิฐประสาน</span>
          </p>
          <div className="text-4xl mt-2 font-bold">
            <CopyToClipboard text={"088-999-9999"}>
              <div className="flex justify-center">
                <div className="mr-2">
                  เลขที่บัญชี{" "}
                  <span className="text-secondary">088-999-9999</span>
                </div>
                <button
                  id="copyclipboard"
                  type="button"
                  onClick={() => toast.success("คัดลอกเลขบัญขีแล้ว")}
                >
                  <span className="text-xl">
                    <BiCopy />
                  </span>
                </button>
              </div>
            </CopyToClipboard>
          </div>
          <div className="text-center mt-4">
            <p className="text-4xl">จำนวนที่ต้องโอนมัดจำ</p>
            <p className="text-3xl font-bold my-2">
              {price.toLocaleString("en-US")} บาท
            </p>
          </div>
          <i className="text-xl text-red-500">**กรุณาโอนเงินค่ามัดจำ เพื่อยืนยันการสั่งซื้อสินค้า**</i>
        </div>
        <div className="grid grid-cols-1 space-y-2 mt-4">
          <label className="text-2xl font-bold text-gray-500 tracking-wide text-center">
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
                    className="w-10 h-10 text-[#f9632c] group-hover:text-secondary"
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
                  <p className="text-2xl">
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
        <p className="text-2xl">
          <span>จะต้องเป็นไฟล์รูปเท่านั้น ชนิด .jpg .jpeg .png</span>
        </p>
      </div>
    </>
  );
}
