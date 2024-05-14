"use client";

import * as React from "react";
import { useRef } from "react";
import HeroSection from "../HeroSection";
import ProjectsSection from "../ProjectsSection";
import CrowdSourcingSection from "../CrowdSourcingSection";
import LeaderboardSection from "../LeaderboardSection";
import { useScroll } from "framer-motion";
import dynamic from "next/dynamic";
import JoinUsSection from "../JoinUsSection";
import HarvestSection from "../HarvestSection";

const DynamicBgPlanet = dynamic(() => import("../ui/BgPlanet"), {
  ssr: false,
});

const DynamicBgEarth = dynamic(() => import("../ui/BgEarth"), {
  ssr: false,
});

export interface MainContentProps {}

export default function MainContent() {
  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: mainScrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: footerScrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div
        ref={mainRef}
        className="flex flex-col items-center justify-center relative"
      >
        <DynamicBgPlanet scrollProgress={mainScrollYProgress} />
        <HeroSection />
        <ProjectsSection />
        <CrowdSourcingSection />
        <LeaderboardSection />
      </div>
      <div
        ref={footerRef}
        className="flex flex-col items-center justify-center relative"
      >
        <DynamicBgEarth scrollProgress={footerScrollYProgress} />
        <JoinUsSection />
        <HarvestSection />
      </div>
    </>
  );
}
