import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { getCart } from "../store/cart/cartSlice";
import Link from "next/link";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  console.log("status", status)
  useEffect(() => {
    dispatch(getCart(session?.user.id));
  }, [status]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Link href={'https://line.me/ti/p/iOM_0BOlux'}>
        <img src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/2d3970b3-5535-46f4-894f-497d9ec35200/170" className="fixed bottom-0 left-0 p-1" alt="line" />
      </Link>
      <Footer />
    </>
  );
}
