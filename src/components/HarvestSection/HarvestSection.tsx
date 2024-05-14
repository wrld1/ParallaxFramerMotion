import * as React from "react";
import ParagraphText from "../ui/ParagraphText";
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

export default function HarvestSection() {
  return (
    <section className="min-h-screen flex justify-center items-center flex-wrap">
      <MotionDiv
        variants={sectionItem}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <ParagraphText className="text-3xl text-center">
          Join our community and harvest $SALT
        </ParagraphText>
      </MotionDiv>
    </section>
  );
}
