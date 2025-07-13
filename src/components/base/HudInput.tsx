import React from "react";
import clsx from "clsx";
import { Input } from "../ui/input";

interface HudInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  size?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg" | "full" | "none";
  isBorder?: boolean;
}

const sizeMap = {
  sm: "text-sm py-1 px-2",
  md: "text-base py-2 px-3",
  lg: "text-lg py-3 px-4",
};

const radiusMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

function HudInput({
  className,
  size = "md",
  rounded = "none",
  isBorder = false,
  ...props
}: HudInputProps) {
  const classes = clsx(
    "flex w-full focus:outline-none shadow-none border-none outline-none",
    sizeMap[size],
    radiusMap[rounded],
    isBorder && "border border-gray-300",
    className
  );

  return <Input className={classes} {...props} />;
}

export default HudInput;
