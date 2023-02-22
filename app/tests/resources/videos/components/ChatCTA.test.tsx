import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatCTA from "~/resources/videos/components/ChatCTA";

describe("ChatCTA Component", () => {
  it("should render correctly", () => {
    render(<ChatCTA />);
    const heading = screen.getByRole("heading", { name: "Ainda ficou alguma dúvida?" });
    const button = screen.getByRole("button", { name: "Suporte via chat" });
    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
