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
      className={`flex gap-2 items-center ${sizeClasses[size]} ${variantClasses[variant]} ${className} hover:shadow-lg hover:scale-[1.02] transition-all duration-100 active:scale-[0.98]`}
      {...props}
    >
      {children}
    </button>
  );
}
