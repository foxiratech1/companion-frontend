import cn from "../utils/cn";
import * as React from "react";
// import { VariantProps, cva } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const ButtonVariant = cva("disabled:opacity-70", {
  variants: {
    theme: {
      dark: "bg-[#FF0000] text-white",
      light: "bg-transparent border border-[#ff0000] text-white",
      secondary: "bg-gray-200 text-black",
      pink: "bg-[#FF536B] text-white",
    },
    thickness: {
      thin: "px-1 py-1 rounded-sm lg:px-1.5",
      moderate: "px-4 lg:px-4 lg:py-3 py-2 rounded",
      thick: "px-6 py-3 rounded-full",
    },
    weight: {
      "400": "font-normal",
      "500": "font-medium",
      "600": "font-semibold",
    },
    rounded: {
      large: "rounded-lg",
      small: "rounded-sm",
      full: "rounded-full",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    theme: "light",
    thickness: "moderate",
    size: "base",
    weight: "400",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: any;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(ButtonVariant(variant), className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
