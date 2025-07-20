import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface HudLinkProps {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self";
  as?: "a" | "link";
  size?: "sm" | "md" | "lg" | "normal";
  className?: string;
  fontFamily?: "Inter" | "Grotesk";
  underline?: boolean;
  display?: "inline" | "flex" | "block" | "inline-flex";
}

const sizeMap = {
  sm: "text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[15px] lg:leading-[20px]",
  normal:
    "text-[14px] leading-[20px] md:text-[18px] md:leading-[24px] lg:text-[20px] lg:leading-[26px]",
  md: "text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] lg:text-[24px] lg:leading-[30px]",
  lg: "text-[18px] leading-[24px] md:text-[24px] md:leading-[30px] lg:text-[28px] lg:leading-[36px]",
};

const fontFamilyMap = {
  Inter: "font-inter",
  Grotesk: "font-grotesk",
};

function HudLink({
  href,
  children,
  target = "_self",
  as = "a",
  size = "md",
  fontFamily = "Inter",
  className,
  underline = false,
  display = "block",
}: HudLinkProps) {
  const classes = clsx(
    fontFamilyMap[fontFamily],
    sizeMap[size],
    display,
    `text-black ${underline ? "underline" : ""}`,
    className
  );

  if (as === "link") {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {children}
    </a>
  );
}

export default HudLink;
