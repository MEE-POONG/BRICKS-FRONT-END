import useAxios from "axios-hooks";
import React from "react";
import { FacebookEmbed } from "react-social-media-embed";
import Loading from "../Loading/Loading";

const AccessToken =
  "EAAKPT6jwqbQBAGSKgvB6U7iM668P8emqvY6mtrxlHHZB0iNMW2DnEy2xaBMzir2lyeMw9kAtibHIdZB2T1HvRfQ3CfzYITZAvYxvgbyhmKTc3VUA5KWKtzc1oHGODkPI1d7g4NtWoHxNK5ZBJrQ87KzhxTjmptXH2quZCaON8rkOxTJTj09fcSE5XFmUNX4PlykpK6gAQHw6qsg7TRweZA";
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
        postType.status_type === "added_photos" ||
        postType.status_type === "added_video"
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
                <div key={index} className="mx-auto">
                  <FacebookEmbed
                    url={`https://www.facebook.com/SpiRiTzeSport/posts/${id}`}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
