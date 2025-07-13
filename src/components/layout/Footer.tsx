import { CONTAINER_MAX_WIDTH, EACH_SECTION_PADDING } from "@/constants";
import Image from "next/image";
import React from "react";
import HudTitle from "../base/HudTitle";
import { Button } from "@/components/ui/button";
import HudButton from "../base/HudButton";
import HudText from "../base/HudText";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import moment from "moment";
import HudLink from "../base/HudLink";
import HudInput from "../base/HudInput";

const TopFooter = () => {
  return (
    <div id="top-footer" className="grid grid-cols-4 gap-4">
      <div className="">
        <Image
          className="object-cover"
          alt="footer 1"
          src={"/images/footer/footer1.svg"}
          width={320}
          height={423}
        ></Image>
      </div>
      <div className="">
        <Image
          className="object-cover"
          alt="footer 2"
          src={"/images/footer/footer2.svg"}
          width={320}
          height={423}
        ></Image>
      </div>

      <div className="col-span-2 flex flex-col items-start ml-6 gap-4">
        <HudTitle
          as="h3"
          fontFamily="Grotesk"
          size="lg"
          className="font-medium tracking-[-4px] mt-3"
        >
          Let’s start your daily home work with comfort.
        </HudTitle>
        <HudButton
          as="button"
          rounded="none"
          fontFamily="Grotesk"
          className="mt-8"
        >
          Pre-order now
        </HudButton>
      </div>
    </div>
  );
};

const BottomFooter = () => {
  return (
    <div
      id="bottom-footer"
      className="grid grid-cols-7 gap-4"
      style={{
        paddingBlock: EACH_SECTION_PADDING,
      }}
    >
      <div
        className="col-span-2 flex flex-col gap-8 mr-4"
        id="footer-bottom-left"
      >
        <HudTitle as="h4" size="md" className="font-semibold">
          Hud
        </HudTitle>
        <HudText>
          The new innovative glove liner that protects your skin against sweat
          and itching while providing superior comfort, precision, and
          durability.
        </HudText>

        <div id="socail-media" className="flex items-center gap-4 text-white">
          <Link
            href={"/"}
            className="w-[44px] h-[44px] rounded-full bg-black flex justify-center items-center"
          >
            <RiInstagramFill size={20}></RiInstagramFill>
          </Link>
          <Link
            href={"/"}
            className="w-[44px] h-[44px] rounded-full bg-black flex justify-center items-center"
          >
            <FaLinkedinIn size={20}></FaLinkedinIn>
          </Link>
          <Link
            href={"/"}
            className="w-[44px] h-[44px] rounded-full bg-black flex justify-center items-center"
          >
            <FaYoutube size={20}></FaYoutube>
          </Link>
          <Link
            href={"/"}
            className="w-[44px] h-[44px] rounded-full bg-black flex justify-center items-center"
          >
            <FaFacebookF size={20}></FaFacebookF>
          </Link>
        </div>
      </div>
      <div>
        <HudTitle as="h5" fontFamily="Grotesk" className="font-bold">
          Overview
        </HudTitle>

        <div className="flex flex-col gap-4 mt-8">
          <HudLink as="link" size="sm" href="#">
            About us
          </HudLink>
          <HudLink as="link" size="sm" href="#">
            Why us
          </HudLink>
          <HudLink as="link" size="sm" href="#">
            Our history
          </HudLink>
          <HudLink as="link" size="sm" href="#">
            Shop
          </HudLink>
          <HudLink as="link" size="sm" href="#">
            Features
          </HudLink>
        </div>
      </div>
      <div>
        <HudTitle as="h5" fontFamily="Grotesk" className="font-bold">
          Support
        </HudTitle>

        <div className="flex flex-col gap-4 mt-8">
          <HudLink as="link" size="sm" href="#">
            Customer Support
          </HudLink>
          <HudLink as="link" size="sm" href="#">
            Contact Us
          </HudLink>
          <HudLink as="link" size="sm" href="#">
            FAQ
          </HudLink>
          <HudLink as="link" size="sm" href="#">
            Blog
          </HudLink>
        </div>
      </div>{" "}
      <div>
        <HudTitle as="h5" fontFamily="Grotesk" className="font-bold">
          Resourse
        </HudTitle>

        <div className="flex flex-col gap-4 mt-8">
          <HudLink as="link" size="sm" href="#">
            Miscellaneous
          </HudLink>
          <HudLink as="link" size="sm" href="#">
            Refund policy
          </HudLink>
          <HudLink as="link" size="sm" href="#">
            Shipping policy
          </HudLink>
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <HudTitle as="h5" fontFamily="Grotesk" className="font-bold">
            Subscribe
          </HudTitle>

          <div className="flex flex-col gap-4 mt-8">
            <HudText>
              Join the 600+ subscribers who receive bi-monthly email digests
              packed with fundraising tips, nonprofit case studies, and
              PhoneRaise updates. 
            </HudText>
            <div className="flex flex-1 border-1 border-neutral-600/20 rounded-md justify-between py-3 px-2 relative gap-2">
              <HudInput
                rounded="none"
                className="flex flex-1 px-2 hover text-black"
                placeholder="Enter email address"
              ></HudInput>
              <HudButton as="button" rounded="full">
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
    <div className="flex justify-between gap-4 mt-4">
      <HudText>© {currentYear} HUD, All rights reserved.</HudText>
      <HudText>Privacy Policy • Terms & Conditions</HudText>
    </div>
  );
};
function Footer() {
  return (
    <footer
      className="mx-auto w-full bg-white flex flex-col"
      style={{
        maxWidth: CONTAINER_MAX_WIDTH,
         paddingBlock: EACH_SECTION_PADDING,
      }}
    >
      <TopFooter></TopFooter>
      <BottomFooter></BottomFooter>
      <hr />
      <CopyRight></CopyRight>
    </footer>
  );
}

export default Footer;
