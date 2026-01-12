'use client';

import React from "react";
import HudTitle from "../base/HudTitle";
import HudText from "../base/HudText";
import Image from "next/image";
import clsx from "clsx";
import { useResponsive } from "@/context/ResponsiveContext";
import { motion } from "framer-motion";

const collectionList = [
  {
    id: 1,
    title: "HUD SweatGuard Liner",
    count: "329 SEK",
    imageUrl: "/images/hero/partner.svg",
  },
  {
    id: 2,
    title: "HUD SweatGuard Liner",
    count: "3889 SEK",
    imageUrl: "/images/hero/partner.svg",
  },
  {
    id: 3,
    title: "HUD SweatGuard Liner",
    count: "6290 SEK",
    imageUrl: "/images/hero/partner.svg",
  },
  {
    id: 4,
    title: "HUD SweatGuard Liner",
    count: "62080 SEK",
    imageUrl: "/images/hero/partner.svg",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function HudCollection() {
  const { CONTAINER_MAX_WIDTH, EACH_SECTION_PADDING } = useResponsive();

  return (
    <section
      className="flex flex-col justify-center items-center mx-auto bg-[#E5E5E5] w-full"
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
        className="w-full px-4 sm:px-6 lg:px-8"
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

        <div className="flex flex-row justify-between items-center mt-8">
          <HudTitle as="h5" size="sm">
            Collection
          </HudTitle>
          <div className="flex gap-4">
            <Image
              src="/images/icons/arrow-left.svg"
              height={20}
              width={30}
              alt="arrow left"
              className="object-cover"
            />
            <Image
              src="/images/icons/arrow-long-right.svg"
              height={20}
              width={100}
              alt="arrow right"
              className="object-cover"
            />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6"
        >
          {collectionList.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className={clsx(
                "border flex flex-col justify-between items-center border-black/15 rounded-md p-6 w-full shadow-md bg-white",
                index === 1 && "bg-black text-white"
              )}
            >
              <Image
                src="/images/hero/hand.svg"
                height={80}
                width={160}
                alt="hand image"
                className="object-contain mx-auto mt-4"
              />

              <div className="flex flex-col mt-5 text-center">
                <HudTitle
                  as="h4"
                  size="sm"
                  fontFamily="Grotesk"
                  className={clsx(
                    "font-semibold text-2xl tracking-tight",
                    index === 1 && "text-white"
                  )}
                >
                  {item.title}
                </HudTitle>
                <HudText as="p" size="normal" className="mt-2">
                  {item.count}
                </HudText>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HudCollection;
