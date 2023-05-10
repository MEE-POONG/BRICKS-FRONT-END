/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addSum, deleteCart } from "../../store/cart/cartSlice";
import MapBasket from "../Map/MapBasket";
import BasketEmpty from "./BasketEmpty";
export default function Basket() {
  const cartItems = useSelector((state) => state.cartStore.cart);
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
    dispatch(addSum(+sum));
    return +sum;
  };

  ;

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
      <div className="container lg:mt-10 lg:px-20">
        <div className="block my-10 rounded-xl lg:flex">
          <div className="w-full bg-white lg:p-4">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-bold text-3xl mx-auto">ตระกร้าสินค้า</h1>
            </div>
            <div className="flex mt-10 mb-5 px-2 lg:px-6">
              <h3 className="font-semibold text-2xl w-3/4">
                รายละเอียดสินค้า
              </h3>
              {/* <h3 className="font-semibold text-center text-2xl w-1/4">
                ที่จัดส่ง
              </h3> */}
              <h3 className="font-semibold text-center text-2xl w-1/4">
                จำนวน
              </h3>
              <h3 className="font-semibold text-right text-2xl w-1/4">
                ประเภทรถที่เลือก
              </h3>
            </div>
            {cartItems?.map((item, index) => (
              <div
                key={index}
                className="flex items-center hover:bg-gray-100 py-6 px-2 lg:px-6"
              >
                <div className="flex w-3/4">
                  <div className="w-20">
                    <img className="h-24" src={item.image} alt="product" />
                  </div>
                  <div className="flex justify-start text-3xl font-bold ml-4 flex-grow">
                    <span className="font-bold text-nd text-[#f9632c]">
                      {item.name}
                    </span>
                    <div
                      className="w-fit cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xl pt-2 pl-5"
                      onClick={() => handleDeleteCartItem(item.id)}
                    >
                      <FaTrashAlt />
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-center w-1/4 text-3xl font-bold">
                  <MapBasket item={item} />
                </div> */}
                <div className="flex justify-center w-1/4 text-3xl font-bold">
                {item.qty.toLocaleString("en-US")}
                </div>
                <span className="text-right w-1/4 text-3xl font-bold hidden">
                  {item.price.toLocaleString("en-US") + " " + "บาท"}
                </span>
                <div className="flex justify-center w-1/4 text-3xl font-bold">
                    
                </div>
              </div>
            ))}
          </div>
          <div className="relative w-full bg-white lg:p-4 lg:w-1/4 hidden">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-bold text-3xl mx-auto"> สรุปออเดอร์</h1>
            </div>
            <div className="flex justify-between px-6 mt-10 lg:mb-5 lg:px-2">
              <span className="font-semibold text-2xl">จำนวนสินค้า</span>
              <span className="font-semibold text-2xl">
                {cartItems.length} รายการ
              </span>
            </div>
            <div className=" flex justify-between p-5 space-x-1 rounded-lg bg-[#a5522a] text-white text-center items-center inset-x-0 bottom-0 lg:flex-wrap lg:justify-center">
              <span className="font-semibold text-3xl">ราคารวม</span>
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

