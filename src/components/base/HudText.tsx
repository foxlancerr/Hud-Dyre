import React from "react";
import clsx from "clsx"; // optional, but useful for conditional classnames

interface IHudTextProps {
  size?: "sm" | "md" | "lg" | "bold" | "normal";
  className?: string;
  children: React.ReactNode;
  as?: "span" | "p";
}

const sizeMap = {
  sm: "text-[8px] leading-[12px]",
  normal: "text-[12px] leading-[18px]",
  bold: "text-[16px] leading-[24px]",
  md: "text-[20px] leading-[28px]",
  lg: "text-[24px] leading-[32px]",
};

function HudText({
  size = "normal",
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
      <span className={clsx("font-inter", sizeMap[size], className)}>
        {children}
      </span>
    );
  }
}

export default HudText;
