/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import React from "react";
import { FacebookProvider, EmbeddedPost } from "react-facebook";
import Loading from "../Loading/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

//รอเปลี่ยน เป็นของ บ.
const AppID = "720522252954036";
const AccessToken =
  "EAAKPT6jwqbQBAGF96HHNQZAxe0nSdTCmFVvZBe6HZA3ZCl5fItdyLtTRvQlwyQPiQu2EiMpgtL61ZCL4pDhqGOKkpq1IOSsZBJhZBQZCqTU09ZB6Q0o10zmhtdpGQngqAS33tbwZCqWl4tA0flZAXypeOxkIz3rjAyojSWtV5yie79sDtIAtvlHZAhS7";
const PageId = "103534424506037";
const Limit = "12";

export default function PortfolioShowIndex() {
  const [
    {
      data: facebookFeeds,
      loading: facebookFeedsLoading,
      error: facebookFeedsError,
    },
    getFacebookFeed,
  ] = useAxios({
    url: `https://graph.facebook.com/${PageId}/published_posts?access_token=${AccessToken}&fields=is_published&fields=status_type&limit=${Limit}`,
    method: "GET",
  });

  const posts = facebookFeeds?.data
    ?.filter((postType) => postType.status_type === "added_photos")
    .map((postId) => {
      return postId.id.split("_")[1];
    });

  // return dataPosts.id.split("_")[1];
  console.log(posts);
  if (facebookFeedsError) {
    <div>error</div>;
  }

  return (
    <div className=" container mx-auto text-center font-fontTh2 mt-10">
      <h3 className="text-[24px] md:text-[30px] text-primary mb-5">
        {" "}
        ผลงานของเรา
        </h3>
        <h2 className=" text-[12px]  lg:text-[20px] text-center text-gray-400">
        Portfolio
          </h2>
        <div className="px-6 pb-2  text-right">
          <Link href="/portfolio "  
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary hover:underline  ">
            อ่านเพิ่มเติม
          
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            </Link>
        </div>
 

      <div className="mx-2">
        <Swiper
          className=""
          spaceBetween={30}
          slidesPerView={3}
          modules={[Autoplay]}
          // autoplay={{ delay: 2000 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            // when window width is >= 640px
            300: {
              width: 300,
              slidesPerView: 1,
            },
          }}
        >
          <div className="">
            {facebookFeedsLoading ? (
              <Loading />
            ) : (
              <>
                <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 ">
                  {posts?.map((id, index) => (
                    <div key={index}>
                      <SwiperSlide className=" max-w-sm rounded overflow-hidden mx-auto border bg-white">
                        <FacebookProvider appId={AppID}>
                          <EmbeddedPost
                            href={`https://www.facebook.com/sn4ppy/posts/${id}`}
                            lazy={true}
                          />
                        </FacebookProvider>
                      </SwiperSlide>
                    </div>
                  ))}
                </div>
              </>
            )}{" "}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
