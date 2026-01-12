import React from "react";
import clsx from "clsx"; // optional, but useful for conditional classnames

interface IHudTextProps {
  size?: "sm" | "md" | "lg" | "bold" | "normal";
  className?: string;
  children: React.ReactNode;
  as?: "span" | "p";
}

const sizeMap = {
  sm: "text-[8px] leading-[14px] md:text-xs md:leading-[16px]",
  normal: "text-xs leading-[18px] md:text-sm md:leading-[20px]",
  bold: "text-sm font-semibold leading-[20px] md:text-base md:leading-[24px]",
  md: "text-base leading-[22px] md:text-lg md:leading-[28px]",
  lg: "text-lg leading-[26px] md:text-xl md:leading-[32px]",
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
