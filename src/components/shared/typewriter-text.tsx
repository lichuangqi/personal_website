"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  className?: string;
  startDelay?: number;
};

export function TypewriterText({
  text,
  className,
  startDelay = 500,
}: TypewriterTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const isComplete = visibleCharacters >= text.length;
  const visibleText = prefersReducedMotion
    ? text
    : text.slice(0, visibleCharacters);

  useEffect(() => {
    if (prefersReducedMotion || visibleCharacters >= text.length) return;

    const previousCharacter = text[visibleCharacters - 1];
    const punctuationPause = previousCharacter && /[,.]/.test(previousCharacter);
    const delay =
      visibleCharacters === 0
        ? startDelay
        : punctuationPause
          ? 105
          : 22 + ((visibleCharacters * 17) % 24);

    const timeout = window.setTimeout(() => {
      setVisibleCharacters((current) => Math.min(current + 1, text.length));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [prefersReducedMotion, startDelay, text, visibleCharacters]);

  return (
    <span className={`relative block ${className ?? ""}`} aria-label={text}>
      <span aria-hidden className="invisible block">
        {text}
      </span>
      <span aria-hidden className="absolute inset-0 block">
        {visibleText}
        {!prefersReducedMotion ? (
          <AnimatePresence>
            {!isComplete ? (
              <motion.span
                key="cursor"
                className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.16em] rounded-full bg-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.15, 0.65, 1] }}
              />
            ) : null}
          </AnimatePresence>
        ) : null}
      </span>
    </span>
  );
}
