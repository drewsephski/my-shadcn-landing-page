import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Lightbulb",
    title: "Innovative Solutions",
    description:
      "I thrive on solving complex problems with creative and efficient code, always seeking the best approach.",
  },
  {
    icon: "Rocket",
    title: "Performance Optimization",
    description:
      "I focus on building fast and responsive applications, ensuring a smooth user experience.",
  },
  {
    icon: "Accessibility",
    title: "Accessible Design",
    description:
      "I prioritize creating inclusive web experiences that are usable by everyone, regardless of ability.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure Development",
    description:
      "I implement security best practices to protect applications and user data.",
  },
  {
    icon: "RefreshCw",
    title: "Continuous Learning",
    description:
      "I stay up-to-date with the latest industry trends and technologies to deliver cutting-edge solutions.",
  },
  {
    icon: "Users",
    title: "Collaborative Spirit",
    description:
      "I enjoy working in teams, contributing to a positive and productive development environment.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Why Choose Me
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        My Strengths as a Developer
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        I bring a unique blend of technical expertise, problem-solving abilities, and a passion for creating exceptional web experiences.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
