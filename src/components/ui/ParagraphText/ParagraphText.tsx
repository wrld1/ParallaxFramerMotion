import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface ParagraphTextProps
  extends React.ComponentPropsWithoutRef<"p"> {}

export default function ParagraphText({
  children,
  className,
  ...rest
}: ParagraphTextProps) {
  return (
    <p
      className={twMerge(
        "text-white text-base md:text-2xl font-normal text-balance w-full",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
}
