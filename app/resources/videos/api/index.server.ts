import db from "../db/index.json";

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

export const find = async (options?: FindOptions) => {
  const videos = db;
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
    .map((video: Record<string, string>) => {
      if (!select) return video;
      const selectKeys = select.split(",");
      const selected = selectKeys.reduce(
        (acc: Record<string, string>, key: string) => {
          acc[key] = video[key];
          return acc;
        },
        {}
      );
      return selected;
    });
};

export const get = async (id: string, options?: GetOptions) => {
  const videos = db;
  let video: Record<string, string> =
    videos.find((video) => video.id === id) || {};
  if (video.id) {
    if (!options) return video;
    const { select } = options;
    const selectKeys = select.split(",");
    const selected = selectKeys.reduce(
      (acc: Record<string, string>, key: string) => {
        acc[key] = video[key];
        return acc;
      },
      {}
    );
    return selected;
  }
  throw new Error("Video not found");
};
