import FaqsSection from "@/components/home/Faqs";
import HeroSection from "@/components/home/Hero";
import HudCollection from "@/components/home/HudCollection";
import HudNews from "@/components/home/HudNews";
import HudTestomonail from "@/components/home/HudTestimonail";
import PartnerSection from "@/components/home/Partner";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <PartnerSection></PartnerSection>
      <HudCollection></HudCollection>
      <HudTestomonail></HudTestomonail>
      <HudNews></HudNews>
      <FaqsSection></FaqsSection>
    </div>
  );
}
