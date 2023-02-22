import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VideoGrid from "~/resources/videos/components/VideoGrid";
import { FakeRouter } from "../../common/components/helpers/__common__";

describe("VideoGrid Component", () => {
  it("should render correctly", () => {
    render(
      <FakeRouter>
        <VideoGrid
          title="Título"
          videos={[
            {
              id: "1",
              title: "Título 1",
              thumb: "https://i.ytimg.com/vi/1/hqdefault.jpg",
              description: "Descrição 1",
              category: "Título",
            },
          ]}
        />
      </FakeRouter>
    );
    const heading = screen.getByRole("heading", {
      name: "Título",
    });
    const link = screen.getByRole("link", {
      name: "Reproduzir Título 1 Título 1",
    });
    const playIcon = screen.getByRole("img", {
      name: "Reproduzir",
    });
    const thumb = screen.getByRole("img", {
      name: "Título 1",
    });
    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(playIcon).toBeInTheDocument();
    expect(thumb).toBeInTheDocument();
  });
});
