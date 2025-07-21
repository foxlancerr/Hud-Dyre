'use client';

import Image from "next/image";
import React from "react";
import HudTitle from "../base/HudTitle";
import HudButton from "../base/HudButton";
import HudText from "../base/HudText";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import moment from "moment";
import HudLink from "../base/HudLink";
import HudInput from "../base/HudInput";
import { useResponsive } from "@/context/ResponsiveContext";
import { motion } from "framer-motion";

// Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const TopFooter = () => (
  <motion.div
    id="top-footer"
    className="flex flex-col gap-2"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
  >
    <motion.div className="flex flex-row gap-4" variants={fadeInUp} custom={1}>
      <div className="relative w-1/2 aspect-[3/2]">
        <Image
          className="object-cover"
          alt="footer 1"
          src={"/images/footer/footer1.svg"}
          fill
        />
      </div>
      <div className="relative w-1/2 aspect-[3/2]">
        <Image
          className="object-cover"
          alt="footer 2"
          src={"/images/footer/footer2.svg"}
          fill
        />
      </div>
    </motion.div>

    <motion.div
      className="flex flex-col items-start gap-4 px-2 sm:px-6"
      variants={fadeInUp}
      custom={2}
    >
      <HudTitle
        as="h3"
        fontFamily="Grotesk"
        size="bold"
        className="font-medium tracking-[-4px] mt-3 text-center sm:text-left"
      >
        Let’s start your daily home work with comfort.
      </HudTitle>
      <HudButton
        as="button"
        rounded="none"
        fontFamily="Grotesk"
        className="mt-4 sm:mt-8 transition-all hover:scale-105"
      >
        Pre-order now
      </HudButton>
    </motion.div>
  </motion.div>
);

const BottomFooter = () => {
  const { CONTAINER_MAX_WIDTH, EACH_SECTION_PADDING } = useResponsive();

  const columns = [
    {
      title: "Overview",
      links: ["About us", "Why us", "Our history", "Shop", "Features"],
    },
    {
      title: "Support",
      links: ["Customer Support", "Contact Us", "FAQ", "Blog"],
    },
    {
      title: "Resource",
      links: ["Miscellaneous", "Refund policy", "Shipping policy"],
    },
  ];

  return (
    <motion.div
      id="bottom-footer"
      className="grid grid-cols-1 sm:grid-cols-7 gap-8 mt-12"
      style={{ paddingBlock: EACH_SECTION_PADDING }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <motion.div
        className="sm:col-span-2 col-span-1 flex flex-col gap-8 mr-4"
        variants={fadeInUp}
        custom={1}
        viewport={{
          once:false
        }}
      >
        <HudTitle as="h4" size="md" className="font-semibold">
          Hud
        </HudTitle>
        <HudText>
          The new innovative glove liner that protects your skin against sweat
          and itching while providing superior comfort, precision, and
          durability.
        </HudText>

        <div id="social-media" className="flex items-center gap-4 text-white">
          {[RiInstagramFill, FaLinkedinIn, FaYoutube, FaFacebookF].map(
            (Icon, i) => (
              <Link
                key={i}
                href="/"
                className="w-[44px] h-[44px] rounded-full bg-black flex justify-center items-center transition hover:scale-110"
              >
                <Icon size={20} />
              </Link>
            )
          )}
        </div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-6 sm:col-span-5 gap-8">
        {columns.map((col, index) => (
          <motion.div key={index} variants={fadeInUp} custom={index + 2}>
            <HudTitle
              as="h5"
              fontFamily="Grotesk"
              size="sm"
              className="font-bold"
            >
              {col.title}
            </HudTitle>
            <div className="flex flex-col gap-4 mt-6">
              {col.links.map((label, i) => (
                <HudLink key={i} as="link" size="sm" href="#">
                  {label}
                </HudLink>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="col-span-4 sm:col-span-3"
          variants={fadeInUp}
          custom={5}
        >
          <HudTitle
            as="h5"
            fontFamily="Grotesk"
            className="font-bold"
            size="sm"
          >
            Subscribe
          </HudTitle>

          <div className="flex flex-col gap-4 mt-6">
            <HudText className="text-sm sm:text-base text-left sm:text-center">
              Join the 600+ subscribers who receive bi-monthly email digests
              packed with fundraising tips, nonprofit case studies, and
              PhoneRaise updates.
            </HudText>
            <div className="flex flex-row items-center gap-2 border border-neutral-600/20 rounded-md py-3 px-2">
              <HudInput
                rounded="none"
                className="w-full flex-1 px-2 text-black"
                placeholder="Enter email address"
              />
              <HudButton
                as="button"
                rounded="full"
                className="w-auto transition-all hover:scale-105"
                size="xsm"
              >
                Subscribe
              </HudButton>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const CopyRight = () => {
  const currentYear = moment().format("YYYY");

  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 text-center text-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadeIn}
    >
      <HudText>© {currentYear} HUD, All rights reserved.</HudText>
      <HudText>Privacy Policy • Terms & Conditions</HudText>
    </motion.div>
  );
};

function Footer() {
  const { CONTAINER_MAX_WIDTH, EACH_SECTION_PADDING } = useResponsive();

  return (
    <footer
      className="mx-auto w-full bg-white flex flex-col px-4"
      style={{
        maxWidth: CONTAINER_MAX_WIDTH,
        paddingBlock: EACH_SECTION_PADDING,
      }}
    >
      <TopFooter />
      <BottomFooter />
      <hr className="my-6" />
      <CopyRight />
    </footer>
  );
}

export default Footer;
