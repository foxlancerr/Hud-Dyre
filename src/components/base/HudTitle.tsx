import React from "react";
import clsx from "clsx";

interface IHudTitleProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "normal" | "md" | "bold" | "lg";
  className?: string;
  fontFamily?: "Inter" | "Grotesk";
  children: React.ReactNode;
}

const sizeMap = {
  sm: "text-[20px] leading-[20px]",
  normal: "text-[24px] leading-[30px]",
  md: "text-[65px] leading-[75px]",
  bold: "text-[70px] leading-[80px]",
  lg: "text-[80px] leading-[90px]",
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
}: IHudTitleProps) {
  const Component = as;

  return (
    <Component
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
