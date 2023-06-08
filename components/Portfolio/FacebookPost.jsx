import useAxios from "axios-hooks";
import React from "react";
import Loading from "../Loading/Loading";

export default function FacebookPost() {
  //รอเปลี่ยน เป็นของ บ.
  const AppID = process.env.NEXT_PUBLIC_FB_APP_ID;
  const AccessToken = process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN;
  const PageId = process.env.NEXT_PUBLIC_FB_PAGE_ID;
  const Limit = "12";

  console.log("AppID", AppID, "AccessToken", AccessToken, "PageId", PageId);
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

  console.log("facebookpostID", posts);
  if (facebookFeedsError) {
    <div>error</div>;
  }

  return (
    <>
      <div className="min-h-screen p-10 bg-gray-100">
        {facebookFeedsLoading ? (
          <Loading />
        ) : (
          <>
            <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
              {posts?.map((id, index) => (
                <div key={index} className="w-auto">
                  <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/sn4ppy/posts/${id}&show_text=true&appId=${AppID}&width=600`}
                    data-href={`https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/sn4ppy/posts/${id}`}
                    frameborder="0"
                    data-lazy={true}
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="w-full min-h-screen overflow-hidden"
                  ></iframe>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
