import { Link } from "@remix-run/react";
import playIcon from "../assets/play-icon.png";
import type { VideoProps } from "../types";

export default function VideoLink({
  label,
  small,
  video,
}: {
  label?: string;
  small?: boolean;
  video: Pick<VideoProps, "id" | "title" | "thumb">;
}) {
  return (
    <Link to={`watch/${video.id}`} prefetch="intent" className="flex flex-col">
      <div
        className={`group relative flex h-full w-full ${
          small ? "max-h-[148px] max-w-[264px]" : "max-w-[754px]"
        } flex-col items-center justify-center`}
      >
        <div className="absolute z-10 h-full w-full rounded-xl bg-primary opacity-30 transition-all duration-300 group-hover:opacity-20"></div>
        <div
          className={`absolute z-20 ${
            small ? "`w-10 h-10`" : "h-20 w-20"
          } rounded-full bg-accent shadow transition-all duration-300 group-hover:scale-110`}
        >
          <img
            src={playIcon}
            alt="Reproduzir"
            className="h-full w-full scale-50"
          />
        </div>
        <img
          src={video.thumb}
          alt={video.title}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
      {label ? (
        <p className="mt-1 text-sm font-semibold text-primary-light group-hover:text-primary">
          {label}
        </p>
      ) : null}
    </Link>
  );
}
