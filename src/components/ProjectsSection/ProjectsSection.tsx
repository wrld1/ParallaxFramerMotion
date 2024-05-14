"use client";

import Image from "next/image";
import * as React from "react";
import Subheading from "../ui/Subheading";
import { MotionDiv, MotionUl } from "../ui/MotionComponent";

const fadeFromRightVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.2 },
  },
};

const fadeFromBelowVariants = {
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

export default function ProjectsSection() {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <MotionDiv
        className="flex flex-col gap-12 items-center justify-center"
        variants={fadeFromBelowVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Subheading className="text-center">
          Projects integrated into the Arrakis AI Ecosystem
        </Subheading>
        <MotionUl
          className="flex gap-[120px] justify-center items-center flex-wrap md:flex-nowrap"
          variants={fadeFromRightVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <li>
            <Image
              src={"/img/SolanaLogo.png"}
              alt="SolanaLogo"
              width={335}
              height={50}
            />
          </li>
          <li>
            <Image
              src={"/img/ArweaveLogo.png"}
              alt="ArweaveLogo"
              width={420}
              height={100}
            />
          </li>
          <li>
            <Image
              src={"/img/BittensorLogo.png"}
              alt="BittensorLogo"
              width={328}
              height={58}
            />
          </li>
          <li>
            <Image
              src={"/img/RedCircleLogo.png"}
              alt="RedCircleLogo"
              width={102}
              height={102}
            />
          </li>
          <li>
            <Image
              src={"/img/TelegramLogo.png"}
              alt="TelegramLogo"
              width={102}
              height={102}
            />
          </li>
        </MotionUl>
      </MotionDiv>
    </section>
  );
}
