import _ from "lodash";
import React from "react";
import SectionComponent from "../components/headtop";
import { BsFacebook, BsLine, BsTelephoneFill } from "react-icons/bs";

export default function Showpurchase() {
  return (
    <>
      <SectionComponent title="รายละเอียดประวัติการซื้อของฉัน" detail="">
        <div className="container  mx-auto font-fontTh2 p-4">
          <section className="text-gray-700 body-font overflow-hidden bg-white border rounded-lg shadow-xl p-3 lg:p-10">
            <h4 className="text-3xl lg:text-3xl font-bold text-primary text-left ">
              ข้อมูลการสั่งซื้อสินค้า
            </h4>
            <div className="m-2 grid grid-cols-1 lg:grid-cols-2 gap-4 text-3xl xs:text-xl">
              <div className="flex">
                <span className=" font-bold">ชื่อ - นามสกุล : &nbsp;</span>
                <hr />
                <span>ติดตามข่าวสาร</span>
              </div>
              <div className="flex ">
                <span className=" font-bold">วันที่สั่งซื้อ : &nbsp;</span>
                <hr />
                <span>ติดตามข่าวสาร</span>
              </div>

              <div className="flex">
                <span className=" font-bold">ที่อยู่ : &nbsp;</span>
                <hr />
                <span>ติดตามข่าวสาร</span>
              </div>

              <div className="flex">
                <span className=" font-bold">เลขออเดอร์สั่งซื้อ : &nbsp;</span>
                <hr />
                <span>ติดตามข่าวสาร</span>
              </div>

              <div className="flex">
                <span className=" font-bold">เบอร์โทรศัพท์ : &nbsp;</span>
                <hr />
                <span>ติดตามข่าวสาร</span>
              </div>

              <div className="flex">
                <span className=" font-bold">อีเมล์ : &nbsp;</span>
                <hr />
                <span>ติดตามข่าวสาร</span>
              </div>
            </div>

            <h4 className="text-3xl lg:text-3xl text-primary text-left font-bold ">
              รายการสั่งซื้อ
            </h4>
            <div className="relative overflow-x-auto mt-4 ">
              <table className="w-full text-3xl text-left text-gray-500 rounded-xl">
                <thead className=" text-gray-700 uppercase bg-red-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      รายการสั่งซื้อ
                    </th>
                    <th scope="col" className="px-6 py-3 text-right">
                      ราคา(THB)
                    </th>
                    <th scope="col" className="px-6 py-3 text-right">
                      หน่วย
                    </th>
                    <th scope="col" className="px-6 py-3 text-right">
                      ราคารวม(THB)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 flex "
                    >
                     <img
                    className="w-20 rounded-lg"
                    src="/Gong_Yoo.png"
                    alt="office content 1"
                  />
                        &nbsp; &nbsp; &nbsp; Apple MacBook Pro 17&quot;
                    </th>
                    <td className="px-6 py-4 text-right">Silver</td>
                    <td className="px-6 py-4 text-right">Laptop</td>
                    <td className="px-6 py-3 text-right">$2999</td>
                  </tr>
                  <tr className="bg-white border-b ">
                  <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 flex "
                    >
                     <img
                    className="w-20 rounded-lg"
                    src="/Gong_Yoo.png"
                    alt="office content 1"
                  />
                        &nbsp; &nbsp; &nbsp; Apple MacBook Pro 17&quot;
                    </th>
                    <td className="px-6 py-4 text-right">White</td>
                    <td className="px-6 py-4 text-right">Laptop PC</td>
                    <td className="px-6 py-3 text-right">$1999</td>
                  </tr>
                  <tr className="bg-white border-b ">
                  <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 flex "
                    >
                     <img
                    className="w-20 rounded-lg"
                    src="/Gong_Yoo.png"
                    alt="office content 1"
                  />
                        &nbsp; &nbsp; &nbsp; Apple MacBook Pro 17&quot;
                    </th>
                    <td className="px-6 py-4 text-right">Black</td>
                    <td className="px-6 py-4 text-right">Accessories</td>
                    <td className="px-6 py-3 text-right">$99</td>
                  </tr>

                  <tr className="bg-white  ">
                    <td></td>
                    <td></td>
                    <th scope="row-2" className="px-6 py-3 text-right">
                      ยอดรวม
                    </th>
                    <td className="px-6 py-3 text-right">$99</td>
                  </tr>

                  <tr className="bg-white ">
                    <td></td>
                    <td></td>
                    <th scope="row-2" className="px-6 py-3 text-right">
                      ค่าขนส่ง
                    </th>
                    <td className="px-6 py-3 text-right">$99</td>
                  </tr>

                  <tr className="bg-white ">
                    <td></td>
                    <td></td>
                    <th scope="row-2" className="px-6 py-3 text-right">
                      ค่ามัดจำ 3%
                    </th>
                    <td className="px-6 py-3 text-right">$99</td>
                  </tr>

                  <tr className="bg-white border-b  border-t">
                    <td></td>
                    <td></td>
                    <th scope="row-2" className="px-6 py-3 text-right">
                      ราคารวมสุทธิ
                    </th>
                    <td className="px-6 py-3 text-right">$99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <br />
          <br />
        </div>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 text-3xl ">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker  font-bold mb-2"
                for="grid-first-name"
              >
                ชื่อ - นามสกุล :
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker  font-bold mb-2"
                for="grid-last-name"
              >
                วันที่สั่งซื้อ :
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker  font-bold mb-2"
                for="grid-first-name"
              >
                ที่อยู่ :
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker  font-bold mb-2"
                for="grid-last-name"
              >
                เลขออเดอร์สั่งซื้อ :
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker font-bold mb-2"
                for="grid-first-name"
              >
                เบอร์โทรศัพท์ :
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker font-bold mb-2"
                for="grid-first-name"
              >
                อีเมล์ :
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
          </div>
        </div>
      </SectionComponent>
    </>
  );
}
