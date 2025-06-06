"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Alex Chen",
    userName: "Lead Developer at InnovateCorp",
    comment: "Drew's ability to tackle complex frontend challenges is truly impressive. He delivered clean, efficient code that significantly improved our application's performance.",
    rating: 5,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Maria Rodriguez",
    userName: "Project Manager at Global Solutions",
    comment: "Working with Drew was a pleasure. His attention to detail and commitment to delivering high-quality solutions made our project a huge success. Highly recommend!",
    rating: 5,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David Lee",
    userName: "CTO of TechStart",
    comment: "Drew quickly grasped our backend architecture and contributed valuable insights, optimizing our API responses and database queries. A strong asset to any team.",
    rating: 4,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Kim",
    userName: "UX Designer at Creative Agency",
    comment: "Drew consistently translates design mockups into pixel-perfect, responsive web interfaces. His understanding of UI/UX principles is exceptional.",
    rating: 5,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Tom Jackson",
    userName: "Freelance Client",
    comment: "Drew built my personal website, and I couldn't be happier with the result. He was professional, responsive, and delivered exactly what I envisioned.",
    rating: 4,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Jessica White",
    userName: "Colleague at WebDev Co.",
    comment: "Drew is a highly collaborative and knowledgeable developer. He's always eager to learn new technologies and share his expertise with the team.",
    rating: 5,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <Badge variant="outline" className="w-fit">Endorsements</Badge>
        <h2 className="text-3xl md:text-5xl font-bold text-center">What My Colleagues & Clients Say</h2>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground mt-4">Hear from those I&apos;ve worked with about my skills and contributions.</p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
