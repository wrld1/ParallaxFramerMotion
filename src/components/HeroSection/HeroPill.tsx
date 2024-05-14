import * as React from "react";
import ParagraphText from "../ui/ParagraphText";
import { Variants } from "framer-motion";
import { MotionDiv } from "../ui/MotionComponent";

export interface HeroPillProps {
  pillName: string;
  value: string;
  variants: Variants;
}

export default function HeroPill({ pillName, value, variants }: HeroPillProps) {
  return (
    <MotionDiv
      variants={variants}
      className="flex flex-col items-center justify-center gap-5 py-4 px-8 md:p-8 flex-grow text-center rounded-full bg-gradient-background-pill"
    >
      <p className="text-4xl md:text-6xl font-bold text-white">{value}</p>
      <ParagraphText>{pillName}</ParagraphText>
    </MotionDiv>
  );
}
