"use client";

import { useEffect, useRef } from "react";

export function CursorOrb() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canUseCustomCursor =
      window.matchMedia("(hover: hover)").matches &&
      window.matchMedia("(pointer: fine)").matches;

    if (!canUseCustomCursor) {
      return;
    }

    const orb = orbRef.current;

    if (!orb) {
      return;
    }

    document.documentElement.dataset.customCursor = "ready";

    let hoveredInteractive = false;
    let pressed = false;
    let visible = false;

    const applyTransform = (clientX: number, clientY: number) => {
      const scale = pressed ? 0.92 : hoveredInteractive ? 1.55 : 1;

      orb.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%) scale(${scale})`;
      orb.dataset.visible = visible ? "true" : "false";
      orb.dataset.interactive = hoveredInteractive ? "true" : "false";
    };

    const updateInteractiveState = (eventTarget: EventTarget | null) => {
      if (!(eventTarget instanceof Element)) {
        hoveredInteractive = false;
        return;
      }

      hoveredInteractive = Boolean(
        eventTarget.closest(
          "a, button, [role='button'], input, textarea, select, summary, label[for]"
        )
      );
    };

    const handlePointerMove = (event: PointerEvent) => {
      visible = true;
      updateInteractiveState(event.target);
      applyTransform(event.clientX, event.clientY);
    };

    const handlePointerDown = (event: PointerEvent) => {
      pressed = true;
      applyTransform(event.clientX, event.clientY);
    };

    const handlePointerUp = (event: PointerEvent) => {
      pressed = false;
      applyTransform(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      visible = false;
      hoveredInteractive = false;
      pressed = false;
      orb.dataset.visible = "false";
      orb.dataset.interactive = "false";
    };

    const handlePointerOver = (event: PointerEvent) => {
      updateInteractiveState(event.target);
      applyTransform(event.clientX, event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointercancel", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);
    document.addEventListener("pointerover", handlePointerOver);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointercancel", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
      document.removeEventListener("pointerover", handlePointerOver);
      delete document.documentElement.dataset.customCursor;
    };
  }, []);

  return <div ref={orbRef} aria-hidden className="cursor-orb" />;
}
