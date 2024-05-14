"use client";

import useWindowDimensions from "@/utils/useWindowDimensions";
import { MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import { MotionDiv } from "../MotionComponent";

interface BgPlanetProps {
  scrollProgress: MotionValue<number>;
}

export default function BgPlanet({ scrollProgress }: BgPlanetProps) {
  const viewportHeight = useWindowDimensions();

  const planetHeight = 500;

  const initialTranslateY = viewportHeight - planetHeight;

  const planetY = useTransform(
    scrollProgress,
    [0, 1],
    [0, -initialTranslateY - planetHeight]
  );

  return (
    <MotionDiv className="fixed right-0 bottom-0 -z-10" style={{ y: planetY }}>
      <Image
        src="/img/BgPlanet.png"
        alt="Planet on background"
        width={430}
        height={500}
        style={{
          width: "auto",
        }}
        priority
      />
    </MotionDiv>
  );
}
