import useAxios from "axios-hooks";
import { useRouter } from "next/router";
import React from "react";

export default function ProductsCategory({ typeName }) {
  const router = useRouter();
  const [
    {
      data: categoryData,
      loading: categoryDataLoading,
      error: categoryDataError,
    },
    getType,
  ] = useAxios({
    url: `/api/category/type?typeName=${typeName}`,
    method: "GET",
  });

  const handleClick = (e, path, name, subType) => {
    e.preventDefault();

    if (path === `/products/category/${name}`) {
      router.push({
        pathname: path + `/${subType}`,
      });
    }
  };

  const UrlCheck = (pathType) => {

    const deCodeAsPath = decodeURI(router.asPath); // แปลง url ภาษาต่างดาว เป็น ไทย
    const pathSplit = deCodeAsPath.split('/');  // ตัดคำจาก / แล้วแยกเป็นอาเรย์
    const LastArray = pathSplit[pathSplit.length - 1]  // เอาอาเรย์ตัวสุดท้าย

    if (LastArray === pathType) {
      return "bg-primary text-white";
    }
    return "bg-white text-gray-600";
  };

  return (
    <>
      <div
        className={`${UrlCheck(typeName)} rounded-3xl p-1 px-4 shadow-lg cursor-pointer hover:-translate-y-1 transition-transform duration-300`}
        onClick={() =>
          router.push({
            pathname: `/products/category/${typeName}`,
          })
        }
      >
        <span className="text-lg">ทั้งหมด</span>
      </div>
      {categoryData?.SubType.map((subTypeData, index) => (
        <div
          key={index}
          className={`${UrlCheck(
            subTypeData.name
          )} rounded-3xl p-1 px-4 shadow-lg cursor-pointer hover:-translate-y-1 transition-transform duration-300`}
          onClick={(e) =>
            handleClick(
              e,
              `/products/category/${typeName}`,
              typeName,
              subTypeData.name
            )
          }
        >
          <span className="text-lg">{subTypeData.name}</span>
        </div>
      ))}
    </>
  );
}
