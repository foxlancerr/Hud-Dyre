import { CONTAINER_MAX_WIDTH, EACH_SECTION_PADDING } from "@/constants";
import Image from "next/image";
import React from "react";
import HubTitle from "../base/HubTitle";
import { Button } from "@/components/ui/button";
import HubButton from "../base/HubButton";
import HubText from "../base/HubText";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import moment from "moment";
import HubLink from "../base/HubLink";
import HubInput from "../base/HubInput";

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
        <HubTitle
          as="h3"
          fontFamily="Grotesk"
          size="lg"
          className="font-medium tracking-[-4px] mt-3"
        >
          Let’s start your daily home work with comfort.
        </HubTitle>
        <HubButton
          as="button"
          rounded="none"
          fontFamily="Grotesk"
          className="mt-8"
        >
          Pre-order now
        </HubButton>
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
        <HubTitle as="h4" size="md" className="font-semibold">
          Hub
        </HubTitle>
        <HubText>
          The new innovative glove liner that protects your skin against sweat
          and itching while providing superior comfort, precision, and
          durability.
        </HubText>

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
        <HubTitle as="h5" fontFamily="Grotesk" className="font-bold">
          Overview
        </HubTitle>

        <div className="flex flex-col gap-4 mt-8">
          <HubLink as="link" size="sm" href="#">
            About us
          </HubLink>
          <HubLink as="link" size="sm" href="#">
            Why us
          </HubLink>
          <HubLink as="link" size="sm" href="#">
            Our history
          </HubLink>
          <HubLink as="link" size="sm" href="#">
            Shop
          </HubLink>
          <HubLink as="link" size="sm" href="#">
            Features
          </HubLink>
        </div>
      </div>
      <div>
        <HubTitle as="h5" fontFamily="Grotesk" className="font-bold">
          Support
        </HubTitle>

        <div className="flex flex-col gap-4 mt-8">
          <HubLink as="link" size="sm" href="#">
            Customer Support
          </HubLink>
          <HubLink as="link" size="sm" href="#">
            Contact Us
          </HubLink>
          <HubLink as="link" size="sm" href="#">
            FAQ
          </HubLink>
          <HubLink as="link" size="sm" href="#">
            Blog
          </HubLink>
        </div>
      </div>{" "}
      <div>
        <HubTitle as="h5" fontFamily="Grotesk" className="font-bold">
          Resourse
        </HubTitle>

        <div className="flex flex-col gap-4 mt-8">
          <HubLink as="link" size="sm" href="#">
            Miscellaneous
          </HubLink>
          <HubLink as="link" size="sm" href="#">
            Refund policy
          </HubLink>
          <HubLink as="link" size="sm" href="#">
            Shipping policy
          </HubLink>
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <HubTitle as="h5" fontFamily="Grotesk" className="font-bold">
            Subscribe
          </HubTitle>

          <div className="flex flex-col gap-4 mt-8">
            <HubText>
              Join the 600+ subscribers who receive bi-monthly email digests
              packed with fundraising tips, nonprofit case studies, and
              PhoneRaise updates. 
            </HubText>
            <div className="flex flex-1 border-1 border-neutral-600/20 rounded-md justify-between py-3 px-2 relative gap-2">
              <HubInput
                rounded="none"
                className="flex flex-1 px-2 hover text-black"
                placeholder="Enter email address"
              ></HubInput>
              <HubButton as="button" rounded="full">
                Subscribe
              </HubButton>
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
      <HubText>© {currentYear} HUD, All rights reserved.</HubText>
      <HubText>Privacy Policy • Terms & Conditions</HubText>
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
