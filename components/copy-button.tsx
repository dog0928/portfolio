"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

type CopyButtonProps = {
  text: string;
  label?: string;
};

export function CopyButton({ text, label = "コピー" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setCopied(false);
    }, 1600);
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className="border-white/20 bg-white/10 text-white hover:bg-white/18 hover:text-white"
      aria-live="polite"
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? "クリップボードにコピーしました" : label}
    </Button>
  );
}
