import { render, screen } from "@testing-library/react";
import Header from "~/resources/common/components/Header";
import type { HeaderProps } from "~/resources/common/types";
import { FakeRouter } from "./__common__";

export function renderHeader(props?: HeaderProps) {
  render(
    <FakeRouter>
      <Header {...props} />
    </FakeRouter>
  );
}

export const getPermanentHeaderElements = () => {
  const header = screen.getByRole("banner", { name: "" });
  const [construCodeLogo] = header.getElementsByTagName("img");
  const [navigation] = header.getElementsByTagName("nav");
  return {
    header,
    construCodeLogo,
    navigation,
  };
};

export const getHeaderBaseLinks = (header: HTMLElement) => {
  const [, videosLink, faqLink, termsLink] = header.getElementsByTagName("a");
  return {
    videosLink,
    faqLink,
    termsLink,
  };
};

export const permanentHeaderAssertions = (
  header: HTMLElement,
  construCodeLogo: HTMLImageElement,
  navigation: HTMLElement
) => {
  expect(header).toBeInTheDocument();
  expect(construCodeLogo).toBeVisible();
  expect(construCodeLogo).toHaveAttribute("alt", "ConstruCode");
  expect(navigation).toBeVisible();
};

export const baseLinksAssertions = (
  videosLink: HTMLAnchorElement,
  faqLink: HTMLAnchorElement,
  termsLink: HTMLAnchorElement
) => {
  expect(videosLink).toBeVisible();
  expect(videosLink).toHaveTextContent("Vídeos");
  expect(faqLink).toBeVisible();
  expect(faqLink).toHaveTextContent("FAQ");
  expect(termsLink).toBeVisible();
  expect(termsLink).toHaveTextContent("Termos");
};

export const textLinksAssertions = (testLink: HTMLAnchorElement) => {
  expect(testLink).toBeVisible();
  expect(testLink).toHaveTextContent("Test");
} 