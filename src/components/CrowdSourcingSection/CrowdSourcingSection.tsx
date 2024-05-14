"use client";

import * as React from "react";
import Subheading from "../ui/Subheading";
import Button from "../ui/Button";
import ParagraphText from "../ui/ParagraphText";
import { MotionDiv } from "../ui/MotionComponent";

const container = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const sectionItem = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function CrowdSourcingSection() {
  return (
    <section className="min-h-screen flex justify-start items-center">
      <MotionDiv
        className="flex flex-col gap-8 md:w-2/3"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Subheading>
          Crowdsourcing our collective intelligence to build the best AI
        </Subheading>
        <MotionDiv variants={sectionItem}>
          <ParagraphText>
            Open source AI has been lagging behind the likes of Google and
            OpenAI by billions of dollars.
          </ParagraphText>
          <br />
          <ParagraphText>
            Salt aims to solve that by rewarding open source developers who
            contribute to the democratization of AI. We run competitions between
            AI models to find and reward the best AI models. As a result, our
            users will be able to access the latest cutting edge AI models.
          </ParagraphText>
        </MotionDiv>
        <MotionDiv
          variants={sectionItem}
          viewport={{
            once: true,
          }}
        >
          <Button>Use The Cutting Edge AI</Button>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}
