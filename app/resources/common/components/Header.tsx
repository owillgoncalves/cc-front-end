import { Link, useLocation } from "@remix-run/react";
import logo from "../assets/logo.svg";
import { links as baseLinks } from "../config/header";
import type { HeaderProps } from "../types";

export default function Header({
  children,
  links,
  overrideLinks,
}: HeaderProps) {
  const { pathname } = useLocation();
  const allLinks = [...baseLinks, ...(links?.length ? links : [])];
  const linksToRender = overrideLinks ? links : allLinks;
  return (
    <header className="flex h-20 items-center border-b-[1px] border-primary bg-secondary lg:h-24">
      <div className="container mx-auto my-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <img src={logo} alt="ConstruCode" />
        <nav className="flex items-center justify-end space-x-16">
          {linksToRender?.map((link) => (
            <Link
              key={link.url}
              to={link.url}
              className={`
              border-b-2 border-transparent px-1 text-primary-light hover:border-primary hover:text-primary ${
                link.isCurrentlyActive(pathname)
                  ? "!border-primary !text-primary"
                  : ""
              }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </header>
  );
}
