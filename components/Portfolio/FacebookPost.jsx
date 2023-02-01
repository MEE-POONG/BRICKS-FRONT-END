import useAxios from "axios-hooks";
import React from "react";
import { FacebookProvider, EmbeddedPost } from "react-facebook";
import Loading from "../Loading/Loading";

//รอเปลี่ยน เป็นของ บ.
const AppID = "720522252954036";
const AccessToken =
  "EAAKPT6jwqbQBADQgSrd8s16G0WMCZACcMFUjkY3EipEAAKPT6jwqbQBAP94Uxb0jl9Pkvu8ZCLMBu4A5GEspA34WnFM58tdOs7Egnf6oGsPYbz8b5gn8pisAmB29xZBiX2fYR7qzDtcPvkXqO0nUYP6g9kNeFP3HZCYfxgZBjOGqNKhWW6GWJX0EBALBECRZAMxERqd8fM1ZA3xmQJw2DidZB6aUZBKZAuIx7czERBwhTenTsc1zjvZAVzngdXJW3yIjZCyhA8DSVtQXDPYe2Y4nkzT1A8wxM5kVoToGZBsvbyYY2NVqcdtJw93rHNi3gPZAmYBLLdYbjomT9QTyo7MMBZCkyYfvoFplXFGja2WBPhJAaE5VG9jWhwdhmTmB4xRMx4McJen4UeZCJ";
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
