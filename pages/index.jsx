import Head from "next/head";
import React, { useRef } from "react";
import Layout from "../Layout/Layout";
import Showproducts from "./home/showproductype";
import HomeTop from "./home/top";

export default function Home() {

  return (
    <>
      <Head>
        <title>ช่างพองอิฐประสาน</title>
          <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <HomeTop/>
      </div>
      <div>
      <Showproducts/>
      </div>

    </>
  );
}
Home.layout = Layout;