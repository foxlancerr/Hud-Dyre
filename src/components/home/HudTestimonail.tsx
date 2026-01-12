"use client";
import React from "react";
import HudTitle from "../base/HudTitle";
import HudText from "../base/HudText";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import HudButton from "../base/HudButton";
import { useResponsive } from "@/context/ResponsiveContext";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function TopTestomonail() {
  const { CONTAINER_MAX_WIDTH, EACH_SECTION_PADDING } = useResponsive();
  return (
    <section
      className="flex flex-col justify-center mx-auto"
      id="testimonail-section"
      style={{
        paddingBlock: EACH_SECTION_PADDING,
        maxWidth: CONTAINER_MAX_WIDTH,
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        style={{ paddingBlock: EACH_SECTION_PADDING }}
      >
        <HudTitle
          as="h6"
          size="md"
          fontFamily="Grotesk"
          className="font-medium"
          css={{ paddingBottom: EACH_SECTION_PADDING }}
        >
          What people <br />say about us
        </HudTitle>

        <div className="flex flex-col sm:flex-row items-start gap-6">
          {[
            {
              quote1:
                "Big problems with chapped hands and hand eczema before, now I avoid itching, sweating and moisture.",
              quote2:
                "HUD is really cool and comfortable fit. I ain’t feeling any itching and sweating since starts using it",
              name: "Sofia Magnusson",
              title: "Hairdresser",
              img: "/images/hero/team1.svg",
            },
            {
              quote1:
                "Very comfortable to use, I notice a huge difference on my hands!",
              quote2:
                "I no longer feel dryness and sensitivity in the same way. Completely satisfied from HUD gloves.",
              name: "Emila A.",
              title: "Party Chef",
              img: "/images/hero/team2.svg",
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              custom={i}
              className="flex flex-col gap-4 max-w-[440px]"
            >
              <Image
                src="/images/icons/quote.svg"
                height={20}
                width={30}
                alt="Quote icon"
              />
              <HudText size="md" className="text-xl font-normal text-gray-600">
                {testimonial.quote1}
              </HudText>
              <HudText size="md" className="text-xl font-normal text-gray-600">
                {testimonial.quote2}
              </HudText>
              <div className="flex items-center gap-3 mt-2">
                <Image
                  src={testimonial.img}
                  height={40}
                  width={40}
                  alt="Team image"
                  className="rounded-full"
                />
                <div>
                  <HudTitle size="xsm" className="font-bold">
                    {testimonial.name}
                  </HudTitle>
                  <HudText size="sm" className="text-gray-600">
                    {testimonial.title}
                  </HudText>
                </div>
              </div>
            </motion.div>
          ))}
          <motion.span
            className="mt-4 sm:mt-0"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <FaArrowRightLong size={24} />
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}

const BottomTestomonail = () => {
  const { CONTAINER_MAX_WIDTH, EACH_SECTION_PADDING } = useResponsive();
  return (
    <section
      className="flex flex-col justify-center mx-auto"
      style={{ paddingBlock: EACH_SECTION_PADDING }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ maxWidth: CONTAINER_MAX_WIDTH }}
        className="bg-[#E5E5E5] grid grid-cols-1 sm:grid-cols-2 mx-auto rounded-[26px]"
      >
        <div className="p-12">
          <HudTitle
            as="h6"
            size="md"
            fontFamily="Grotesk"
            className="font-medium tracking-tight mb-8"
          >
            Get your hands <br />protective and dry.
          </HudTitle>
          <HudButton>Pre-order now</HudButton>
        </div>
        <div className="flex flex-1">
          <img
            src="/images/hero/testimonail.svg"
            height={400}
            width="auto"
            alt="testimonial visual"
            className="object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default function HudTestimonail() {
  return (
    <>
      <TopTestomonail />
      <BottomTestomonail />
    </>
  );
}
