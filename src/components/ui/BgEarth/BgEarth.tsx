"use client";

import { MotionValue, useSpring, useTransform } from "framer-motion";
import * as React from "react";
import { MotionDiv } from "../MotionComponent";
import Image from "next/image";

export interface BgEarthProps {
  scrollProgress: MotionValue<number>;
}

export default function BgEarth({ scrollProgress }: BgEarthProps) {
  const earthHeight = 520;

  const earthY = useTransform(scrollProgress, [0, 1], [earthHeight, 0]);

  return (
    <MotionDiv className="fixed bottom-0 -z-10 w-screen" style={{ y: earthY }}>
      <Image
        src="/img/BgEarth.png"
        alt="Earth on the background"
        width={1920}
        height={520}
        style={{
          width: "auto",
        }}
      />
    </MotionDiv>
  );
}
