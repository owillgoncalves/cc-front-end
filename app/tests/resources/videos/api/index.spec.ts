import * as api from "~/resources/videos/api/index.server";
import db from "~/resources/videos/db/index.json";

describe("videos/api", () => {
  describe("find", () => {
    it("returns all videos", async () => {
      const videos = await api.find();
      expect(videos).toHaveLength(db.length);
    });

    it("returns videos with limit", async () => {
      const videos = await api.find({ limit: 1 });
      expect(videos).toHaveLength(1);
    });

    it("returns videos with page", async () => {
      const videos = await api.find({ limit: 7, page: 2 });
      expect(videos).toHaveLength(6);
    });

    it("returns videos with search", async () => {
      const videos = await api.find({ search: "documento" });
      expect(videos).toHaveLength(7);
    });

    it("returns videos with searchBy", async () => {
      const videos = await api.find({ search: "vídeo", searchBy: "description" });
      expect(videos).toHaveLength(10);
    });

    it("returns videos with select", async () => {
      const videos = await api.find({ select: "id,title" });
      expect(videos).toHaveLength(13);
      const firstVideoOnDb = db[0];
      const firstVideoFromApi = videos[0];
      const { id, title } = firstVideoOnDb;
      expect(firstVideoFromApi).toEqual({ id, title });
    });
  });

  describe("get", () => {
    it("returns a video", async () => {
      const video = await api.get("i6JxEFATTHk");
      expect(video).toEqual(db[0]);
    });

    it("returns a video with select", async () => {
      const video = await api.get("i6JxEFATTHk", { select: "id,title" });
      const { id, title } = db[0];
      expect(video).toEqual({ id, title });
    });

    it("throws an error when video not found", async () => {
      await expect(api.get("0")).rejects.toThrow("Video not found");
    });
  });
});
