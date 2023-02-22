export default function VideoPlayer ({
  videoId
}: {
  videoId: string
}) {
  return (
    <div data-testid="video-player" className="flex h-full items-center justify-center bg-primary">
        <div className="relative mx-auto aspect-video w-full max-w-[950px] ">
          <iframe
            title="YouTube video player"
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
  )
}