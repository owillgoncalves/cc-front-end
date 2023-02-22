import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { get } from "~/resources/videos/api/index.server";
import getVideoThumbnail from "~/resources/videos/functions/getVideoThumbnail.server";
import { Link, useLoaderData } from "@remix-run/react";
import Button from "~/resources/common/components/Button";
import Copy from "~/resources/common/icons/Copy";
import Back from "~/resources/common/icons/Back";
import VideoPlayer from "~/resources/videos/components/VideoPlayer";

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  if (!id) {
    throw new Error("No video id provided");
  }
  const video = await get(id);
  return json({
    ...video,
    thumb: getVideoThumbnail(video.id, "maxres"),
  });
};

export default function VideoWatch() {
  const video = useLoaderData();
  const copyLinkToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  };
  return (
    <>
      <VideoPlayer videoId={video.id} />
      <div className="container mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex w-full gap-5">
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold text-primary">
              {video.title}
            </h1>
            <p className="mt-2 text-primary-light">{video.description}</p>
          </div>
          <div className="ml-auto flex gap-4">
            <Link to="/videos">
              <Button variant="secondary" size="small">
                <Back />
                Voltar
              </Button>
            </Link>
            <Button
              variant="secondary"
              size="small"
              onClick={copyLinkToClipboard}
            >
              <Copy />
              Copiar Link
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
