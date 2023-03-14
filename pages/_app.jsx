import { DefaultSeo } from "next-seo";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Provider, useDispatch } from "react-redux";
import Layout from "../Layout/Layout";
import "../styles/globals.css";
import { store } from "/store/store";
import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {


  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <DefaultSeo
            title="ร้านช่างพองอิฐประสาน ขายอิฐประสาน จัดสวน สร้างบ้าน ราคาโรงงาน"
            description="ร้านช่างพองอิฐประสาน แหล่งรวมอิฐประสานหลากหลายรูปแบบ รวมทั้งสินค้าอื่น ๆ อาทิ หินตกแต่งสวน แผ่นทางเท้า อุปกรณ์และของตกแต่งบ้าน และสินค้าอื่น ๆ อีกมากมาย ให้เลือกสรรค์"
            canonical="#"
            openGraph={{
              url: "#",
              title:
                "ร้านช่างพองอิฐประสาน ขายอิฐประสาน จัดสวน สร้างบ้าน ราคาโรงงาน",
              description:
                "ร้านช่างพองอิฐประสาน แหล่งรวมอิฐประสานหลากหลายรูปแบบ รวมทั้งสินค้าอื่น ๆ อาทิ หินตกแต่งสวน แผ่นทางเท้า อุปกรณ์และของตกแต่งบ้าน และสินค้าอื่น ๆ อีกมากมาย ให้เลือกสรรค์",
              images: [
                {
                  url: "",
                  width: 800,
                  height: 600,
                  alt: "Dream Block",
                  type: "image/jpeg",
                },
                {
                  url: "#",
                  width: 900,
                  height: 800,
                  alt: "ช่างพองอิฐประสาน",
                  type: "image/jpeg",
                },
                { url: "#" },
                { url: "#" },
              ],
              siteName: "SiteName",
            }}
            twitter={{
              handle: "@handle",
              site: "@site",
              cardType: "summary_large_image",
            }}
            facebook={{
              appId: "12345 67890",
              title:
                "ร้านช่างพองอิฐประสาน ขายอิฐประสาน จัดสวน สร้างบ้าน ราคาโรงงาน",
              description:
                "ร้านช่างพองอิฐประสาน แหล่งรวมอิฐประสานหลากหลายรูปแบบ รวมทั้งสินค้าอื่น ๆ อาทิ หินตกแต่งสวน แผ่นทางเท้า อุปกรณ์และของตกแต่งบ้าน และสินค้าอื่น ๆ อีกมากมาย ให้เลือกสรรค์",
              images: [
                {
                  url: "#",
                  width: 800,
                  height: 600,
                  alt: "Pig Jungle",
                  type: "image/jpeg",
                },
                {
                  url: "#",
                  width: 900,
                  height: 800,
                  alt: "กัญชาหมูป่า",
                  type: "image/jpeg",
                },
                { url: "#" },
                { url: "#" },
              ],
              siteName: "SiteName",
            }}
          />
          <GoogleAnalytics trackPageViews />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
