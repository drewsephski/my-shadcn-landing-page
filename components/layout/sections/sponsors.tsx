"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
interface technologiesProps {
  name: string;
}

const technologies: technologiesProps[] = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Express" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "Tailwind CSS" },
  { name: "Shadcn UI" },
  { name: "Git" },
  { name: "Docker" },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="w-full max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Technologies I Work With
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {technologies.map(({ name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
