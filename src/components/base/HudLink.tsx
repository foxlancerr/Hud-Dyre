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
  sm: "text-[15px] leading-[15px]",
  normal: "text-[20px] leading-[24px]",
  md: "text-[24px] leading-[28px]",
  lg: "text-[28px] leading-[32px]",
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
