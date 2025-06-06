import DiscordIcon from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NavLink from "next/link";


export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <div>
                  Ready to start a project?
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#09f] to-primary bg-clip-text">
                    Let&apos;s Connect!
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to say hello! 👋
            </CardContent>

            <CardFooter>
              <Button asChild>
                <NavLink href="/#contact">
                  Contact Me
                </NavLink>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
