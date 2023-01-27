/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import Head from "next/head";
import React, { useRef } from "react";

export default function AboutPage() {

  // const [{ data: aboutData,loading,error }, getAbout] = useAxios({
  //   url: "/api/about",
  // });

  if (loading) return <p>Loading</p>
  return (
    <>
      <Head>
        <title>เกี่ยวกับเรา</title>
          <link rel="icon" href="/logo.png" />
      </Head>
      <div className="flex flex-col min-h-screen p-10 bg-gray-100 text-gray-800 font-fontTh2 ">
        <section className="text-gray-700 body-font overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="container p-16 mx-auto">
            <h2 className=" text-[30px]  lg:text-[50px] text-center text-primary font-semibold">
              เกี่ยวกับเรา
            </h2>
            <h2 className=" text-[12px]  lg:text-[20px] text-center ">About</h2>
            <h4 className=" mt-4 text-[16px]  lg:text-[35px] text-left font-semibold">
              ประวัติร้านช่างพอง
            </h4>
            <h4 className=" text-[12px] lg:text-[20px] text-left  text-primary">
              History
            </h4>
            <div className="py-2 lg:py-4 ">
              {/* <img
            src="/Gong_Yoo.png"
            alt=""
            width={"300px"}
            height={"200px"}
            className=""
          /> */}

              <p className="lg:mt-4 text-[14px] lg:text-[20px] text-left lg:text-left ">
                {" "}
                ร้านช่างทองอิฐประสาน ได้พัฒนาธุรกิจผสมผสานวิธีการทำแบบใหม่ และแบบเก่า (Click-and-Mortar)
                เข้าด้วยกัน นอกจากนี้ยังได้เพิ่มสินค้าให้มีความหลากหลายมากขึ้น
                เพื่อตอบโจทย์ความต้องการของลูกค้า ด้วยวิสัยทัศน์ที่พร้อมเปลี่ยนแปลง ปรับตัวไปตามยุคสมัย
                และเพื่อการเข้าถึงที่ง่ายขึ้น ได้เพิ่มการบริการสั่งสินค้าผ่านช่องทางออนไลน์ (Click-and-Click)
                มาพร้อมกับบริการส่งตัวอย่างสินค้าโดยไม่คิดค่าใช้จ่าย บริการถอดแบบพื้นที่ก่อสร้างเบื้องต้น
                และบริการให้คำปรึกษาในการเลือก ใช้ผลิตภัณฑ์ให้เหมาะกับการใช้งานเพื่ออำนวยความสะดวกให้กลุ่มลูกค้าได้ครอบคลุมทุกภูมิภาคทั่วประเทศไทย
                เราพร้อมแล้วที่จะยกระดับวัสดุก่อสร้างธรรมดา สู่การสร้างสรรค์สถาปัตยกรรม ไม่ว่าจะเป็นการจัดวางคู่กับวัสดุอื่น
                ๆ หรือผ่านการแต่งแต้มสีสัน เพื่อเพิ่มลูกเล่น ความสนุก และเสน่ห์ให้กับงานออกแบบ ด้วยมุมมองที่ต่างออกไป
              </p>
            </div>
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light ">
                <h4 className=" mt-2 text-[18px]  lg:text-[35px] text-left font-semibold">
                  ช่างพอง
                </h4>
                <h4 className=" text-[12px] lg:text-[20px] text-left  text-primary">
                  Portfolio
                </h4>
                <p className="mb-4 text-[14px] lg:text-[20px] ">
                  {" "}
                  ร้านช่างทองอิฐประสาน ได้พัฒนาธุรกิจผสมผสานวิธีการทำแบบใหม่ และแบบเก่า (Click-and-Mortar)
                เข้าด้วยกัน นอกจากนี้ยังได้เพิ่มสินค้าให้มีความหลากหลายมากขึ้น
                </p>
              </div>
              <div className="lg:grid lg:grid-cols-2 gap-4 mt-8">
                <img
                  className="w-full rounded-lg"
                  src="/Gong_Yoo.png"
                  alt="office content 1"
                />
                <img
                  className="mt-4 w-full lg:mt-10 rounded-lg"
                  src="/Gong_Yoo.png"
                  alt="office content 2"
                />
              </div>
            </div>
            <div className="mt-14 py-4 hidden lg:block">
              <h2 className="text-[20px] lg:text-[35px] text-center ">
                วิดิโอพรีเซนต์
              </h2>
              <video className="lg:w-3/4 mx-auto " controls>
                <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <h4 className=" mt-4 lg:mt-10 text-[16px]  lg:text-[35px] text-left font-semibold">
             นโยบายช่างพอง
            </h4>
            <h4 className=" text-[12px] lg:text-[20px] text-left  text-primary">
              Policy
            </h4>
            <div className="py-2 lg:py-4 ">
              <p className=" text-[14px] lg:text-[20px] text-left lg:text-left ">
                {" "}
                ร้านช่างทองอิฐประสาน ได้พัฒนาธุรกิจผสมผสานวิธีการทำแบบใหม่ และแบบเก่า (Click-and-Mortar)
                เข้าด้วยกัน นอกจากนี้ยังได้เพิ่มสินค้าให้มีความหลากหลายมากขึ้น
              </p>
            </div>

            <div className=" py-10 grid lg:grid grid-cols-1 lg:grid-cols-3 gap-4 text-center  ">
              <div className="max-w-sm bg-white border-2 border-primary rounded-lg shadow-lg  ">
                <div className="p-5">
                    <h5 className="mb-2 text-[18px] lg:text-[25px]  tracking-tight  ">
                      ต่อลูกค้า
                    </h5>
                  <p className="mb-3 text-[12px] lg:text-[20px] ">
                    สร้างความเชื่อมั่น ไว้วางใจ เกิดความคุ้มค่า 
                  </p>
                </div>
              </div>
              <div className="max-w-sm bg-white border-2 border-primary rounded-lg shadow-lg  ">
                <div className="p-5">
                    <h5 className="mb-2 text-[18px] lg:text-[25px]   tracking-tight  ">
                      ต่อลูกค้า
                    </h5>
                  <p className="mb-3 text-[12px] lg:text-[20px]  ">
                    ซื่อสัตย์ มีความน่าเชื่อถือ
                  </p>
                </div>
              </div>
              <div className="max-w-sm bg-white border-2 border-primary rounded-lg shadow-lg  ">
                <div className="p-5">
                    <h5 className="mb-2 text-[18px] lg:text-[25px]  tracking-tight  ">
                      ต่อคนในองค์กร
                    </h5>
                  <p className="mb-3 text-[12px] lg:text-[20px] ">
                    ทีมงานมีคุณภาพชีวิตและความมั่นคง
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
