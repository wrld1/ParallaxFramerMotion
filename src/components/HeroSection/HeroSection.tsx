"use client";

import * as React from "react";
import { useRef } from "react";
import Button from "../ui/Button";
import GradientLink from "../ui/GradientLink";
import ParagraphText from "../ui/ParagraphText";
import { AnimatePresence, LayoutGroup, useInView } from "framer-motion";
import HeroPill from "./HeroPill";
import { MotionDiv } from "../ui/MotionComponent";
import { twMerge } from "tailwind-merge";
import HeroTitle from "./HeroTitle";

const pillVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export default function HeroSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section className="flex flex-col gap-16 min-h-[100dvh] justify-center relative pt-20 md:pt-0 ">
        <LayoutGroup>
          <HeroTitle isInView={isInView} />
          <AnimatePresence initial={true}>
            {!!isInView && (
              <MotionDiv
                key={"pillsContainer"}
                layout
                className="flex gap-8 items-center justify-center flex-wrap"
                variants={pillVariants}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
              >
                <HeroPill
                  pillName={"LLM models"}
                  value={"1,873"}
                  variants={pillVariants}
                />
                <HeroPill
                  pillName={"Paid to data scientists"}
                  value={"$326,734"}
                  variants={pillVariants}
                />
                <HeroPill
                  pillName={"Developers"}
                  value={"6,557"}
                  variants={pillVariants}
                />
              </MotionDiv>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </section>
      <div className="h-2 mt-10" ref={ref}></div>
    </>
  );
}
