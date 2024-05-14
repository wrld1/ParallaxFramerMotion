import { LinkProps } from "next/link";
import Link from "next/link";
import * as React from "react";

export interface FooterLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function FooterLink({
  children,
  href,
  ...rest
}: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-xs text-[#e4e3e3] hover:text-white backdrop-blur-sm p-1 md:p-0 md:backdrop-blur-none p-1"
      {...rest}
    >
      {children}
    </Link>
  );
}
