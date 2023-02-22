/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../store/cart/cartSlice";
import MapBasket from "../Map/MapBasket";
import BasketEmpty from "./BasketEmpty";
export default function Basket() {
  const cartItems = useSelector((state) => state.cartStore.cart);
  let [openMap, setOpenMap] = useState({
    isOpen: false,
    lat: null,
    lng: null,
  });
  const dispatch = useDispatch();
  const handleDeleteCartItem = async (cartItemId) => {
    try {
      dispatch(deleteCart(cartItemId)).then(
        toast.success("ลบสินค้าเรียบร้อยแล้ว")
      );
    } catch (error) {
      console.log(error);
    }
  };

  //SUM
  const handleSUM = (cartItems) => {
    const sum = cartItems.reduce((accumulator, { price }) => {
      return accumulator + price;
    }, 0);
    return +sum;
  };

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
      <div className="container lg:mt-10 lg:px-20">
        <div className="block my-10 rounded-xl lg:flex">
          <div className="w-full bg-white lg:px-10 lg:py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-bold text-3xl mx-auto">ตระกร้าสินค้า</h1>
            </div>
            <div className="flex mt-10 mb-5 px-2 lg:px-6">
              <h3 className="font-semibold text-left text-gray-600 text-xl w-2/4">
                รายละเอียดสินค้า
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xl w-1/4">
                ที่จัดส่ง
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xl w-1/4">
                จำนวน
              </h3>
              <h3 className="font-semibold text-right text-gray-600 text-xl w-1/4">
                ราคา
              </h3>
            </div>
            {cartItems?.map((item, index) => (
              <div
                key={index}
                className="flex items-center hover:bg-gray-100 py-6 px-2 lg:px-6"
              >
                <div className="flex w-2/4">
                  <div className="w-20">
                    <img className="h-24" src={item.image} alt="product" />
                  </div>
                  <div className="flex flex-col justify-between text-3xl font-bold ml-4 flex-grow">
                    <span className="font-bold text-nd text-primary">
                      {item.name}
                    </span>
                    <div
                      className="w-fit cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xl"
                      onClick={() => handleDeleteCartItem(item.id)}
                    >
                      <FaTrashAlt />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-1/4 text-3xl font-bold">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMap({
                        isOpen: true,
                        lat: item.lat,
                        lng: item.lng,
                      })
                    }
                  >
                    <img className="w-14" src="/gmapLogo.png" />
                  </button>
                  <MapBasket openMap={openMap} setOpenMap={setOpenMap} />
                </div>
                <div className="flex justify-center w-1/4 text-3xl font-bold">
                  <input
                    className="mx-2 border text-center w-8 rounded-md"
                    type="text"
                    disabled
                    value={item.qty.toLocaleString("en-US")}
                  />
                </div>
                <span className="text-right w-1/4 text-3xl font-bold">
                  {item.price.toLocaleString("en-US") + " " + "บาท"}
                </span>
              </div>
            ))}
          </div>
          <div className="relative w-full bg-white lg:px-8 py-10 lg:w-1/4">
            <h1 className="font-semibold text-2xl border-b pb-8 text-center">
              สรุปออเดอร์
            </h1>
            <div className="flex justify-between px-6 mt-10 lg:mb-5 lg:px-2">
              <span className="font-semibold text-2xl">จำนวนสินค้า</span>
              <span className="font-semibold text-2xl">
                {cartItems.length} รายการ
              </span>
            </div>
            <div className="px-6 mt-10 mb-20 lg:mb-5 lg:px-2">
              <label
                htmlFor="note"
                className="font-semibold inline-block mb-3 text-2xl"
              >
                รายละเอียดเพิ่มเติม
              </label>
              <textarea
                type="text"
                rows={4}
                value={""}
                placeholder="กรอกรายละเอียดเพิ่มเติม (ไม่บังคับ)"
                className="p-4 mb-8 text-2xl w-full rounded-lg bg-gray-200 resize-none outline-none focus-visible:shadow-none"
              ></textarea>
            </div>
            <div className="absolute flex justify-between mt-10 mb-5 mx-6 p-5 rounded-lg bg-primary text-white text-center inset-x-0 bottom-0">
              <span className="font-semibold text-4xl">ราคารวม</span>
              <span className="font-semibold text-4xl">
                {handleSUM(cartItems).toLocaleString("en-US")} บาท
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
