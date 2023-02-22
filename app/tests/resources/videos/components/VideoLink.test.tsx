import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VideoLink from "~/resources/videos/components/VideoLink";
import { FakeRouter } from "../../common/components/helpers/__common__";

describe("VideoLink Component", () => {
  it("should render correctly", () => {
    render(
      <FakeRouter>
        <VideoLink
          label="Título 1"
          video={{
            id: "1",
            title: "Título 1",
            thumb: "https://i.ytimg.com/vi/1/hqdefault.jpg",
          }}
        />
      </FakeRouter>
    );
    const link = screen.getByRole("link", {
      name: "Reproduzir Título 1 Título 1",
    });
    const playIcon = screen.getByRole("img", {
      name: "Reproduzir",
    });
    const thumb = screen.getByRole("img", {
      name: "Título 1",
    });
    expect(link).toBeInTheDocument();
    expect(playIcon).toBeInTheDocument();
    expect(thumb).toBeInTheDocument();
  });
});
