import javascript from "@/assets/javascript.png";
import nextjs from "@/assets/nextjs.png";
import pokemon from "@/assets/pokemon.png";
import pokemonthumbnail from "@/assets/pokemonthumbnail.png";
import prisma from "@/assets/prisma.png";
import blogthumbnail from "@/assets/thumbnail.png";
import typescript from "@/assets/typescript.png";
import { BorderBeam } from "@/components/ui/border-beam";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import BlurFade from "@/components/ui/blur-fade";
import { createFileRoute } from "@tanstack/react-router";

const thumbnails = [
  {
    id: 1,
    title: "Full Stack App",
    desc: "DevThoughts",
    thumbnail: blogthumbnail,
    tools: {
      javascript: javascript,
      typescript: typescript,
      nextjs: nextjs,
      prisma: prisma,
    },
  },
  {
    id: 2,
    title: "Pokemon API App",
    desc: "Pokemon Dex",
    thumbnail: pokemonthumbnail,
    tools: {
      javascript: javascript,
      typescript: typescript,
      nextjs: nextjs,
      pokemon: pokemon,
    },
  },
];

export const Route = createFileRoute("/projects")({
  component: Projects,
});

export default function Projects() {
  return (
    <>
    <BlurFade delay={0.25} inView>
      <h1 className="text-2xl text-center mb-4 font-chivo">Projects</h1>
    </BlurFade>
      <div className="mx-auto max-w-screen-xl px-4 py-24 lg:px-12 flex gap-4">
        {thumbnails.map((thumbnail, idx) => (
      <BlurFade key={thumbnail.id} delay={0.50 + idx * 0.5} inView>
          <TooltipProvider>
            <Card className="relative mb-4 w-96 h-40 flex items-center justify-center">
              <BorderBeam
                size={200}
                duration={12 * thumbnail.id}
                delay={9 * thumbnail.id}
                colorFrom="#000000"
                colorTo="#57AD5B"
              />
              <Tooltip>
                <TooltipTrigger>
                  <div className="relative font-chivo">
                      <div className="flex flex-col">
                        <CardTitle className="text-xl md:text-2xl lg:text-3xl text-[#57AD5B]">
                          {thumbnail.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-sm md:text-base lg:text-lg">
                          {thumbnail.desc}
                        </CardDescription>
                        <div className="flex gap-2">
                          {Object.entries(thumbnail.tools).map(
                            ([toolName, toolIcon]) => (
                              <img
                                key={toolName}
                                src={toolIcon}
                                alt={`${toolName} icon`}
                                className="w-6 h-6"
                              />
                            )
                          )}
                        </div>
                      </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <img
                    src={thumbnail.thumbnail}
                    alt="Thumbnail"
                    className="w-[500px] h-[350px] rounded shadow-lg transition-transform transform group-hover:scale-105"
                  />
                </TooltipContent>
              </Tooltip>
            </Card>
          </TooltipProvider>
        </BlurFade>
        ))}
      </div>
    </>
  );
}
