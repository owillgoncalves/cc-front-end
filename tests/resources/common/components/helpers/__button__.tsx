import { render, screen } from "@testing-library/react";
import Button from "~/resources/common/components/Button";
import type { ButtonProps } from "~/resources/common/types";

export function renderButton (props?: Omit<ButtonProps, "children">) {
  return render(<Button {...props}>Rótulo</Button>);
}

export function assertButtonVariant(className: string) {
  const button = screen.getByRole("button", { name: /Rótulo/i });
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass(className);
}