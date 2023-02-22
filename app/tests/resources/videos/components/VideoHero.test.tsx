import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VideoHero from "~/resources/videos/components/VideoHero";
import { FakeRouter } from "../../common/components/helpers/__common__";

describe("VideoHero Component", () => {
  it("should render correctly", () => {
    render(
      <FakeRouter>
        <VideoHero
          hero={{
            id: "1",
            title: "Título 1",
            thumb: "https://i.ytimg.com/vi/1/hqdefault.jpg",
          }}
        />
      </FakeRouter>
    );
    const background = screen.getByRole("img", {
      name: "",
    });
    const playIcon = screen.getByRole("img", {
      name: "Reproduzir",
    });
    const thumb = screen.getByRole("img", {
      name: "Título 1",
    });
    const heading = screen.getByRole("heading", {
      name: "Vídeos tutoriais",
    });
    const link = screen.getByRole("link", {
      name: "Reproduzir Título 1",
    });
    expect(background).toBeInTheDocument();
    expect(playIcon).toBeInTheDocument();
    expect(thumb).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
