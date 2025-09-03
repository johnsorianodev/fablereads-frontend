import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type Variant = "outlined" | "default" | "primary" | "secondary" | "transparent";
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = "transparent", ...props }, ref) => {
    const variantClass: Record<Variant, string> = {
      default: "bg-gray-200 text-black",
      outlined: "border border-white border-1 rounded-md px-2.5 py-1.5",
      primary: "bg-blue-500 text-white",
      secondary:
        "bg-[radial-gradient(circle_at_center,_#F6921E,_#D68031)] hover:bg-[#D68031] text-white rounded-md px-2.5 py-1.5",
      transparent: "bg-transparent",
    };
    return (
      <button
        ref={ref}
        {...props}
        className={twMerge(
          clsx(variantClass[variant], "shadow-2xl cursor-pointer"),
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
