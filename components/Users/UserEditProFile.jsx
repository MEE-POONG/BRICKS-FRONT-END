/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import React from "react";
import SectionComponent from "../headtop";

export default function UserEditProFile(props) {
  return (
    <>
      <SectionComponent title="ข้อมูลของฉัน" detail="My Profile">
        <hr className="w-full bg-red-500 rounded mt-2 "></hr>
        <div class="container mx-auto mt-4">
          <div>
            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
              <div class="flex justify-center">
                <img
                  src={props.userData?.image}
                  alt=""
                  class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                />
              </div>

              <div class="mt-16">
                <h1 class="font-bold text-center text-3xl">
                  {props.userData?.name}
                </h1>
                <div class="my-5 px-6 text-3xl">
                  <span>
                    {props.userData?.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionComponent>
    </>
  );
}
