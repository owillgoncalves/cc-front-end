import type { VideoProps } from "../types";
import VideoLink from "./VideoLink";

export default function VideoGrid({
  title,
  videos,
}: {
  title: string;
  videos: VideoProps[];
}) {
  return (
    <div>
      <h2 className="relative mt-8 mb-4 inline-block text-2xl font-semibold text-primary">
        {title}
        <span className="absolute bottom-[2px] left-0 -z-10 h-0.5 w-full bg-accent"></span>
      </h2>
      <div className="mb-3 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <div key={video.id} className="group flex cursor-pointer flex-col">
            <VideoLink label={video.title} video={video} small />
          </div>
        ))}
      </div>
    </div>
  );
}
