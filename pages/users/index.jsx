/* eslint-disable @next/next/no-img-element */
import {useSession} from "next-auth/react";
import React from "react";
import PurchaseHistory from "../../components/Users/PurchaseHistory";
import UserEditProFile from "../../components/Users/UserEditProFile";

const Tabs = ({ color }) => {
  const { data: session } = useSession();
  console.log(session?.user);
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="flex flex-col items-center text-center justify-center">
          <img src="/logo.png" alt="" className=" rounded-2xl w-24" />
          <h2 className=" font-bold mt-1 text-gray-900 text-4xl">
            ชื่อจริง นามสกุล
          </h2>
          <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-2xl font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-red-500"
                    : "text-red-500" + " bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                ข้อมูลของฉัน
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-2xl font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-red-500"
                    : "text-red-500" + " bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                การซื้อของฉัน
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-2 lg:p-8">
            <div className="px-4 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <UserEditProFile userData={session?.user}/>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <PurchaseHistory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function UserProFile() {
  return (
    <>
     
        <Tabs />;
   
    </>
  );
}
