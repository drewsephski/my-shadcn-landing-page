import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSection() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}

const items: {
  title: string;
  description: string;
  header: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}[] = [
  {
    title: "Responsive Web Design",
    description: "Crafting pixel-perfect, responsive interfaces that adapt seamlessly to any device.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
        <Image
          src="/hero1.png"
          alt="Hero Image 1"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Full-Stack Development",
    description: "Building robust and scalable web applications from front-end to back-end.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500 to-blue-500 items-center justify-center">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="80" stroke="#fff" strokeWidth="5" />
        </svg>
      </div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Interactive UI/UX",
    description: "Designing engaging user experiences with modern animations and intuitive interactions.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 items-center justify-center">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50 10 90 90 10 90" stroke="#fff" strokeWidth="5" />
        </svg>
      </div>
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Performance Optimization",
    description: "Ensuring fast loading times and smooth user experiences through optimized code.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500 to-blue-500 items-center justify-center">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 50C10 20 90 20 90 50C90 80 10 80 10 50Z" stroke="#fff" strokeWidth="5" />
        </svg>
      </div>
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    title: "The Future of AI",
    description: "Discover how artificial intelligence is shaping tomorrow's world.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 items-center justify-center">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#fff" strokeWidth="5" />
          <path d="M20 50L50 20L80 50L50 80L20 50Z" fill="#fff" />
        </svg>
      </div>
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "The World of Data Science",
    description: "Explore the power of data and its insights.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
        <Image
          src="/TitanBlog.png"
          alt="Titan Blog Image"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Cloud Computing Solutions",
    description: "Leveraging cloud platforms for scalable and resilient infrastructure.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 items-center justify-center">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10L20 40H35L35 90H65L65 40H80L50 10Z" fill="#fff" />
        </svg>
      </div>
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
];