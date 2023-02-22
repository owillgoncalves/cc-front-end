import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VideoPlayer from "~/resources/videos/components/VideoPlayer";
import db from "~/resources/videos/db/index.json";

describe("VideoPlayer Component", () => {
  it("should render correctly", () => {
    render(
      <VideoPlayer videoId={db[0].id} />
    );
    const [container] = screen.getAllByTestId("video-player");
    const [iframe] = container.getElementsByTagName("iframe");
    expect(container).toBeInTheDocument();
    expect(iframe).toBeInTheDocument();
    expect(iframe.src).toContain(db[0].id);
  });
});
