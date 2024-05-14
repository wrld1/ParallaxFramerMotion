import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface SubheadingProps extends React.ComponentPropsWithoutRef<"h2"> {}

export default function Subheading({
  children,
  className,
  ...rest
}: SubheadingProps) {
  return (
    <h2
      className={twMerge(
        "font-medium text-5xl md:text-6xl text-white",
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}
