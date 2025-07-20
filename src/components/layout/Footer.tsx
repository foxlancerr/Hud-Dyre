'use client'
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

const TopFooter = () => {
  return (
    <div id="top-footer" className="flex flex-col gap-2">
      <div className="flex flex-row gap-4">
        <div className="relative">
          <Image
            className="object-cover w-full h-auto"
            alt="footer 1"
            src={"/images/footer/footer1.svg"}
            layout="fill"
          />
        </div>
        <div className="relative">
          <Image
            className="object-cover w-full h-auto"
            alt="footer 2"
            src={"/images/footer/footer2.svg"}
            layout="fill"
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 px-2 sm:px-6">
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
          className="mt-4 sm:mt-8"
        >
          Pre-order now
        </HudButton>
      </div>
    </div>
  );
};

const BottomFooter = () => {
  const { CONTAINER_MAX_WIDTH, EACH_SECTION_PADDING } = useResponsive();
  return (
    <div
      id="bottom-footer"
      className="grid grid-cols-1 sm:grid-cols-7 gap-8 mt-12"
      style={{ paddingBlock: EACH_SECTION_PADDING }}
    >
      <div className="sm:col-span-2 col-span-1 flex flex-col gap-8 mr-4">
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
                className="w-[44px] h-[44px] rounded-full bg-black flex justify-center items-center"
              >
                <Icon size={20} />
              </Link>
            )
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-6 sm:col-span-5 gap-8">
        <div>
          <HudTitle
            as="h5"
            fontFamily="Grotesk"
            size="sm"
            className="font-bold"
          >
            Overview
          </HudTitle>
          <div className="flex flex-col gap-4 mt-6">
            {["About us", "Why us", "Our history", "Shop", "Features"].map(
              (label, i) => (
                <HudLink key={i} as="link" size="sm" href="#">
                  {label}
                </HudLink>
              )
            )}
          </div>
        </div>

        <div>
          <HudTitle
            as="h5"
            fontFamily="Grotesk"
            className="font-bold"
            size="sm"
          >
            Support
          </HudTitle>
          <div className="flex flex-col gap-4 mt-6">
            {["Customer Support", "Contact Us", "FAQ", "Blog"].map(
              (label, i) => (
                <HudLink key={i} as="link" size="sm" href="#">
                  {label}
                </HudLink>
              )
            )}
          </div>
        </div>

        <div>
          <HudTitle
            as="h5"
            fontFamily="Grotesk"
            className="font-bold"
            size="sm"
          >
            Resource
          </HudTitle>
          <div className="flex flex-col gap-4 mt-6">
            {["Miscellaneous", "Refund policy", "Shipping policy"].map(
              (label, i) => (
                <HudLink key={i} as="link" size="sm" href="#">
                  {label}
                </HudLink>
              )
            )}
          </div>
        </div>

        <div className="col-span-4 sm:col-span-3">
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
                className="w-auto"
                size="xsm"
              >
                Subscribe
              </HudButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CopyRight = () => {
  const currentYear = moment().format("YYYY");

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 text-center text-sm">
      <HudText>© {currentYear} HUD, All rights reserved.</HudText>
      <HudText>Privacy Policy • Terms & Conditions</HudText>
    </div>
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
