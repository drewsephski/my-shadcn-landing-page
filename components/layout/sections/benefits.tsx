import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Code",
    title: "Frontend Development",
    description:
      "Proficient in React, Next.js, and modern JavaScript/TypeScript frameworks to build interactive user interfaces.",
  },
  {
    icon: "Server",
    title: "Backend Development",
    description:
      "Experienced with Node.js, Express, and database management (MongoDB, PostgreSQL) for robust server-side applications.",
  },
  {
    icon: "Palette",
    title: "UI/UX Design Principles",
    description:
      "Strong understanding of UI/UX principles, ensuring intuitive and visually appealing user experiences.",
  },
  {
    icon: "GitBranch",
    title: "Version Control & Deployment",
    description:
      "Skilled in Git for version control and deploying applications using various platforms.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Skills</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Expertise
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            I possess a diverse skill set in web development, allowing me to build robust and scalable applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
