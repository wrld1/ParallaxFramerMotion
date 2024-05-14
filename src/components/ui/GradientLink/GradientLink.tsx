import Link, { LinkProps } from "next/link";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface GradientLink extends LinkProps {
  size?: "big" | "small";
  children: React.ReactNode;
}

export default function GradientLink({
  size = "big",
  children,
  href,
  ...rest
}: GradientLink) {
  return (
    <Link
      href={href}
      className={twMerge(
        "text-lg md:text-2xl p-1 font-medium text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-gradient-pink via-gradient-orange to-gradient-purple transition-colors",
        size === "small" && "text-base md:text-l"
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
