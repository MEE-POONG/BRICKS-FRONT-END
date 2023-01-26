import Head from "next/head";
import React, { useRef } from "react";
import HomeTop from "./home/top";

export default function Home() {

  return (
    <>
    <Head>
    <title>ช่างทอง</title>
    </Head>
    <div className=" container mx-auto">
      <HomeTop/>
    </div>

    </>
  );
}
