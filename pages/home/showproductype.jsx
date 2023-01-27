import React from "react";

export default function Showproducts() {
  return (
    <>
      <div className=" container mx-auto text-center font-fontTh2">
        <h3 className="text-[24px] md:text-[30px] text-primary">
          {" "}
          สินค้าของเรา 
         
          <span className="text-gray-400 "> |  Categories{" "}</span> 
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img
                className=" w-full h-96 md:h-auto object-contain md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="/images/bw2.png"
                alt=""
              />
              <div className="p-6 flex flex-col justify-center">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  อิฐช่องลม
                </h5>
                <p className="text-gray-700 text-base">
                  Bent Brick
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img
                className=" w-full h-96 md:h-auto object-contain md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="/images/bw.png"
                alt=""
              />
              <div className="p-6 flex flex-col justify-center">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  อิฐทางเท้า
                </h5>
                <p className="text-gray-700 text-base">
                  Pavement Brick
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img
                className=" w-full h-96 md:h-auto object-contain md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="/images/bw3.jpg"
                alt=""
              />
              <div className="p-6 flex flex-col justify-center">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  หินตกแต่งสวน
                </h5>
                <p className="text-gray-700 text-base">
                 Garden Stone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
