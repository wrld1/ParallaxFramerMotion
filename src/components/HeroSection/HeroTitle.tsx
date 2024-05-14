import * as React from "react";
import { MotionDiv } from "../ui/MotionComponent";
import { twMerge } from "tailwind-merge";
import ParagraphText from "../ui/ParagraphText";
import Button from "../ui/Button";
import GradientLink from "../ui/GradientLink";

type HeroTitleProps = {
  isInView: boolean;
};

export default function HeroTitle({ isInView }: HeroTitleProps) {
  return (
    <MotionDiv className="flex flex-col items-start gap-9" layout>
      <h1
        className={twMerge(
          "text-6xl md:text-9xl font-medium text-transparent bg-clip-text transition-colors pb-3",
          isInView
            ? "bg-gradient-white-text"
            : "bg-gradient-to-r from-gradient-pink via-gradient-orange to-gradient-purple"
        )}
      >
        A new economic primitive for funding decentralized AI
      </h1>
      <ParagraphText>
        We track, rank and pay for the best open source decentralized LLMs to
        compete against OpenAI
      </ParagraphText>
      <div className="flex gap-14 items-center justify-center">
        <Button>Buy Salt AI</Button>
        <GradientLink href="/">Try now</GradientLink>
      </div>
    </MotionDiv>
  );
}
