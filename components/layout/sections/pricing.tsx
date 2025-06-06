import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

interface ServicePlanProps {
  title: string;
  price: string;
  description: string;
  buttonText: string;
  features: string[];
}

const servicePlans: ServicePlanProps[] = [
  {
    title: "Basic Web Presence",
    price: "Starting at $500",
    description:
      "Ideal for individuals or small businesses needing a simple online presence.",
    buttonText: "Inquire Now",
    features: [
      "Responsive Design",
      "Up to 5 Pages",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Month Post-Launch Support",
    ],
  },
  {
    title: "Custom Web Application",
    price: "Starting at $2500",
    description:
      "For businesses requiring dynamic features, custom functionalities, and database integration.",
    buttonText: "Get a Quote",
    features: [
      "Full-Stack Development",
      "Custom API Development",
      "Database Integration (SQL/NoSQL)",
      "User Authentication & Authorization",
      "3 Months Post-Launch Support",
    ],
  },
  {
    title: "E-commerce Solution",
    price: "Starting at $4000",
    description:
      "Comprehensive solution for online stores, including product management and secure payment gateways.",
    buttonText: "Discuss Project",
    features: [
      "Product Catalog & Management",
      "Shopping Cart & Checkout",
      "Payment Gateway Integration",
      "Order Management System",
      "6 Months Post-Launch Support",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services & Rates
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Tailored Solutions for Your Digital Needs
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Explore my service packages designed to bring your web ideas to life, from simple websites to complex applications.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {servicePlans.map(
          ({ title, price, description, buttonText, features }) => (
            <Card
              key={title}
              className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.0]"
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">{price}</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {features.map((feature) => (
                    <span key={feature} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{feature}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/#contact">
                    {buttonText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
