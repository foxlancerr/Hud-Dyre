'use client'
import React from "react";
import HudTitle from "../base/HudTitle";

import Image from "next/image";
import clsx from "clsx";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useResponsive } from "@/context/ResponsiveContext";

const hudNewsData = {
  hudNewTitle: "HUD updates & news",
  hudNewsList: [
    {
      id: 1,
      title: "Gloves & sweat - a potential source of reduced quality of life",
      href: "",
      imageUrl: "/images/news/news2.svg",
    },
    {
      id: 2,
      title: "New liner glove revolutionizes moisture transport and fit",
      href: "",
      imageUrl: "/images/news/news3.svg",
    },
    {
      id: 3,
      title: "Everything you need to know about hand eczema",

      href: "",
      imageUrl: "/images/news/news1.svg",
    },
  ],
};
function HudCollection() {
  const {EACH_SECTION_PADDING,CONTAINER_MAX_WIDTH} = useResponsive()
  return (
    <section
      className="flex flex-col justify-center items-center mx-auto"
      id="explore-collection-section"
      style={{
        paddingBlock: EACH_SECTION_PADDING,
      }}
    >
      <div
        className="relative"
        style={{
          maxWidth: CONTAINER_MAX_WIDTH,
          paddingBlock: EACH_SECTION_PADDING,
        }}
      >
        <span className="absolute top-[50%] -left-[70px]">
          <IoArrowBack size={32}></IoArrowBack>
        </span>
        <span className="absolute top-[50%] -right-[70px]">
          <IoArrowForward size={32}></IoArrowForward>
        </span>

        <HudTitle
          as="h6"
          size="md"
          className="text-center font-bold"
          css={{
            paddingBottom: EACH_SECTION_PADDING,
          }}
        >
          {hudNewsData.hudNewTitle}
        </HudTitle>

        <div className="grid grid-cols-3 gap-8">
          {hudNewsData?.hudNewsList?.map((item, index) => {
            return (
              <div className={clsx("flex flex-col w-full")}>
                <div className="relative w-full aspect-[461/452]">
                  <Image
                    src={item.imageUrl}
                    alt="hand image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col mt-8">
                  <HudTitle
                    as="h4"
                    size="sm"
                    fontFamily="Grotesk"
                    className={clsx(
                      "tracking-tigh font-semibold text-2xl  w-[90%]"
                    )}
                  >
                    {item.title}
                  </HudTitle>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HudCollection;
