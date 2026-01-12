"use client";
import { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import HudTitle from "../base/HudTitle";
import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { RiInstagramFill } from "react-icons/ri";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegUser,
  FaYoutube,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import HudText from "../base/HudText";
import HudLink from "../base/HudLink";

import { useScreenSize } from "@/hooks/useScreenSize";
import { useMenu } from "@/context/MenuContext";
import { useResponsive } from "@/context/ResponsiveContext";

const TopHeader = () => {
  const { handleMenuToggle } = useMenu();
  const { CONTAINER_MAX_WIDTH, EACH_SECTION_PADDING } = useResponsive();
  return (
    <motion.div
      key="top-header"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex-col sm:flex-row items-center flex text-white
        container mx-auto h-screen sm:h-[50px] p-[20px] sm:p-0 sm:justify-between sm:items-center 
        relative
      "
      style={{ maxWidth: CONTAINER_MAX_WIDTH }}
    >
      {/* Promo Text */}
      <div className="flex flex-col sm:flex-row gap-2 pb-2 border-b-1 sm:border-none sm:pb-0 border-gray-600/50 ">
        <div className="flex items-start sm:items-center justify-between gap-4">
          <Image
            alt="promotion icon"
            width={24}
            height={24}
            src="/images/promotion/campaign.svg"
          />
          <div className="flex flex-col gap-1 sm:flex-row items-start sm:items-center">
            <HudText size="normal" className="ml-1">
              Explore the new textile collection for B2C products launch
            </HudText>
            <Link href="/" className="flex gap-2 items-center">
              <HudText className="font-semibold ml-1" size="normal">
                See now
              </HudText>
              <MoveRight />
            </Link>
          </div>
        </div>
      </div>

      <header className="sm:hidden z-3 flex flex-col gap-2 items-start w-full mt-4">
        <div className="flex justify-between items-center w-full">
          <HudTitle
            as="h1"
            fontFamily="Grotesk"
            size="md"
            className="font-bold text-white"
          >
            hud
          </HudTitle>
          <div className="flex gap-2">
            <FiSearch className="size-5 sm:size-6" />
            <FaRegUser className="size-5 sm:size-6" />
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center h-full justify-center w-full">
          {["About us", "Why us", "Features", "Shop", "B2B"].map((item) => (
            <HudLink
              key={item}
              href="#"
              className="text-white"
              as="link"
              size="normal"
              display="inline"
            >
              {item}
            </HudLink>
          ))}
        </div>
      </header>

      {/* Social Icons */}
      <div
        id="social-media"
        className="flex items-center justify-center gap-4 sm:gap-8 mt-auto sm:mt-0"
      >
        <Link href="/">
          <RiInstagramFill className="size-5 sm:size-6" />
        </Link>
        <Link href="/">
          <FaLinkedinIn className="size-5 sm:size-6" />
        </Link>
        <Link href="/">
          <FaYoutube className="size-5 sm:size-6" />
        </Link>
        <Link href="/">
          <FaFacebookF className="size-5 sm:size-6" />
        </Link>
      </div>
    </motion.div>
  );
};

function Header() {
  const { isMobile } = useScreenSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup just in case
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header id="header" className="bg-black w-full mx-auto">
      {/* Mobile navbar top row */}
      <div className="flex justify-between items-center w-full p-4 sm:hidden">
        <HudTitle
          as="h1"
          fontFamily="Grotesk"
          size="md"
          className="font-bold text-white"
        >
          hud
        </HudTitle>
        <div className="text-white" onClick={handleMenuToggle}>
          {isMenuOpen ? (
            <IoClose className="size-5 sm:size-6" />
          ) : (
            <RiMenu2Line className="size-5 sm:size-6" />
          )}
        </div>
      </div>

      {/* AnimatePresence with conditional render */}

      <AnimatePresence mode="wait">
        {isMenuOpen || !isMobile ? <TopHeader key="animated-header" /> : null}
      </AnimatePresence>
    </header>
  );
}

export default Header;
