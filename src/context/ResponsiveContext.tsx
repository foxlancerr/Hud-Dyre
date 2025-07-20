'use client'
import React, { createContext, useContext, useEffect, useState } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

interface ResponsiveContextType {
  CONTAINER_MAX_WIDTH: string;
  EACH_SECTION_PADDING: string;
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const ResponsiveContext = createContext<ResponsiveContextType | null>(null);

export const ResponsiveProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");

  const updateBreakpoint = () => {
    const width = window.innerWidth;
    if (width < 640) setBreakpoint("mobile");
    else if (width < 1024) setBreakpoint("tablet");
    else setBreakpoint("desktop");
  };

  useEffect(() => {
    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  const values: Record<Breakpoint, { CONTAINER_MAX_WIDTH: string; EACH_SECTION_PADDING: string }> = {
    mobile: {
      CONTAINER_MAX_WIDTH: "100%",
      EACH_SECTION_PADDING: "1rem",
    },
    tablet: {
      CONTAINER_MAX_WIDTH: "90%",
      EACH_SECTION_PADDING: "2rem",
    },
    desktop: {
      CONTAINER_MAX_WIDTH: "1050px",
      EACH_SECTION_PADDING: "3rem",
    },
  };

  const contextValue: ResponsiveContextType = {
    breakpoint,
    isMobile: breakpoint === "mobile",
    isTablet: breakpoint === "tablet",
    isDesktop: breakpoint === "desktop",
    CONTAINER_MAX_WIDTH: values[breakpoint].CONTAINER_MAX_WIDTH,
    EACH_SECTION_PADDING: values[breakpoint].EACH_SECTION_PADDING,
  };

  return (
    <ResponsiveContext.Provider value={contextValue}>
      {children}
    </ResponsiveContext.Provider>
  );
};

// Hook to use it
export const useResponsive = (): ResponsiveContextType => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error("useResponsive must be used within ResponsiveProvider");
  }
  return context;
};
