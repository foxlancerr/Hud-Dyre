'use client';
import React from "react";
import HudTitle from "../base/HudTitle";
import HudLink from "../base/HudLink";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import HudText from "../base/HudText";
import { MoveRight } from "lucide-react";
import { useResponsive } from "@/context/ResponsiveContext";
import { motion } from "framer-motion";

function HeroSection() {
  const { CONTAINER_MAX_WIDTH, EACH_SECTION_PADDING } = useResponsive();

  return (
    <div
      className="w-full text-white relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/hero-bg-image.svg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content Container */}
      <div
        className="relative z-10 w-full h-[calc(100vh-50px)] px-4 sm:px-8 flex flex-col justify-center"
        style={{
          maxWidth: CONTAINER_MAX_WIDTH,
          marginInline: "auto",
        }}
      >
        {/* Header */}
        <motion.header
          className="hidden sm:flex justify-between items-center pt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <HudTitle
            as="h1"
            fontFamily="Grotesk"
            size="md"
            className="font-bold text-white"
          >
            hud
          </HudTitle>

          <div className="flex gap-8">
            {["About us", "Why us", "Features", "Shop", "B2B"].map((text, idx) => (
              <HudLink
                key={idx}
                href="#"
                as="link"
                size="normal"
                className="text-white"
                display="inline"
              >
                {text}
              </HudLink>
            ))}
          </div>

          <div className="flex gap-6">
            <FiSearch size={24} />
            <FaRegUser size={24} />
          </div>
        </motion.header>

        {/* Hero Main Content */}
        <div className="mt-auto mb-10 sm:mb-20 flex flex-col sm:flex-row justify-between gap-10 items-start sm:items-center">
          {/* Left Hero Text */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <HudTitle as="h3" size="lg" className="font-bold text-white">
              Comfort.
            </HudTitle>
            <HudTitle as="h3" size="lg" className="font-bold text-white">
              Protective
            </HudTitle>
            <HudTitle as="h3" size="lg" className="font-bold text-white">
              & Care.
            </HudTitle>
          </motion.div>

          {/* Right Hero Text */}
          <motion.div
            className="w-full sm:w-[350px] space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <HudTitle as="h6" size="sm" className="font-bold text-white">
              Protects your skin against sweat and itching
            </HudTitle>

            <HudText className="text-white/90 text-base">
              The new innovative glove liner that protects your skin against
              sweat and itching while providing superior comfort, precision, and
              durability.
            </HudText>

            <div className="flex items-center gap-2 group cursor-pointer">
              <HudText className="font-bold ml-1" size="md">
                See now
              </HudText>
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MoveRight />
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
