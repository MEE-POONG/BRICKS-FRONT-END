import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import useAxios from "axios-hooks";
import Image from "next/image";
import dayjs from "dayjs";

export default function Profile() {
  const { data: session } = useSession();
  const [
    { data: orderData, error: orderDataError, loading: orderDataLoading },
    getOrder,
  ] = useAxios({
    url: "/api/orders",
    params: { userId: session?.user.id },
    method: "GET",
  });

  return (
    <>
      <div className="container px-5 py-10 mx-auto flex flex-col">
        <div className="flex flex-col items-center text-center justify-center">
          <img
            src={session?.user.image}
            alt=""
            className="rounded-full mx-auto -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
          />
          <h2 className="font-bold mt-1 text-gray-900 text-4xl">
            {session?.user.name}
          </h2>
          <h3 className="mt-1 text-gray-900 text-4xl">{session?.user.email}</h3>
          <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
          <div className="text-5xl font-bold px-3 py-1 leading-normal text-primary rounded-lg">
            คำสั่งซื้อของฉัน
          </div>
          <div className="px-4 flex-auto w-full">
            {orderData?.map((order, index) => (
              <section key={index} className="mb-8 bg-white shadow-lg">
                <div className="border-2 border-gray-300 rounded-lg min-w-full">
                  <div className="flex my-2 mx-6 justify-between">
                    <div>
                      <span className="text-3xl">หมายเลขคำสั่งซื้อ </span>
                      <span className="ml-2 font-semibold text-3xl">
                        {order.orderCode}
                      </span>
                    </div>
                    <div className="text-3xl">
                      <span className="mr-2">วันที่สั่งซื้อ</span>
                      <span>{dayjs(order.createdAt).format("DD-MM-YYYY")}</span>
                      <div className="divide-x-2 divide-gray-400"></div>

                      <span className="mr-2">วันที่จัดส่ง</span>
                      <span>{order.deliveryAt ? dayjs(order.deliveryAt).format("DD-MM-YYYY") : ' รอวันจัดส่ง'}</span>
                    </div>
                  </div>
                  <div className={order.status === 'จัดส่งเสร็จสิ้น' ? "bg-green-500" :"bg-yellow-500"}>
                    <div className="w-full text-white text-3xl">
                      {order.status}
                    </div>
                  </div>

                  <div>
                    {order?.orderDetail?.map((product, index) => (
                      <div key={product.id} className="grid grid-cols-2 my-4">
                        <div className="relative py-10">
                          <div className="absolute mx-auto inset-0 object-center lg:w-full">
                            <Image
                              src={product.products.image}
                              fill
                              sizes="100vw"
                              style={{
                                objectFit: "contain",
                              }}
                              alt="product_image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl">
                            {product.products.name}
                          </div>
                          <div className="text-2xl">X {product.sumQty}</div>
                          <div className="text-2xl">{product.sumPrice}</div>
                        </div>
                      </div>
                    ))}
                    <div className="border-t-2 text-3xl py-2">
                      <span>รวมการสั่งซื้อ </span>
                      {order.totalPrice.toLocaleString("en-US")}
                      <span> บาท</span>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
