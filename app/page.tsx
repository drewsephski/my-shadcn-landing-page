import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";

import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { ProjectsSection } from "@/components/layout/sections/projects";
import { BentoGridSection } from "@/components/layout/sections/bento-grid-section";

export const metadata = {
  title: "John Doe - Web Developer Portfolio",
  description: "Showcasing the work and expertise of a passionate web developer.",
  openGraph: {
    type: "website",
    url: "https://yourportfolio.com",
    title: "John Doe - Web Developer Portfolio",
    description: "Showcasing the work and expertise of a passionate web developer.",
    images: [
      {
        url: "https://yourportfolio.com/og-image.jpg", // Placeholder, replace with actual image
        width: 1200,
        height: 630,
        alt: "John Doe - Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://yourportfolio.com",
    title: "John Doe - Web Developer Portfolio",
    description: "Showcasing the work and expertise of a passionate web developer.",
    images: [
      "https://yourportfolio.com/twitter-image.jpg", // Placeholder, replace with actual image
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <ProjectsSection />
      <CommunitySection />
      <BentoGridSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
