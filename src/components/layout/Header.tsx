import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import HubText from "../base/HubText";
import { CONTAINER_MAX_WIDTH } from "@/constants";

const TopHeader = () => {
  return (
    <div
      className="flex justify-between text-white
    container  mx-auto h-[50px]
    "
      style={{
        maxWidth: CONTAINER_MAX_WIDTH,
      }}
    >
      <div className="flex items-center gap-2">
        <Image
          alt="promotion icon"
          width={24}
          height={24}
          src="/images/promotion/campaign.svg"
        ></Image>
        <HubText size="sm" className="ml-1">
          Explore the new textile collection for B2C products launch
        </HubText>
        <Link href={"/"} className="flex gap-2 items-center">
          <HubText className="font-semibold ml-1" size="sm">
            See now
          </HubText>
          <span>
            <MoveRight  />
          </span>
        </Link>
      </div>
      <div id="socail-media" className="flex items-center gap-8">
        <Link href={"/"}>
          <RiInstagramFill size={24}></RiInstagramFill>
        </Link>
        <Link href={"/"}>
          <FaLinkedinIn size={24}></FaLinkedinIn>
        </Link>
        <Link href={"/"}>
          <FaYoutube size={24}></FaYoutube>
        </Link>
        <Link href={"/"}>
          <FaFacebookF size={24}></FaFacebookF>
        </Link>
      </div>
    </div>
  );
};

function Header() {
  return (
    <header id="header" className="bg-black w-full mx-auto">
      <TopHeader></TopHeader>
    </header>
  );
}

export default Header;
