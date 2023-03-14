import { useSession, signOut } from "next-auth/react";
import useAxios from "axios-hooks";
import _ from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaBars, FaRegUser, FaShoppingBasket, FaSistrix } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { data: session } = useSession();
  const cartLength = useSelector((state) => state.cartStore.cart.length);

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

  const [navbar, setNavbar] = useState(false);
  //sort arr ชื่อ "อื่นๆ" ให้เอาไปไว้ท้ายสุด
  const arrSortTypeName = _.sortBy(typeData, ({ name }) => name === "อื่นๆ");

  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <>
      <header className="sticky top-0 shadow-sm bg-white z-40 text-2xl">
        <div className="min-w-full relative">
          <div className="lg:items-center lg:justify-between lg:flex">
            <div className="flex justify-around space-y-2">
              <Link href={"/"} className="lg:mx-10 my-auto">
                <img
                  src="/logo03.png"
                  className="flex h-auto mx-auto w-12 lg:w-20"
                  alt="logo"
                />
              </Link>
              <div className="w-3/4 relative flex lg:w-full">
                <span className="absolute top-0 translate-y-[50%] left-4 text-lg text-gray-400">
                  <FaSistrix />
                </span>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="w-full border border-[#b96800] border-r-0 pl-12  pr-3 rounded-l-md focus:outline-none"
                  placeholder="ต้องการค้นหา..."
                />
                <button className="bg-[#a5522a] border border-[#b96800] text-white px-8 rounded-r-md hover:bg-transparent hover:text-[#c94413] font-bold transition">
                  ค้นหา
                </button>
              </div>
            </div>
            <div className="lg:mx-10">
              <div className="space-x-8 justify-evenly flex mt-3">
                <Link
                  href={"/checkuot"}
                  className="relative text-center text-gray-700 hover:text-[#c94413] transition my-auto"
                >
                  <div className="text-2xl flex justify-center lg:text-4xl">
                    <FaShoppingBasket />
                  </div>
                  <div className="text-l leading-3">ตะกร้า</div>
                  <div className="absolute  inset-0 -right-2 -top-2 w-auto h-5 px-2  rounded-full flex items-center justify-center bg-[#a5522a] text-white text-3xl lg:w-5 lg:h-5 lg:-right-2 lg:py-2">
                    {cartLength}
                  </div>
                </Link>

                {session ? (
                  <Link href={"/profile"} className="lg:mx-10">
                    <div className="space-x-2 flex items-center">
                      <img
                        className="w-8 h-8 rounded-full mx-auto cursor-pointer"
                        src={session?.user.image}
                      />
                      <span className="cursor-pointer">
                        {session?.user?.firstName} {session?.user?.lastName}
                      </span>
                      <button
                        onClick={handleSignOut}
                        className="p-2 bg-[#a5522a] rounded-md text-white "
                      >
                        logout
                      </button>
                    </div>
                  </Link>
                ) : (
                  <Link
                    href={"/login"}
                    className="text-center text-gray-700 hover:text-[#c94413] transition relative"
                  >
                    <div className="text-lg flex justify-center lg:text-2xl">
                      <FaRegUser />
                    </div>
                    <div className=" leading-3 text-2xl">เข้าสู่ระบบ</div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <nav className="mt-2 bg-gray-800">
          {/* Full Display */}
          <div className=" container flex font-fontTh2">
            <div className="px-8 py-4 ml-10 lg:ml-24 bg-[#a5522a] flex items-center cursor-pointer relative group/type">
              <span className="text-white">
                <FaBars />
              </span>
              <span className="ml-2 font-bold text-white">ประเภทสินค้า</span>
              <div className="absolute w-full z-40 left-0 top-full  bg-[#a5522a] rounded-b-lg shadow-md py-3 divide-y divide-white divide-solid  opacity-0 group-hover/type:opacity-100 transition duration-300 invisible group-hover/type:visible">
                {arrSortTypeName?.map((type, index) => (
                  <div
                    key={index}
                    onClick={(e) =>
                      handleClick(e, "/products/category", type?.name)
                    }
                    className="font-bold text-[24px] flex items-center px-6 py-3 hover:bg-red-500 transition relative group/subType"
                  >
                    <span className="ml-6 text-white text-[24px]">
                      {type.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden items-center justify-between flex-grow pl-12 lg:flex font-bold">
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
                  href="/howtoplaceOder"
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
      </header>
    </>
  );
}
