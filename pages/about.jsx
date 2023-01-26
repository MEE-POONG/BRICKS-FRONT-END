import Head from "next/head";
import React, { useRef } from "react";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>ประวัติร้านช่างพอง</title>
      </Head>
      <div className="flex flex-col min-h-screen p-10 bg-gray-100 text-gray-800">
        <section className="text-gray-700 body-font overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="container p-16 mx-auto">
            <h2 className=" text-[30px]  lg:text-[50px] text-center text-primary font-semibold">
              เกี่ยวกับเรา
            </h2>
            <h4 className=" mt-2 text-[18px]  lg:text-[35px] text-left font-semibold">
              ประวัติร้านช่างพอง
            </h4>
            <h4 className=" text-[14px] lg:text-[20px] text-left  text-primary">
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
                จาก “บุญชอบคลังอิฐ” ร้านจำหน่ายอิฐแดงแบบดั้งเดิม
                (Brick-and-Mortar) ตั้งแต่ปี พ.ศ.2534 เเละได้เปลี่ยนชื่อเป็น
                “ร้านอิฐแดง2009” ในปี พ.ศ.2552
                ซึ่งครอบคลุมการจำหน่ายในพื้นที่อีสานตอนล่าง สู่ บริษัท
                อิฐแดง2009 จำกัด ที่คนรุ่นใหม่ได้พัฒนาธุรกิจ
                ผสมผสานวิธีการทำแบบใหม่ และแบบเก่า (Click-and-Mortar)
                เข้าด้วยกัน นอกจากนี้ยังได้เพิ่มสินค้าให้มีความหลากหลายมากขึ้น
                เพื่อตอบโจทย์ความต้องการของลูกค้า
                ด้วยวิสัยทัศน์ที่พร้อมเปลี่ยนแปลง ปรับตัวไปตามยุคสมัย
                และเพื่อการเข้าถึงที่ง่ายขึ้น อิฐแดง2009
                ได้เพิ่มการบริการสั่งสินค้าผ่านช่องทางออนไลน์ (Click-and-Click)
                มาพร้อมกับบริการส่งตัวอย่างสินค้าโดยไม่คิดค่าใช้จ่าย
                บริการถอดแบบพื้นที่ก่อสร้างเบื้องต้น
                และบริการให้คำปรึกษาในการเลือก
                ใช้ผลิตภัณฑ์ให้เหมาะกับการใช้งานเพื่ออำนวยความสะดวกให้กลุ่มลูกค้าได้ครอบคลุมทุกภูมิภาคทั่วประเทศไทย
                เราพร้อมแล้วที่จะยกระดับวัสดุก่อสร้างธรรมดา
                สู่การสร้างสรรค์สถาปัตยกรรม ไม่ว่าจะเป็นการจัดวางคู่กับวัสดุอื่น
                ๆ หรือผ่านการแต่งแต้มสีสัน เพื่อเพิ่มลูกเล่น ความสนุก
                และเสน่ห์ให้กับงานออกแบบ ด้วยมุมมองที่ต่างออกไป
              </p>
            </div>
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light ">
                <h4 className=" mt-2 text-[18px]  lg:text-[35px] text-left font-semibold">
                  ช่างพอง
                </h4>
                <h4 className=" text-[14px] lg:text-[20px] text-left  text-primary">
                  Portfolio
                </h4>
                <p className="mb-4">
                  {" "}
                  จาก “บุญชอบคลังอิฐ” ร้านจำหน่ายอิฐแดงแบบดั้งเดิม
                  (Brick-and-Mortar) ตั้งแต่ปี พ.ศ.2534 เเละได้เปลี่ยนชื่อเป็น
                  “ร้านอิฐแดง2009” ในปี พ.ศ.2552
                  ซึ่งครอบคลุมการจำหน่ายในพื้นที่อีสานตอนล่าง สู่ บริษัท
                  อิฐแดง2009 จำกัด ที่คนรุ่นใหม่ได้พัฒนาธุรกิจ
                  ผสมผสานวิธีการทำแบบใหม่ และแบบเก่า (Click-and-Mortar)
                  เข้าด้วยกัน นอกจากนี้ยังได้เพิ่มสินค้าให้มีความหลากหลายมากขึ้น
                  เพื่อตอบโจทย์ความต้องการของลูกค้า
                  ด้วยวิสัยทัศน์ที่พร้อมเปลี่ยนแปลง ปรับตัวไปตามยุคสมัย
                  และเพื่อการเข้าถึงที่ง่ายขึ้น อิฐแดง2009
                  ได้เพิ่มการบริการสั่งสินค้าผ่านช่องทางออนไลน์
                  (Click-and-Click)
                  มาพร้อมกับบริการส่งตัวอย่างสินค้าโดยไม่คิดค่าใช้จ่าย
                  บริการถอดแบบพื้นที่ก่อสร้างเบื้องต้น
                  และบริการให้คำปรึกษาในการเลือก
                  ใช้ผลิตภัณฑ์ให้เหมาะกับการใช้งานเพื่ออำนวยความสะดวกให้กลุ่มลูกค้าได้ครอบคลุมทุกภูมิภาคทั่วประเทศไทย
                  เราพร้อมแล้วที่จะยกระดับวัสดุก่อสร้างธรรมดา
                  สู่การสร้างสรรค์สถาปัตยกรรม
                  ไม่ว่าจะเป็นการจัดวางคู่กับวัสดุอื่น ๆ
                  หรือผ่านการแต่งแต้มสีสัน เพื่อเพิ่มลูกเล่น ความสนุก
                  และเสน่ห์ให้กับงานออกแบบ ด้วยมุมมองที่ต่างออกไป
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
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
            <div className="mt-20 py-10">
              <h2 className="text-[20px] lg:text-[35px] text-center ">
                วิดิโอพรีเซนต์
              </h2>
            </div>
        
        <div className=" grid grid-cols-3 text-center ">
        <div className="max-w-sm bg-white border-2 border-primary rounded-lg shadow-lg  ">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl tracking-tight  ">
                ต่อลูกค้า
                </h5>
              </a>
              <p className="mb-3 font-normal">
              สร้างความเชื่อมั่น ขจัดปัญหาเพื่อลูกค้าเกิดความคุ้มค่าและความพึงพอใจสูงสุด
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border-2 border-primary rounded-lg shadow-lg  ">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl  tracking-tight  ">
                ต่อลูกค้า
                </h5>
              </a>
              <p className="mb-3 font-normal ">
              ซื่อสัตย์ เป็นธรรม ส่งเสริมความก้าวหน้า
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border-2 border-primary rounded-lg shadow-lg  ">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl  tracking-tight  ">
                ต่อคนในองค์กร
                </h5>
              </a>
              <p className="mb-3 font-normal ">
              ส่งเสริมให้ทีมงานเป็นผู้เรียนรู้ ตลอดชีวิต มีคุณภาพชีวิตและความมั่นคง
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
