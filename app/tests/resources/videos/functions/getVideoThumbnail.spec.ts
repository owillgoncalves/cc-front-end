import getVideoThumbnail from "~/resources/videos/functions/getVideoThumbnail.server";

describe("videos/functions/getVideoThumbnail", () => {
  it("returns a thumbnail url with the default quality", () => {
    const thumbnail = getVideoThumbnail("i6JxEFATTHk");
    expect(thumbnail).toBe("https://img.youtube.com/vi/i6JxEFATTHk/hqdefault.jpg");
  });
  it("returns a thumbnail url with the specified mq quality", () => {
    const thumbnail = getVideoThumbnail("i6JxEFATTHk", "mq");
    expect(thumbnail).toBe("https://img.youtube.com/vi/i6JxEFATTHk/mqdefault.jpg");
  });
  it("returns a thumbnail url with the specified maxres quality", () => {
    const thumbnail = getVideoThumbnail("i6JxEFATTHk", "maxres");
    expect(thumbnail).toBe("https://img.youtube.com/vi/i6JxEFATTHk/maxresdefault.jpg");
  })
});