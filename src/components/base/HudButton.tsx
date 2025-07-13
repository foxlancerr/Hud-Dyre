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

function HudButton({
  as = "button",
  href,
  rounded = "none",
  className,
  children,
  fontFamily = "Inter",
  ...rest
}: IHudButtonProps) {
  const sharedClass = clsx(
    radiusMap[rounded],
    fontFamilyType[fontFamily!],
    "   bg-black py-[10px] px-[20px] text-[16px] cursor-pointer",
    className
  );

  if (as === "link" && href) {
    return (
      <Link href={href} className={sharedClass}>
        <Button {...rest}>{children}</Button>
      </Link>
    );
  }

  return (
    <Button className={sharedClass} {...rest}>
      {children}
    </Button>
  );
}

export default HudButton;
