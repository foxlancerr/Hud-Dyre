'use client'
import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tailwind-style breakpoints
  const isMobile = windowWidth !== undefined && windowWidth < 640;         // < sm
  const isTablet = windowWidth !== undefined && windowWidth >= 640 && windowWidth < 1024; // sm to md/lg
  const isDesktop = windowWidth !== undefined && windowWidth >= 1024;      // ≥ lg

  return { isMobile, isTablet, isDesktop };
};
