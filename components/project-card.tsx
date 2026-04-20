"use client";

import { ArrowUpRight } from "lucide-react";
import { type PointerEvent, useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Project = {
  name: string;
  description: string;
  href: string;
  stack: string[];
  tone: string;
};

type ProjectCardProps = {
  index: number;
  project: Project;
};

export function ProjectCard({ index, project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    const card = cardRef.current;
    const background = backgroundRef.current;
    const overlay = overlayRef.current;
    const content = contentRef.current;

    if (!card || !background || !overlay || !content) {
      return;
    }

    const rotateX = -y * 2.1;
    const rotateY = x * 3;
    const rotateZ = x * 0.45 + (index % 2 === 0 ? -0.18 : 0.18);
    const shiftX = x * 2.8;
    const shiftY = y * 2.2 - 4;

    card.style.transform =
      `translate3d(${shiftX}px, ${shiftY}px, 0) ` +
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;

    background.style.transform = `translate3d(${-x * 7}px, ${-y * 7}px, 0) scale(1.1)`;
    overlay.style.transform = `translate3d(${-x * 4}px, ${-y * 4}px, 0) scale(1.06)`;
    content.style.transform = `translate3d(${x * 2.2}px, ${y * 1.6}px, 0)`;
  }

  function resetTransforms() {
    const card = cardRef.current;
    const background = backgroundRef.current;
    const overlay = overlayRef.current;
    const content = contentRef.current;

    if (!card || !background || !overlay || !content) {
      return;
    }

    card.style.transform = "translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
    background.style.transform = "translate3d(0px, 0px, 0) scale(1.08)";
    overlay.style.transform = "translate3d(0px, 0px, 0) scale(1.04)";
    content.style.transform = "translate3d(0px, 0px, 0)";
  }

  return (
    <div
      className="group [perspective:1400px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTransforms}
    >
      <div
        ref={cardRef}
        className="transition-[transform,box-shadow] duration-200 ease-out will-change-transform group-hover:shadow-[0_28px_80px_-42px_rgba(15,23,42,0.34)] [transform-style:preserve-3d]"
      >
        <Card className="relative h-full overflow-hidden border-border/70 bg-transparent">
          <div
            ref={backgroundRef}
            className={cn(
              "absolute -inset-x-[10%] -inset-y-[14%] opacity-90 transition-transform duration-200 ease-out",
              project.tone
            )}
          />
          <div
            ref={overlayRef}
            className="absolute -inset-x-[8%] -inset-y-[12%] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.6),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.12)_100%)] transition-transform duration-200 ease-out"
          />
          <div ref={contentRef} className="relative transition-transform duration-200 ease-out">
            <CardHeader className="gap-4 pt-8">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <CardTitle className="text-2xl">{project.name}</CardTitle>
                </div>
                <a
                  href={project.href}
                  target={project.href.startsWith("#") ? undefined : "_blank"}
                  rel={project.href.startsWith("#") ? undefined : "noreferrer"}
                  className="grid size-11 place-items-center rounded-full border border-border/60 bg-background/85 text-foreground transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:rotate-3"
                >
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
              <CardDescription className="max-w-xl text-sm leading-7 text-foreground/70">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
