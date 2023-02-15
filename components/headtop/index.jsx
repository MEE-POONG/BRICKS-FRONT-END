import React from "react";

export default function SectionComponent(props) {
  return (
    <>
      <div className=" container mx-auto text-center font-fontTh1 mt-10 ">
        <h3 className="text-[30px]  lg:text-[50px] text-primary font-bold"> {props.title}</h3>
        <h2 className=" text-[25px]  lg:text-[30px] text-center text-gray-400 font-bold">
          {props.detail}
        </h2>
        {props.children}
      </div>
    </>
  );
}
