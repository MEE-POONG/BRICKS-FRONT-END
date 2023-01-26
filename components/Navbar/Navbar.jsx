import useAxios from "axios-hooks";
import Link from "next/link";
import React from "react";
import {
  FaBars,
  FaRegHeart,
  FaRegUser,
  FaShoppingBasket,
  FaSistrix,
} from "react-icons/fa";

export default function Navbar() {
  const [
    {
      data: productTypeData,
      loading: productTypeLoading,
      error: productTypeError,
    },
    getProductType,
  ] = useAxios({ url: "/api/productType", method: "GET" });

  return (
    <>
      <header className="py-2 shadow-sm bg-white">
        <div className="min-w-full">
          <div className="lg:items-center lg:justify-between lg:flex">
            <div className="flex justify-around">
              <Link href={"/"} className="lg:mx-10">
                <img
                  src="/logo.png"
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
                  href={"#"}
                  className="text-center text-gray-700 hover:text-primary transition relative"
                >
                  <div className="text-lg flex justify-center lg:text-2xl">
                    <FaRegHeart />
                  </div>
                  <div className="text-xs leading-3">Wishlist</div>
                  <div className="absolute -right-0 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs lg:w-5 lg:h-5 lg:-right-1">
                    8
                  </div>
                </Link>
                <Link
                  href={"#"}
                  className="text-center text-gray-700 hover:text-primary transition relative"
                >
                  <div className="text-lg flex justify-center lg:text-2xl">
                    <FaShoppingBasket />
                  </div>
                  <div className="text-xs leading-3">Cart</div>
                  <div className="absolute -right-2 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs lg:w-5 lg:h-5 lg:-right-2">
                    2
                  </div>
                </Link>
                <Link
                  href={"#"}
                  className="text-center text-gray-700 hover:text-primary transition relative"
                >
                  <div className="text-lg flex justify-center lg:text-2xl">
                    <FaRegUser />
                  </div>
                  <div className="text-xs leading-3">Account</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-gray-800">
        {/* Full Display */}
        <div className="container hidden lg:flex">
          <div className="px-8 py-4 ml-24 bg-primary flex items-center cursor-pointer relative group">
            <span className="text-white">
              <FaBars />
            </span>
            <span className="capitalize ml-2 text-white">ประเภท อิฐ</span>
            <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              {productTypeData?.map((type, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <span className="ml-6 text-gray-600 text-sm">
                    {type.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between flex-grow pl-12">
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
                href="#"
                className="text-gray-200 hover:text-white transition"
              >
                ติดต่อเรา
              </Link>
            </div>
            <a
              href="pages/login.html"
              className="text-gray-200 hover:text-white transition"
            >
              Login
            </a>
          </div>
        </div>
        {/* Mobile Display */}
        <div className="container flex justify-between lg:hidden">
          <div className="px-4 py-2 bg-primary flex items-center cursor-pointer relative group">
            <span className="text-white">
              <FaBars />
            </span>
            <span className="capitalize ml-2 text-white">ประเภท อิฐ</span>
            <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              <Link
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">อิฐ 1</span>
              </Link>
              <Link
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">อิฐ 2</span>
              </Link>
              <Link
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">อิฐ 3</span>
              </Link>
              <Link
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">อิฐ 4</span>
              </Link>
              <Link
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">อิฐ 5</span>
              </Link>
              <Link
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">อิฐ 6</span>
              </Link>
            </div>
          </div>
          <div className="px-4 py-4 flex items-center cursor-pointer relative group">
            <span className="text-white">
              <FaBars />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
