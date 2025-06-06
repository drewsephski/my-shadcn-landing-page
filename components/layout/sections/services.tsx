import { Badge } from "@/components/ui/badge";
import FeaturesSectionDemo from "@/components/ui/features-section-demo-2";

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What I Offer
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        I provide a range of web development services to help bring your ideas to life.
      </h3>
      {/* The new FeaturesSectionDemo component will handle the layout */}
      <FeaturesSectionDemo />
    </section>
  );
};
