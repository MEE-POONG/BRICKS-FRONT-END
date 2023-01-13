import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaBars,
  FaRegHeart,
  FaRegUser,
  FaShoppingBag,
  FaSistrix,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <header className="py-2 shadow-sm bg-white">
        <div className="container items-center justify-evenly lg:flex">
          <div className="flex justify-evenly">
            <Link href={"/"}>
              <Image src="/logo.png" alt="Logo" width={60} height={60} />
            </Link>
            <div className="w-2/3 relative flex lg:w-full">
              <span className="absolute left-4 top-4 text-lg text-gray-400">
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
          <div className="space-x-4 justify-center hidden lg:flex">
            <Link
              href={"#"}
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <FaRegHeart />
              </div>
              <div className="text-xs leading-3">Wishlist</div>
              <div className="absolute right-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </div>
            </Link>
            <Link
              href={"#"}
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <FaShoppingBag />
              </div>
              <div className="text-xs leading-3">Cart</div>
              <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                2
              </div>
            </Link>
            <Link
              href={"#"}
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <FaRegUser />
              </div>
              <div className="text-xs leading-3">Account</div>
            </Link>
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
            <span className="capitalize ml-2 text-white">All Categories</span>

            <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Terarce</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Bed</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">office</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Mattress</span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-6 capitalize">
              <a
                href="index.html"
                className="text-gray-200 hover:text-white transition"
              >
                Home
              </a>
              <a
                href="/products"
                className="text-gray-200 hover:text-white transition"
              >
                Shop
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition">
                About us
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition">
                Contact us
              </a>
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
          <div className="px-4 py-4 bg-primary flex items-center cursor-pointer relative group lg:ml-24">
            <span className="text-white">
              <FaBars />
            </span>
            <span className="capitalize ml-2 text-white">ประเภทสินค้า</span>
            <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Terarce</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Bed</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">office</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Mattress</span>
              </a>
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
