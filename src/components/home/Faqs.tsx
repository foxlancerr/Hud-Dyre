"use client";
import React, { useState } from "react";
import HudTitle from "../base/HudTitle";
import HudText from "../base/HudText";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { PiPlayCircleFill } from "react-icons/pi";
import { useResponsive } from "@/context/ResponsiveContext";

const FAQS = [
  {
    id: 1,
    question: "How does it work?",
    answer: {
      imageUrl: "/images/faqs/faqs1.svg",
      title: (
        <>
          Protects your skin <br /> against sweat and <br /> itching
        </>
      ),
      content: [
        "HUD SweatGuard Liner acts as a breathable barrier layer between your skin and your gloves. It’s designed with high-performance fabric that absorbs and evaporates sweat, keeping your hands dry even during extended glove use.",
        "The liner reduces friction and chafing, minimizing skin irritation and preventing conditions like eczema and dermatitis.",
        "By managing moisture inside the glove, HUD prevents the growth of odor-causing bacteria, keeping your gloves fresher for longer.",
        "It also helps extend the life of your gloves by reducing internal damage caused by sweat buildup.",
      ],
    },
  },
  {
    id: 2,
    question: "Why should I use HUD SweatGuard Liner?",
    answer: {
  imageUrl: "/images/faqs/faqs1.svg",
      title: (
        <>
          Maximum comfort <br /> for extended glove use
        </>
      ),
      content: [
        "If you wear gloves for long hours, whether for work or training, you’re likely familiar with sweaty, itchy hands. HUD SweatGuard Liner solves that by keeping your skin dry, fresh, and irritation-free.",
        "It’s especially useful for professionals in healthcare, construction, manufacturing, and sports where glove use is frequent and prolonged.",
        "Unlike traditional cotton liners, HUD is engineered to enhance comfort without adding bulk or compromising dexterity.",
        "Many users report an immediate reduction in hand discomfort, even after just one use.",
      ],
    },
  },
  {
    id: 3,
    question: "How long does HUD SweatGuard Liner last?",
    answer: {
       imageUrl: "/images/faqs/faqs1.svg",
      title: (
        <>
          Durable for <br /> extended usage
        </>
      ),
      content: [
        "Each pair of HUD SweatGuard Liners is built to withstand between 30 to 50 washes, depending on care and frequency of use.",
        "On average, users get between 3 to 6 months of active use per pair under normal conditions.",
        "The premium stitching and moisture-control fabric are designed to maintain their elasticity and performance without thinning or breaking down.",
        "Proper care can significantly extend the life of your liners, making them a worthwhile investment over time.",
      ],
    },
  },
  {
    id: 4,
    question: "What are the washing instructions for HUD SweatGuard Liner?",
    answer: {
       imageUrl: "/images/faqs/faqs1.svg",
      title: (
        <>
          Easy to clean <br /> and reuse
        </>
      ),
      content: [
        "For optimal performance and lifespan, wash your HUD SweatGuard Liner using cold water on a gentle cycle.",
        "Do not use bleach or fabric softeners as they can damage the moisture-wicking fibers.",
        "Avoid tumble drying. Instead, air-dry them flat in a well-ventilated area, away from direct sunlight or heat sources.",
        "Following these simple care instructions will preserve the fabric’s breathability, stretch, and durability.",
      ],
    },
  },
  {
    id: 5,
    question:
      "Is HUD SweatGuard Liner only for people with dry and sensitive skin?",
    answer: {
      imageUrl: "/images/faqs/faqs1.svg",
      title: (
        <>
          Ideal for <br /> all skin types
        </>
      ),
      content: [
        "Although HUD was initially designed to help individuals with dry, itchy, or eczema-prone skin, it offers benefits for everyone who uses gloves.",
        "Whether you have normal, oily, or sensitive skin, HUD helps manage sweat and skin irritation more effectively than traditional liners.",
        "Its hypoallergenic and breathable fabric ensures that even users with no prior skin issues can maintain glove hygiene and comfort.",
        "Professionals in various industries use HUD to improve glove comfort, regardless of their skin type.",
      ],
    },
  },
  {
    id: 6,
    question: "Does HUD SweatGuard Liner affect accuracy?",
    answer: {
      imageUrl: "/images/faqs/faqs1.svg",
      title: (
        <>
          Maintain grip <br /> and precision
        </>
      ),
      content: [
        "Not at all. HUD is specifically engineered to be ultra-thin and form-fitting, so it moves with your hand naturally without bunching or slipping.",
        "Its low-profile design ensures that your tactile sensitivity and finger mobility remain unaffected — crucial for tasks that require precision.",
        "In fact, many users report improved performance thanks to reduced sweat and friction inside their gloves.",
        "From surgeons to athletes, professionals who rely on hand accuracy trust HUD to enhance, not hinder, their performance.",
      ],
    },
  },
  {
    id: 7,
    question: "Can HUD SweatGuard Liner be used in healthcare?",
    answer: {
      imageUrl: "/images/faqs/faqs1.svg",
      title: (
        <>
          Healthcare-grade <br /> comfort and hygiene
        </>
      ),
      content: [
        "Yes, HUD is widely used by healthcare professionals such as nurses, surgeons, and lab technicians.",
        "It provides an additional hygiene layer under medical gloves, helping reduce skin fatigue during long shifts.",
        "HUD is made with breathable, hypoallergenic material that’s gentle on sensitive skin — especially after repeated sanitizing and glove use.",
        "The liner is compatible with latex, nitrile, and vinyl gloves and supports better skin health for frontline workers.",
      ],
    },
  },
  {
    id: 8,
    question: "What makes HUD SweatGuard Liner unique?",
    answer: {
      imageUrl: "/images/faqs/faqs1.svg",
      title: (
        <>
          Unmatched design <br /> and protection
        </>
      ),
      content: [
        "Unlike generic cotton or fabric liners, HUD is made with high-tech moisture-wicking fabric and seamless ergonomic design.",
        "Its slim fit, four-way stretch, and breathable properties make it feel like a second skin inside your gloves.",
        "HUD also stands out with its focus on skin wellness — it's tested to reduce glove-induced irritation and improve comfort.",
        "It’s the only glove liner engineered with feedback from professionals in healthcare, sports, and industry settings.",
      ],
    },
  },
  {
    id: 9,
    question:
      "HUD SweatGuard Liner is much more expensive than cotton gloves, why?",
    answer: {
      imageUrl: "/images/faqs/faqs1.svg",
      title: (
        <>
          Premium quality <br /> and performance
        </>
      ),
      content: [
        "Unlike basic cotton gloves, HUD is a specialized liner made from medical-grade moisture-wicking material that supports skin health and comfort.",
        "It’s engineered for repeated use, washing, and extended durability — not disposable like most alternatives.",
        "The liner helps reduce skin conditions and improves glove hygiene, reducing glove turnover and skin-related work interruptions.",
        "You're not just buying a glove liner — you're investing in comfort, skin care, and long-term glove performance.",
      ],
    },
  },
];

type FaqAnswerProps = {
  answer: {
    imageUrl: string;
    title: React.ReactNode;
    content: string[];
  };
};

function FaqAnswer({ answer }: FaqAnswerProps) {
  return (
    <div className="grid gap-8 grid-cols-2 w-[90%] mt-8 mb-8">
      <div
        className="relative h-[350px] w-full rounded-br-[40px] bg-no-repeat bg-contain bg-center flex justify-end p-8"
        style={{ background: `url('${answer.imageUrl}')` }}
      >
        <div className="flex flex-col gap-4 justify-between">
          <HudTitle size="sm" className="text-inherit font-semibold">
            {answer.title}
          </HudTitle>
          <span className="cursor-pointer ml-auto text-white">
            <PiPlayCircleFill size={50} />
          </span>
        </div>
      </div>

      <div className="flex gap-3 flex-col text-inherit">
        <HudTitle size="xsm" className="text-inherit font-normal">
          {answer.content[0]}
        </HudTitle>
        {answer.content.slice(1).map((para, index) => (
          <HudText
            key={index}
            size="normal"
            className="text-xl font-normal text-gray-600"
          >
            {para}
          </HudText>
        ))}
      </div>
    </div>
  );
}

export default function FaqsSection() {
  const { CONTAINER_MAX_WIDTH,EACH_SECTION_PADDING } = useResponsive();
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };
  return (
    <section
      className="flex flex-col w-full bg-black text-white justify-center mx-auto"
      id="faqs-section"
      style={{
        paddingBlock: EACH_SECTION_PADDING,
      }}
    >
      <div
        className="flex flex-col justify-center mx-auto w-full text-inherit"
        id="testimonail-section"
        style={{
          maxWidth: CONTAINER_MAX_WIDTH,
          paddingBlock: EACH_SECTION_PADDING,
        }}
      >
        <HudTitle
          as="h3"
          size="md"
          fontFamily="Grotesk"
          className="font-medium text-white"
          css={{
            paddingBottom: EACH_SECTION_PADDING,
          }}
        >
          Frequently <br /> asked questions
        </HudTitle>

        {FAQS.map((item) => (
          <div key={item.id} className="w-full">
            <div
              className="flex justify-between gap-4 mt-4 pt-4 border-t-1 border-gray-600 cursor-pointer"
              onClick={() => toggleFaq(item.id)}
            >
              <HudTitle
                as="h6"
                size="normal"
                className="font-medium text-white"
              >
                {item.question}
              </HudTitle>

              <span className="cursor-pointer">
                {activeId === item.id ? (
                  <HiOutlineMinusSm
                    size={32}
                    onClick={() => toggleFaq(item.id)}
                  />
                ) : (
                  <HiOutlinePlusSm
                    size={32}
                    onClick={() => toggleFaq(item.id)}
                  />
                )}
              </span>
            </div>

            {activeId === item.id && <FaqAnswer answer={item.answer} />}
          </div>
        ))}
      </div>
    </section>
  );
}
