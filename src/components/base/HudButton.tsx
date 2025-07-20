import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import clsx from "clsx";

interface IHudButtonProps {
  as?: "button" | "link";
  href?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  fontFamily?: "Inter" | "Grotesk";
  children?: React.ReactNode;
  size?: "sm" | "xsm" | "xl" | "lg" | "md" | "normal";
}

const radiusMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

const fontFamilyType = {
  Inter: "font-inter",
  Grotesk: "font-grotesk",
};

const sizeMap = {
  xsm: "text-[14px] leading-[20px] py-2 px-3 md:text-[16px] md:leading-[24px]",
  sm: "text-[16px] leading-[24px] py-2 px-4 md:text-[20px] md:leading-[28px]",
  normal: "text-[18px] leading-[28px] py-3 px-5 md:text-[22px] md:leading-[30px]",
  md: "text-[20px] leading-[30px] py-3 px-6 md:text-[24px] md:leading-[32px]",
  lg: "text-[22px] leading-[32px] py-4 px-7 md:text-[28px] md:leading-[36px]",
  xl: "text-[24px] leading-[36px] py-4 px-8 md:text-[32px] md:leading-[42px]",
};

function HudButton({
  as = "button",
  href,
  rounded = "none",
  className,
  children,
  size = "normal",
  fontFamily = "Inter",
  ...rest
}: IHudButtonProps) {
  const finalClass = clsx(
    radiusMap[rounded],
    sizeMap[size],
    fontFamilyType[fontFamily],
    "bg-black text-white cursor-pointer",
    className
  );

  if (as === "link" && href) {
    return (
      <Link href={href}>
        <Button className={finalClass} {...rest}>
          {children}
        </Button>
      </Link>
    );
  }

  return (
    <Button className={finalClass} {...rest}>
      {children}
    </Button>
  );
}

export default HudButton;
