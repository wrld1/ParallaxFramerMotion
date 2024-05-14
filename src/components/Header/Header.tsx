"use client";

import * as React from "react";
import Button from "../ui/Button";
import GradientLink from "../ui/GradientLink";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MotionLi, MotionUl } from "../ui/MotionComponent";
import { useState } from "react";

const navVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-4rem" },
};

const linkVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-2rem" },
};

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  const { scrollY } = useScroll();

  function update(latest: number, prev: number): void {
    if (latest < prev) {
      setHidden(false);
      console.log("visible");
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
      console.log("hidden");
    }
  }

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });

  return (
    <nav className="w-full fixed left-0 z-20 flex items-center justify-center mx-auto">
      <MotionUl
        className="mx-auto flex items-center justify-center gap-12"
        variants={navVariants}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 0.6,
          staggerChildren: 0.15,
        }}
      >
        <MotionLi
          className="backdrop-blur-md py-2 px-3 md:p-0 rounded-full md:backdrop-blur-none"
          variants={linkVariants}
          transition={{
            ease: [0.1, 0.25, 0.3, 1],
            duration: 0.4,
          }}
        >
          <GradientLink href="/" size="small">
            How It Works
          </GradientLink>
        </MotionLi>
        <MotionLi
          variants={linkVariants}
          transition={{
            ease: [0.1, 0.25, 0.3, 1],
            duration: 0.4,
          }}
        >
          <Button size="small">Buy Salt AI</Button>
        </MotionLi>
      </MotionUl>
    </nav>
  );
}
function setPrevScroll(latest: number) {
  throw new Error("Function not implemented.");
}
