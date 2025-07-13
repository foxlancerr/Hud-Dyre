import React from "react";
import clsx from "clsx"; // optional, but useful for conditional classnames

interface IHudTextProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  as?: "span" | "p";
}

const sizeMap = {
  sm: "text-[15px] leading-[15px]",
  md: "text-[16px] leading-[24px]",
  lg: "text-[18px] leading-[28px]",
};

function HudText({
  size = "md",
  className,
  children,
  as = "p",
}: IHudTextProps) {
  if (as == "p") {
    return (
      <p className={clsx("font-inter", sizeMap[size], className)}>{children}</p>
    );
  } else {
    return (
      <span className={clsx("font-inter", sizeMap[size], className)}>{children}</span>
    );
  }
}

export default HudText;
