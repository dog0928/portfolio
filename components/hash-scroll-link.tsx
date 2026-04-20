"use client";

import type { MouseEvent, ReactNode } from "react";

type HashScrollLinkProps = {
  href: `#${string}`;
  className?: string;
  children: ReactNode;
};

export function HashScrollLink({ href, className, children }: HashScrollLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const targetId = href.slice(1);
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";

    window.history.pushState(null, "", href);
    target.scrollIntoView({ behavior, block: "start" });
  }

  return (
    <a href={href} className={className} draggable={false} onClick={handleClick}>
      {children}
    </a>
  );
}
