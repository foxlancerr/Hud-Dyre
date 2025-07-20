

'use client'
import React from "react";
import HudTitle from "../base/HudTitle";
import HudText from "../base/HudText";

import Image from "next/image";

import clsx from "clsx";
import { useResponsive } from "@/context/ResponsiveContext";

const collectionList = [
  {
    id: 1,
    title: "HUD SweatGuard Liner",
    count: "329 SEK",
    href: "",
    imageUrl: "/images/hero/partner.svg",
  },
  {
    id: 2,
    title: "HUD SweatGuard Liner",
    count: "3889 SEK",
    href: "",
    imageUrl: "/images/hero/partner.svg",
  },
  {
    id: 3,
    title: "HUD SweatGuard Liner",
    count: "6290 SEK",
    href: "",
    imageUrl: "/images/hero/partner.svg",
  },
  {
    id: 4,
    title: "HUD SweatGuard Liner",
    count: "62080 SEK",
    href: "",
    imageUrl: "/images/hero/partner.svg",
  },
];
function HudNewsSection() {
  const { CONTAINER_MAX_WIDTH, EACH_SECTION_PADDING} = useResponsive()
  return (
    <section
      className="flex flex-col justify-center items-center mx-auto bg-[#E5E5E5]"
      id="explore-collection-section"
      style={{
        paddingBlock: EACH_SECTION_PADDING,
      }}
    >
      <div
        style={{
          maxWidth: CONTAINER_MAX_WIDTH,
          paddingBlock: EACH_SECTION_PADDING,
        }}
      >
        <HudTitle
          as="h6"
          size="normal"
          className="text-center max-w-[90%] mx-auto font-medium"
          css={{
            paddingBottom: EACH_SECTION_PADDING,
          }}
        >
          HUD is launching a new and highly comfortable, itching and sweating
          free fabricated products for your daily personal use.
        </HudTitle>

        <div className="flex flex-row justify-between items-center">
          <HudTitle as="h5" size="sm" className="">
            Collection
          </HudTitle>
          <div className="flex gap-4">
            <Image
              src={"/images/icons/arrow-left.svg"}
              height={20}
              width={30}
              alt="partner image 1"
              className="object-cover object-center"
            ></Image>
            <Image
              src={"/images/icons/arrow-long-right.svg"}
              height={20}
              width={100}
              alt="partner image 1"
              className="object-cover object-center"
            ></Image>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-10">
          {collectionList.map((item, index) => {
            return (
              <div
                className={clsx(
                  "border flex flex-col justify-between items-center border-black/15 rounded-md p-6 w-full",
                  index === 1 ? "bg-black text-white" : ""
                )}
              >
                <Image
                  src={"/images/hero/hand.svg"}
                  height={80}
                  width={160}
                  alt="hand image"
                  className="object-cover object-center mx-auto mt-6"
                ></Image>

                <div className="flex flex-col mt-3">
                  <HudTitle
                    as="h4"
                    size="sm"
                    fontFamily="Grotesk"
                    className={clsx(
                      "tracking-tigh font-semibold text-2xl ",
                      index === 1 ? "text-white" : ""
                    )}
                  >
                    {item.title}
                  </HudTitle>
                  <HudText as="p" size="normal" className="mt-2">
                    {item.count}
                  </HudText>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HudNewsSection;

