import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    
    Swal.fire({
      title: "กำลังโหลด",
      html: "กรุณารอสักครู่",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });

  
    return () => {
      Swal.close();
      router.push("/profile").finally(() => router.reload());
    }
  }, [])
  
  return (
    <>
      {/* <div className="flex justify-center">
        <div className="flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-secondary animate-spin">
          <div className="h-72 w-72 rounded-full bg-white"></div>
        </div>
      </div> */}

      <div className="flex justify-center m-20">
        <div className="flex h-80 w-80 items-center justify-center rounded-full animate-bounce">
          <img src="/logo03.png" />
        </div>
      </div>
    </>
  );
}
