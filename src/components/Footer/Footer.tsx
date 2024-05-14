import * as React from "react";
import GradientLink from "../ui/GradientLink";
import Image from "next/image";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center items-center gap-12 border-white border-b-[1px] pb-6">
        <GradientLink href="/" size="small">
          How It Works
        </GradientLink>
        <GradientLink href="/" size="small">
          Buy Salt Ai
        </GradientLink>
      </div>
      <div className="flex justify-between pt-6">
        <div className="flex gap-4 items-center justify-center">
          <Image
            src="/img/TelegramLogo.png"
            alt="Telegram"
            width={36}
            height={36}
            style={{ height: "auto" }}
          />
          <Image
            src="/img/TwitterLogo.png"
            alt="Twitter"
            width={36}
            height={36}
            style={{ height: "auto" }}
          />
        </div>
        <div className="flex gap-8 items-center justify-center">
          <FooterLink href="/">Terms of use</FooterLink>
          <FooterLink href="/">Privacy policy</FooterLink>
          <FooterLink href="/">Cookie policy</FooterLink>
        </div>
      </div>
    </footer>
  );
}
