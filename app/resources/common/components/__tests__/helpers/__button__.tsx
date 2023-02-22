import { render, screen } from "@testing-library/react";
import type { ButtonProps } from "~/resources/common/types";
import Button from "../../Button";

export function renderButton (props?: Omit<ButtonProps, "children">) {
  return render(<Button {...props}>Rótulo</Button>);
}

export function assertButtonVariant(className: string) {
  const button = screen.getByRole("button", { name: /Rótulo/i });
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass(className);
}