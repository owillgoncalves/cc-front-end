export type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "lighter" | "secondary";
} & React.ComponentPropsWithoutRef<"button">;

export type LinkProps = {
  label: string;
  url: string;
  isCurrentlyActive: (pathname: string) => boolean;
};

export type HeaderProps = {
  children?: React.ReactNode;
  links?: LinkProps[];
  overrideLinks?: boolean;
};
