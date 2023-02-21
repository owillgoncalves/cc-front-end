import { sizeClasses, variantClasses } from "../config/button";
import type { ButtonProps } from "../types";

export default function Button({
  children,
  className,
  size = "medium",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
