import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
}

const projectList: ProjectProps[] = [
  {
    image: "/hero3.webp", // Placeholder image
    title: "Project Alpha",
    description: "A comprehensive web application built for managing tasks and projects.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    githubLink: "https://github.com/drewsephski/",
    liveLink: "https://project-alpha.example.com",
  },
  {
    image: "/hero5.webp", // Placeholder image
    title: "Project Beta",
    description: "An e-commerce platform featuring a robust product catalog and secure payment gateway.",
    technologies: ["Vue.js", "Nuxt.js", "Express.js", "PostgreSQL"],
    githubLink: "https://github.com/drewsephski/",
    liveLink: "https://project-beta.example.com",
  },
  {
    image: "/hero4.webp", // Placeholder image
    title: "Project Gamma",
    description: "A real-time chat application with user authentication and persistent messaging.",
    technologies: ["Angular", "Firebase", "WebSockets"],
    githubLink: "https://github.com/drewsephski/",
    liveLink: "https://project-gamma.example.com",
  },
  {
    image: "/hero2.webp", // Placeholder image
    title: "Project Delta",
    description: "A responsive and user-friendly e-commerce platform for small businesses.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    githubLink: "https://github.com/drewsephski/",
    liveLink: "https://project-delta.example.com",
  },
  {
    image: "/nucleus-hero.png", // Placeholder image
    title: "Project Epsilon",
    description: "A feature-rich and highly customizable web application for managing tasks and projects.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    githubLink: "https://github.com/drewsephski/",
    liveLink: "https://project-epsilon.example.com",
  },
  {
    image: "/placeholder-modern.webp", // Placeholder image
    title: "Project Zeta",
    description: "A modern and responsive web application for managing tasks and projects.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    githubLink: "https://github.com/drewsephski/",
    liveLink: "https://project-zeta.example.com",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="container py-2 sm:py-12">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          My Work
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Recent Projects
        </h2>
        <p className="max-w-screen-md mx-auto text-xl text-muted-foreground mt-4">
          Explore a selection of my recent web development projects, showcasing my skills in various technologies and problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 max-w-md">
            <CardHeader className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-t-lg object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </CardHeader>
            <CardContent className="flex-grow p-4 group-hover:bg-gray-50 dark:group-hover:bg-gray-800 transition-colors duration-300 ease-in-out">
              <CardTitle className="text-2xl font-bold mb-2">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground mb-2">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-primary-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-2 flex justify-between">
              <Button asChild variant="outline" className="hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
                <Link href={project.githubLink} target="_blank" rel="https://github.com/drewsephski" className="hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
                  GitHub
                </Link>
              </Button>
              {project.liveLink && (
                <Button asChild className="hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
