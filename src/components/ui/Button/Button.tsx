import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  size?: "big" | "small";
}

export default function Button({
  size = "big",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className="inline-block rounded-full bg-gradient-to-r from-gradient-pink via-gradient-orange to-gradient-purple p-[2px] "
      {...rest}
    >
      <div
        className={twMerge(
          "py-3 px-6 md:py-6 md:px-12 flex h-full w-full rounded-full items-center justify-center bg-[#020409] hover:bg-transparent transition-colors",
          size === "small" && "py-2 px-4 md:py-3 md:px-8"
        )}
      >
        <span
          className={twMerge(
            "inline-block text-white font-medium text-lg md:text-2xl",
            size === "small" && "text-base md:text-lg"
          )}
        >
          {children}
        </span>
      </div>
    </button>
  );
}
