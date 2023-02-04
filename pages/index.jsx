import Head from "next/head";
import React, { useRef } from "react";
import PortfolioShowIndex from "../components/Portfolio/portfolio_showindex";
import Layout from "../Layout/Layout";
// import ShowBlocks from "../components/article/block_showindex";
import Showproducts from "../components/home/showproductype";
import HomeTop from "../components/home/top";

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
      {/* <ShowBlocks/> */}
      <PortfolioShowIndex/>
      </div>

    </>
  );
}
Home.layout = Layout;