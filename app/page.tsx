import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import AboutPreview from "@/components/AboutPreview";
import Pillars from "@/components/Pillars";
import Programs from "@/components/Programs";
import Chapters from "@/components/Chapters";
import UpcomingEvents from "@/components/UpcomingEvents";
import GalleryStrip from "@/components/GalleryStrip";
import PastSpeakers from "@/components/PastSpeakers";
import Testimonials from "@/components/Testimonials";
import Press from "@/components/Press";
import ImpactBand from "@/components/ImpactBand";
import JoinSteps from "@/components/JoinSteps";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <AboutPreview />
      <Pillars />
      <Programs />
      <Chapters />
      <UpcomingEvents />
      <GalleryStrip />
      <PastSpeakers />
      <ImpactBand />
      <Testimonials />
      <Press />
      <JoinSteps />
      <FAQ />
      <Partners />
      <CTA />
      <Newsletter />
    </>
  );
}
