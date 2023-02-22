import VideoLink from "./VideoLink";
import heroBackground from "../assets/hero-background.png";
import type { VideoProps } from "../types";

export default function VideoHero({
  hero,
}: {
  hero: Pick<VideoProps, "id" | "title" | "thumb">;
}) {
  return (
    <div className="relative left-0 flex h-full w-full flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <img src={heroBackground} alt="" className="absolute w-full h-full object-cover -z-10" />
      <h1 className="text-6xl font-semibold text-primary">Vídeos tutoriais</h1>
      <p className="mt-4 mb-8 w-full max-w-[558px] text-center text-xl text-primary-light">
        Uma coleção de vídeos para lhe ajudar a iniciar, configurar e gerenciar
        suas obras na ConstruCode
      </p>
      <VideoLink video={hero} />
    </div>
  );
}
