export default function getVideoThumbnail(id: string, quality: "hq" | "mq" | "maxres" = "hq") {
  return `https://img.youtube.com/vi/${id}/${quality}default.jpg`;
}