import useAxios from "axios-hooks";
import React from "react";
import { FacebookProvider, EmbeddedPost } from "react-facebook";
import Loading from "../Loading/Loading";

//รอเปลี่ยน เป็นของ บ.
const AppID = "720522252954036";
const AccessToken =
  "";
const PageId = "103534424506037";
const Limit = "12";

export default function FacebookPost() {
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
    ?.filter(
      (postType) =>
        postType.status_type === "added_photos"
    )
    .map((postId) => {
      return postId.id.split("_")[1];
    });

  // return dataPosts.id.split("_")[1];
  console.log(posts);
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
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {posts?.map((id, index) => (
                <div key={index}>
                  <FacebookProvider appId={AppID}>
                    <EmbeddedPost
                      href={`https://www.facebook.com/sn4ppy/posts/${id}`}
                      lazy={true}
                    />
                  </FacebookProvider>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
