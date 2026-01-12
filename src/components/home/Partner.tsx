'use client'
import React from "react";
import HudTitle from "../base/HudTitle";
import HudText from "../base/HudText";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { useResponsive } from "@/context/ResponsiveContext";
import { motion } from "framer-motion";

const partnerList = [
  {
    id: 1,
    title: "Effective anti-sweat liner for increased quality of life & comfort",
    description:
      "Stop greasing your hands constantly. With HUD-Liner, you get ground-breaking moisture transport technology and gentle material that provides maximum protection for your skin.",
    hretfText: "Learn more about us",
    href: "",
    imageUrl: "/images/hero/partner.svg",
  },
  {
    id: 2,
    title: "Ultra-thin material for work and home use.",
    description:
      "The HUD liner: Perfect for work, sleep, training and adventure. Body-conforming design and ultra-thin material for an exclusive feel.",
    href: "",
    hretfText: "Learn more about us",
    imageUrl: "/images/hero/partner.svg",
  },
  {
    id: 3,
    title: "Reduces waste and wear and is washable for increased longevity",
    description:
      " Give both your hands and wallet a gift with HUD Liner. It not only reduces waste by replacing other gloves, but also the wear and tear on your existing gloves at work or at home.",
    href: "",
    hretfText: "Pre-order now",
    imageUrl: "/images/hero/partner.svg",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

function PartnerSection() {
  const { CONTAINER_MAX_WIDTH, EACH_SECTION_PADDING } = useResponsive();
  return (
    <section
      className="flex flex-col justify-center items-center mx-auto mb-8"
      id="hud-partner-section"
      style={{
        maxWidth: CONTAINER_MAX_WIDTH,
        paddingTop: EACH_SECTION_PADDING,
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <HudTitle
          as="h6"
          size="normal"
          className="text-center max-w-[600px] mx-auto font-medium"
          css={{
            marginBlock: EACH_SECTION_PADDING,
          }}
        >
          HUD becomes your partner to take care of your skin and let you away
          from itching and seating
        </HudTitle>

        {partnerList.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            id="hud-partner-bottom-container"
            className={clsx(
              "flex gap-18 flex-col sm:flex-row",
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            )}
            style={{
              paddingBlock: EACH_SECTION_PADDING,
            }}
          >
            <div className="flex flex-col justify-between gap-7 w-full sm:w-1/2">
              <HudTitle
                as="h4"
                size="md"
                fontFamily="Grotesk"
                className="tracking-tigh"
              >
                {item?.title}
              </HudTitle>
              <div className="flex flex-col gap-4">
                <HudText as="p" size="normal" className="w-[350px]">
                  {item?.description}
                </HudText>
                <div className="flex gap-2 items-center">
                  <HudText className="font-bold ml-1" size="md">
                    {item?.hretfText}
                  </HudText>
                  <span>
                    <MoveRight />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <Image
                src={item.imageUrl}
                height={400}
                width={568}
                alt="partner image"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default PartnerSection;
