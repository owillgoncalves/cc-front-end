import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import {
  baseLinksAssertions,
  getHeaderBaseLinks,
  getPermanentHeaderElements,
  permanentHeaderAssertions,
  renderHeader,
  textLinksAssertions,
} from "./helpers/__header__";

describe("Header Component", () => {
  it("should render with default props", () => {
    renderHeader();
    const { header, construCodeLogo, navigation } =
      getPermanentHeaderElements();
    permanentHeaderAssertions(header, construCodeLogo, navigation);
    const { videosLink, faqLink, termsLink } = getHeaderBaseLinks(header);
    baseLinksAssertions(videosLink, faqLink, termsLink);
  });
  it("should render with children", () => {
    renderHeader({
      children: <div data-testid="children" />,
    });
    const { header, construCodeLogo, navigation } =
      getPermanentHeaderElements();
    permanentHeaderAssertions(header, construCodeLogo, navigation);
    const { videosLink, faqLink, termsLink } = getHeaderBaseLinks(header);
    baseLinksAssertions(videosLink, faqLink, termsLink);
    expect(screen.getByTestId("children")).toBeVisible();
  });
  it("should render with base links and additional link", () => {
    renderHeader({
      links: [
        {
          label: "Test",
          url: "/test",
          isCurrentlyActive: () => false,
        },
      ],
    });
    const { header, construCodeLogo, navigation } =
      getPermanentHeaderElements();
    permanentHeaderAssertions(header, construCodeLogo, navigation);
    const { videosLink, faqLink, termsLink } = getHeaderBaseLinks(header);
    baseLinksAssertions(videosLink, faqLink, termsLink);
    const testLink = header.getElementsByTagName("a")[4];
    textLinksAssertions(testLink);
  });
  it("should render overriding links", () => {
    renderHeader({
      overrideLinks: true,
      links: [
        {
          label: "Test",
          url: "/test",
          isCurrentlyActive: () => false,
        },
      ],
    });
    const { header, construCodeLogo, navigation } =
      getPermanentHeaderElements();
    permanentHeaderAssertions(header, construCodeLogo, navigation);
    const anchorList = header.getElementsByTagName("a");
    expect(anchorList).toHaveLength(2);
    const [,testLink] = anchorList;
    textLinksAssertions(testLink);
  });
});
