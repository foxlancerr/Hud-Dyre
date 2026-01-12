import React from "react";
import clsx from "clsx";

interface IHudTitleProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "normal" | "md" | "bold" | "lg" | "xsm";
  className?: string;
  fontFamily?: "Inter" | "Grotesk";
  children: React.ReactNode;
  css?: any;
}

const sizeMap = {
  xsm: "text-[14px] leading-[20px] sm:text-[16px] sm:leading-[24px] md:text-[18px] md:leading-[26px]",
  sm: "text-[16px] leading-[22px] sm:text-[20px] sm:leading-[24px] md:text-[22px] md:leading-[26px]",
  normal:
    "text-[20px] leading-[26px] sm:text-[24px] sm:leading-[30px] md:text-[28px] md:leading-[36px]",
  md: "text-[28px] leading-[32px] sm:text-[40px] sm:leading-[48px] md:text-[50px] md:leading-[55px]",
  bold: "text-[36px] leading-[44px] sm:text-[50px] sm:leading-[60px] md:text-[70px] md:leading-[80px]",
  lg: "text-[48px] leading-[56px] sm:text-[70px] sm:leading-[80px] md:text-[90px] md:leading-[94px]",
};

const fontFamilyType: Record<
  NonNullable<IHudTitleProps["fontFamily"]>,
  string
> = {
  Inter: "font-inter",
  Grotesk: "font-grotesk",
};

function HudTitle({
  as = "h4",
  size = "normal",
  fontFamily = "Inter",
  className,
  children,
  css,
}: IHudTitleProps) {
  const Component = as;

  return (
    <Component
      style={css}
      className={clsx(
        sizeMap[size],
        fontFamilyType[fontFamily],
        "text-black",
        className
      )}
    >
      {children}
    </Component>
  );
}

export default HudTitle;
