import * as React from "react";
import Subheading from "../ui/Subheading";
import ParagraphText from "../ui/ParagraphText";
import Image from "next/image";
import { MotionDiv } from "../ui/MotionComponent";
import Link from "next/link";

export interface IJoinUsSectionProps {}

const container = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.5 },
  },
};

const sectionItem = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const moon = {
  initial: { opacity: 0, scale: 0.3 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.7,
      ease: [0, 0.71, 0.5, 1.01],
    },
  },
};

export default function JoinUsSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row gap-4 md:gap-0 justify-center items-center">
      <MotionDiv
        className="flex flex-col gap-8 md:w-2/3 text-center md:text-start"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Subheading>Join our community</Subheading>
        <ParagraphText>
          Join us on our mission to to the moon & revolutionize open source AI
          development so that we can build a permissionless, democratized, and
          decentralized AI. Let the fate of AI be in our hands and not that of
          big tech companies.
        </ParagraphText>
        <MotionDiv
          className="flex gap-8 md:justify-start justify-center"
          variants={sectionItem}
        >
          <Link href="/">
            <Image
              src="/img/TelegramLogo.png"
              alt="Telegram"
              width={64}
              height={64}
              style={{ height: "auto" }}
            />
          </Link>
          <Link href="/">
            <Image
              src="/img/TwitterLogo.png"
              alt="Twitter"
              width={64}
              height={64}
              style={{ height: "auto" }}
            />
          </Link>
        </MotionDiv>
      </MotionDiv>
      <MotionDiv
        variants={moon}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Image
          src="/img/Moon.png"
          alt="Telegram"
          width={484}
          height={484}
          style={{ height: "auto" }}
        />
      </MotionDiv>
    </section>
  );
}
