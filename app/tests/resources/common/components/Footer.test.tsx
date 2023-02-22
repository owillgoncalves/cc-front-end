import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "~/resources/common/components/Footer";

describe("Footer Component", () => {
  it("should render correctly", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo", { name: "" });
    const [construCodeLogo, trutecLogo] = footer.getElementsByTagName("img");
    const [paragraph] = footer.getElementsByTagName("p");
    expect(footer).toBeInTheDocument();
    expect(construCodeLogo).toBeVisible();
    expect(construCodeLogo).toHaveAttribute("alt", "ConstruCode");
    expect(trutecLogo).toBeVisible();
    expect(trutecLogo).toHaveAttribute("alt", "Uma Solução Trutec by Vedacit");
    expect(paragraph).toBeVisible();
    expect(paragraph).toHaveTextContent(
      "ConstruCode - Todos os direitos reservados"
    );
  });
});
