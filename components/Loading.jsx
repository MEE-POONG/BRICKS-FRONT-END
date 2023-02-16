import React from "react";

export default function Loading() {
  return (
    <>
      {/* <div className="flex justify-center">
        <div className="flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-secondary animate-spin">
          <div className="h-72 w-72 rounded-full bg-white"></div>
        </div>
      </div> */}

      <div className="flex justify-center m-20">
        <div className="flex h-80 w-80 items-center justify-center rounded-full animate-bounce">
          <img src="/images/logo.png" />
        </div>
      </div>
    </>
  );
}
