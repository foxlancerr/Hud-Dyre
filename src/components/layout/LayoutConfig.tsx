'use client'
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useResponsive } from "@/context/ResponsiveContext";

interface LayoutConfigProps {
  children: React.ReactNode;
}

function LayoutConfig({ children }: LayoutConfigProps) {
  const { EACH_SECTION_PADDING } = useResponsive();
  return (
    <>
      <Header />
      <main
        className="flex-grow mx-auto w-full"
        style={{
          paddingBottom: EACH_SECTION_PADDING,
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

export default LayoutConfig;
