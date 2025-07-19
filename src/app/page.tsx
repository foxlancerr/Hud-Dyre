import FaqsSection from "@/components/home/Faqs";
import HeroSection from "@/components/home/Hero";
import HudNewsSection from "@/components/home/HudCollection";
import HudCollection from "@/components/home/HudCollection";
import HudTestomonail from "@/components/home/HudTestimonail";
import PartnerSection from "@/components/home/Partner";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <PartnerSection></PartnerSection>
      <HudCollection></HudCollection>
      <HudTestomonail></HudTestomonail>
      <HudNewsSection></HudNewsSection>
      <FaqsSection></FaqsSection>
    </div>
  );
}
