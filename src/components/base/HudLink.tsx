import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface HudLinkProps {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self";
  as?: "a" | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
  fontFamily?: "Inter" | "Grotesk";
  underline?: boolean;
}

const sizeMap = {
  sm: "text-[15px] leading-[15px]",
  md: "text-[16px] leading-[24px]",
  lg: "text-[18px] leading-[28px]",
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
}: HudLinkProps) {
  const classes = clsx(
    fontFamilyMap[fontFamily],
    sizeMap[size],
    `text-black block ${underline ? "underline" : ""}`,
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
