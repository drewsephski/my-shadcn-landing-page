import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Full-Stack Web Development",
      description:
        "Building robust and scalable web applications from front-end to back-end.",
      icon: <IconTerminal2 />,
    },
    {
      title: "AI Agent Development",
      description:
        "Creating intelligent AI agents for automation, data analysis, and more.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Custom API Development",
      description:
        "Designing and implementing secure, high-performance APIs for seamless integration.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Database Design & Optimization",
      description:
        "Expertise in SQL and NoSQL databases for efficient data storage and retrieval.",
      icon: <IconCloud />,
    },
    {
      title: "Cloud Deployment & Management",
      description:
        "Deploying and managing applications on leading cloud platforms like AWS, Azure, and GCP.",
      icon: <IconCloud />,
    },
    {
      title: "Frontend UI/UX Design",
      description:
        "Crafting intuitive and engaging user interfaces with modern design principles.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Ongoing Maintenance & Support",
      description:
        "Providing continuous support, updates, and performance monitoring for your applications.",
      icon: <IconHelp />,
    },
    {
      title: "Scalable Architecture Solutions",
      description:
        "Designing architectures that grow with your business, ensuring high availability and performance.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};