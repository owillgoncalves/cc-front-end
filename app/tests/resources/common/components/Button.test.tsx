import "@testing-library/jest-dom";
import { assertButtonVariant, renderButton } from "./helpers/__button__";

describe("Button Component", () => {
  it("should render with default props", () => {
    renderButton();
    assertButtonVariant("py-2 px-4 text-xl h-12 rounded-md bg-primary text-white");
  });
  it("should render with lighter variant", () => {
    renderButton({ variant: "lighter" });
    assertButtonVariant("py-2 px-4 text-xl h-12 rounded-md bg-primary-lighter text-primary");
  });
  it("should render with secondary variant", () => {
    renderButton({ variant: "secondary" });
    assertButtonVariant("py-2 px-4 text-xl h-12 rounded-md bg-secondary-dark text-primary");
  });
  it("should render with small size", () => {
    renderButton({ size: "small" });
    assertButtonVariant("py-1.5 px-3 text-base h-9 rounded bg-primary text-white");
  });
  it("should render with large size", () => {
    renderButton({ size: "large" });
    assertButtonVariant("py-2.5 px-5 text-2xl h-14 rounded-lg bg-primary text-white");
  });
});
