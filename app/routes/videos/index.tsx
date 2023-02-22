import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { find } from "~/resources/videos/api/index.server";
import VideoGrid from "~/resources/videos/components/VideoGrid";
import VideoHero from "~/resources/videos/components/VideoHero";
import getVideoThumbnail from "~/resources/videos/functions/getVideoThumbnail.server";
import type { VideoProps } from "~/resources/videos/types";

export const loader = async () => {
  const videos = await find({
    select: `id,category,title`,
  });
  if (!videos.length) {
    throw new Error("No videos found");
  }
  const hero = {
    id: videos[0].id,
    title: videos[0].title,
    thumb: getVideoThumbnail(videos[0].id, "maxres"),
  };
  const videosByCategory = videos.reduce(
    (acc: Record<string, VideoProps[]>, video) => {
      const category = video.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push({
        ...video,
        thumb: getVideoThumbnail(video.id, "mq"),
      });
      return acc;
    },
    {}
  );
  const categories = Object.keys(videosByCategory);
  return json({
    hero,
    videosByCategory,
    categories,
  });
};

export default function Videos() {
  const { hero, videosByCategory, categories } = useLoaderData<typeof loader>();
  return (
    <>
      <VideoHero hero={hero} />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {categories.map((category) => (
          <VideoGrid
            key={category}
            title={category}
            videos={videosByCategory[category]}
          />
        ))}
      </div>
    </>
  );
}
