import db from "../db/index.json";
import type { VideoWithoutThumbProps } from "../types";

type FindOptions = {
  limit?: number;
  page?: number;
  search?: string;
  searchBy?: "id" | "title" | "description" | "category";
  select?: string;
};

type GetOptions = {
  select: string;
};

export const find = async (
  options?: FindOptions
): Promise<VideoWithoutThumbProps[]> => {
  const videos: VideoWithoutThumbProps[] = db;
  if (!options) return videos;
  const {
    limit = videos.length,
    page = 1,
    search = "",
    searchBy = "title",
    select = "",
  } = options;
  return videos
    .filter((video) => video[searchBy].includes(search))
    .slice((page - 1) * limit, page * limit)
    .map((video) => {
      if (!select) return video;
      const selectKeys = select.split(",");
      const selected = selectKeys.reduce((acc, key) => {
        acc[key as keyof VideoWithoutThumbProps] =
          video[key as keyof VideoWithoutThumbProps];
        return acc;
      }, {} as VideoWithoutThumbProps);
      return selected;
    });
};

export const get = async (
  id: string,
  options?: GetOptions
): Promise<VideoWithoutThumbProps> => {
  const videos: VideoWithoutThumbProps[] = db;
  let video =
    videos.find((video) => video.id === id) || ({} as VideoWithoutThumbProps);
  if (video.id) {
    if (!options) return video;
    const { select } = options;
    const selectKeys = select.split(",");
    const selected = selectKeys.reduce((acc, key) => {
      acc[key as keyof VideoWithoutThumbProps] =
        video[key as keyof VideoWithoutThumbProps];
      return acc;
    }, {} as VideoWithoutThumbProps);
    return selected;
  }
  throw new Error("Video not found");
};
