import React from "react";
import HudTitle from "../base/HudTitle";
import HudLink from "../base/HudLink";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import HudText from "../base/HudText";
import { MoveRight } from "lucide-react";
import { CONTAINER_MAX_WIDTH } from "@/constants";

function HeroSection() {
  return (
    <div
      className=" w-100vw text-white relative"
      style={{
        backgroundImage: "url('/images/hero/hero-bg-image.svg')",
      }}
    >
        <div className="absolute inset-0 bg-black/30" />
      <div
        className="z-10 mx-auto h-[calc(100vh-50px)] flex gap-4 flex-col justify-between "
        style={{
          maxWidth: CONTAINER_MAX_WIDTH,
        }}
      >
        <header className="flex justify-between gap-4 items-center pt-2">
          <HudTitle
            as="h1"
            fontFamily="Grotesk"
            size="md"
            className="font-bold text-white"
          >
            hud
          </HudTitle>
          <div className="flex flex-row gap-8 ">
            <HudLink
              href="#"
              as="link"
              size="normal"
              display="inline"
              className="text-white"
            >
              About us
            </HudLink>
            <HudLink
              href="#"
              className="text-white"
              as="link"
              size="normal"
              display="inline"
            >
              Why us
            </HudLink>
            <HudLink
              href="#"
              className="text-white"
              as="link"
              size="normal"
              display="inline"
            >
              Features
            </HudLink>
            <HudLink
              href="#"
              className="text-white"
              as="link"
              size="normal"
              display="inline"
            >
              Shop
            </HudLink>
            <HudLink
              href="#"
              as="link"
              size="normal"
              className="text-white"
              display="inline"
            >
              B2B
            </HudLink>
          </div>
          <div className="flex gap-8">
            <span>
              <FiSearch size={24}></FiSearch>
            </span>
            <span>
              <FaRegUser size={24}></FaRegUser>
            </span>
          </div>
        </header>
        <div className="flex justify-between items-center mb-10">
          <div className="mb-10">
            <HudTitle as="h3" size="lg" className="font-bold text-white">
              Comfort.
            </HudTitle>
            <HudTitle as="h3" size="lg" className="font-bold text-white">
              Protective
            </HudTitle>
            <HudTitle as="h3" size="lg" className="font-bold text-white">
              & Care.
            </HudTitle>
          </div>
          <div className="w-[350px] gap-2 flex flex-col">
            <HudTitle as="h6" size="sm" className="font-bold text-white">
              Protects your skin against sweat and itching
            </HudTitle>
            <HudText>
              The new innovative glove liner that protects your skin against
              sweat and itching while providing superior comfort, precision, and
              durability.
            </HudText>
            <div className="flex gap-2 items-center">
              <HudText className="font-bold ml-1" size="md">
                See now
              </HudText>
              <span>
                <MoveRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
