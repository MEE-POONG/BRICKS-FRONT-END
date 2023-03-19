import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { getCart } from "../store/cart/cartSlice";

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
      <img src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f186c279-c37b-424e-185a-e35747071c00/150" className="fixed bottom-0 left-0" alt="line" />
      <Footer />
    </>
  );
}
