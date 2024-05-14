import * as React from "react";
import Subheading from "../ui/Subheading";
import Button from "../ui/Button";
import ParagraphText from "../ui/ParagraphText";
import Table from "../Table";
import { MotionDiv } from "../ui/MotionComponent";

const sectionItem = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function LeaderboardSection() {
  return (
    <section className="min-h-screen flex justify-start items-center flex-wrap">
      <MotionDiv
        className="flex flex-col items-center justify-start gap-8"
        variants={sectionItem}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <div className="flex w-full justify-between items-center">
          <Subheading>LLM Leaderboard</Subheading>
          <Button>Submit your model</Button>
        </div>
        <ParagraphText>
          We evaluate LLMs on key benchmarks using the Eleuther AI, a framework
          to test LLMs on a large number of different evaluation tasks. The
          higher the score, the better the LLM.
        </ParagraphText>
        {/* <Table /> */}
      </MotionDiv>
    </section>
  );
}
