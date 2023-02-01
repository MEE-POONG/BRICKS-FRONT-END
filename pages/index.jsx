import Head from "next/head";
import React, { useRef } from "react";
import Layout from "../Layout/Layout";
import ShowBlocks from "./block";
import Showproducts from "./home/showproductype";
import HomeTop from "./home/top";

export default function Home() {

  return (
    <>
      <Head>
        <title>ช่างพองอิฐประสาน</title>
          <link rel="icon" href="/logo1.png" />
      </Head>
      <div>
        <HomeTop/>
      </div>
      <div>
      <Showproducts/>
      </div>
      <div>
      <ShowBlocks/>
      </div>

    </>
  );
}
Home.layout = Layout;