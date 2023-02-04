import useAxios from "axios-hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaBars, FaRegUser, FaShoppingBasket, FaSistrix } from "react-icons/fa";

export default function Navbar() {
  const [{ data: typeData, loading: typeLoading, error: typeError }, getType] =
    useAxios({ url: "/api/category", method: "GET" });

  const router = useRouter();
  const handleClick = (e, path, name) => {
    e.preventDefault();

    if (path === "/products/category") {
      router.push({
        pathname: path + `/${name}`,
      });
    }
  };

  return (
    <>
      <header className="py-2 shadow-sm bg-white z-40 font-fontTh2">
        <div className="min-w-full">
          <div className="lg:items-center lg:justify-between lg:flex">
            <div className="flex justify-around">
              <Link href={"/"} className="lg:mx-10">
                <img
                  src="/logo2.png"
                  className="flex h-auto mx-auto w-12 lg:w-20"
                  alt="logo"
                />
              </Link>
              <div className="w-3/4 relative flex lg:w-full">
                <span className="absolute left-4 my-4 text-lg text-gray-400">
                  <FaSistrix />
                </span>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                  placeholder="ต้องการค้นหา..."
                />
                <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
                  ค้นหา
                </button>
              </div>
            </div>
            <div className="lg:mx-10">
              <div className="space-x-8 justify-evenly flex mt-3">
                <Link
                  href={"/checkuot"}
                  className="text-center text-gray-700 hover:text-primary transition relative"
                >
                  <div className="text-lg flex justify-center lg:text-2xl">
                    <FaShoppingBasket />
                  </div>
                  <div className="text-xs leading-3">ตะกร้า</div>
                  <div className="absolute -right-2 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs lg:w-5 lg:h-5 lg:-right-2">
                    2
                  </div>
                </Link>
                <Link
                  href={"/login"}
                  className="text-center text-gray-700 hover:text-primary transition relative"
                >
                  <div className="text-lg flex justify-center lg:text-2xl">
                    <FaRegUser />
                  </div>
                  <div className="text-xs leading-3">เข้าสู่ระบบ</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-gray-800">
        {/* Full Display */}
        <div className="container flex font-fontTh2">
          <div className="px-8 py-4 ml-10 lg:ml-24 bg-primary flex items-center cursor-pointer relative group/type">
            <span className="text-white">
              <FaBars />
            </span>
            <span className="ml-2 text-white">ประเภทสินค้า</span>
            <div className="absolute w-full z-40 left-0 top-full bg-primary rounded-b-lg shadow-md py-3 divide-y divide-white divide-dashed opacity-0 group-hover/type:opacity-100 transition duration-300 invisible group-hover/type:visible">
              {typeData?.map((type, index) => (
                <div
                  key={index}
                  onClick={(e) =>
                    handleClick(e, "/products/category", type?.name)
                  }
                  className="flex items-center px-6 py-3 hover:bg-red-500 transition relative group/subType"
                >
                  <span className="ml-6 text-white text-sm">{type.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden items-center justify-between flex-grow pl-12 lg:flex">
            <div className="flex items-center space-x-6 capitalize">
              <Link
                href="/products"
                className="text-gray-200 hover:text-white transition"
              >
                สินค้า
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-200 hover:text-white transition"
              >
                ผลงานของเรา
              </Link>
              <Link
                href="/about"
                className="text-gray-200 hover:text-white transition"
              >
                เกี่ยวกับเรา
              </Link>
              <Link
                href="/contact"
                className="text-gray-200 hover:text-white transition"
              >
                ติดต่อเรา
              </Link>
              <Link
                href="/howtoOrder"
                className="text-gray-200 hover:text-white transition"
              >
                วิธีการสั่งซื้อ
              </Link>
              {/* <Link
                href="/article"
                className="text-gray-200 hover:text-white transition"
              >
                แหล่งความรู้
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
