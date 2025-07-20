'use client'
import React from "react";
import HudTitle from "../base/HudTitle";
import HudText from "../base/HudText";
import Image from "next/image";


import { FaArrowRightLong } from "react-icons/fa6";
import HudButton from "../base/HudButton";
import { useResponsive } from "@/context/ResponsiveContext";

function TopTestomonail() {
  const { CONTAINER_MAX_WIDTH, EACH_SECTION_PADDING} = useResponsive()
  return (
    <section
      className="flex flex-col justify-center mx-auto"
      id="testimonail-section"
      style={{
        paddingBlock: EACH_SECTION_PADDING,
        maxWidth: CONTAINER_MAX_WIDTH,
      }}
    >
      <div
        style={{
          paddingBlock: EACH_SECTION_PADDING,
        }}
      >
        <HudTitle
          as="h6"
          size="md"
          fontFamily="Grotesk"
          className="font-medium"
          css={{
            paddingBottom: EACH_SECTION_PADDING,
          }}
        >
          What people <br></br>say about us
        </HudTitle>

        <div className="flex items-center gap-4 mr-auto">
          <div className="flex gap-8 w-[90%] items-start justify-start ml-auto">
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col gap-4 max-w-[400px]">
                <Image
                  src={"/images/icons/quote.svg"}
                  height={20}
                  width={30}
                  alt="partner image 1"
                  className="object-cover object-center"
                ></Image>
                <HudText
                  size="md"
                  className="text-xl font-normal text-gray-600"
                >
                  Big problems with chapped hands and hand eczema before, now I
                  avoid itching, sweating and moisture.
                </HudText>
                <HudText
                  size="md"
                  className="text-xl font-normal text-gray-600"
                >
                  HUD is really cool and comfortable fit. I ain’t feeling any
                  itching and sweating since starts using it
                </HudText>
              </div>
              <div className="flex flex-row gap-3 mt-auto">
                <Image
                  src={"/images/hero/team1.svg"}
                  height={40}
                  width={40}
                  alt="Team image"
                  className="object-cover object-center rounded-full "
                ></Image>
                <div className="flex flex-col gap-1">
                  <HudTitle size="xsm" className="font-bold">
                    Sofia Magnusson
                  </HudTitle>
                  <HudText size="sm" className="text-gray-600">
                    Hairdresser
                  </HudText>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col gap-4 max-w-[440px]">
                <Image
                  src={"/images/icons/quote.svg"}
                  height={20}
                  width={30}
                  alt="partner image 1"
                  className="object-cover object-center"
                ></Image>
                <HudText
                  size="md"
                  className="text-xl font-normal text-gray-600"
                >
                  Very comfortable to use, I notice a huge difference on my
                  hands!
                </HudText>
                <HudText
                  size="md"
                  className="text-xl font-normal text-gray-600"
                >
                  I no longer feel dryness and sensitivity in the same way.
                  Completely satisfied from HUD gloves.
                </HudText>
              </div>
              <div className="flex flex-row gap-3 mt-auto">
                <Image
                  src={"/images/hero/team2.svg"}
                  height={40}
                  width={40}
                  alt="Team image"
                  className="object-cover object-center"
                ></Image>
                <div className="flex flex-col gap-1">
                  <HudTitle size="xsm" className="font-bold">
                    Emila A.
                  </HudTitle>
                  <HudText size="sm" className="text-gray-600">
                    Party Chef
                  </HudText>
                </div>
              </div>
            </div>
          </div>
          <span>
            <FaArrowRightLong size={24}></FaArrowRightLong>
          </span>
        </div>
      </div>
    </section>
  );
}
const BottomTestomonail = () => {
  const { CONTAINER_MAX_WIDTH, EACH_SECTION_PADDING} = useResponsive()
  return (
    <section
      className="flex flex-col justify-center mx-auto"
      id="testimonail-section"
      style={{
        paddingBlock: EACH_SECTION_PADDING,
      }}
    >
      <div
        style={{
          maxWidth: CONTAINER_MAX_WIDTH,
        }}
        className="bg-[#E5E5E5] grid grid-cols-2 mx-auto rounded-[26px]"
      >
        <div className="p-12">
          <HudTitle
            as="h6"
            size="md"
            fontFamily="Grotesk"
            className="font-medium tracking-tight mb-8"
          >
            Get your hands <br></br>protective and dry.
          </HudTitle>

          <HudButton>Pre-order now</HudButton>
        </div>
        <div className="flex flex-1">
          <img
            src={"/images/hero/testimonail.svg"}
            height={400}
            width="auto"
            alt="partner image 1"
            className="object-cover object-center"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default function HudTestimonail() {
  return (
    <>
      <TopTestomonail></TopTestomonail>
      <BottomTestomonail></BottomTestomonail>
    </>
  );
}
