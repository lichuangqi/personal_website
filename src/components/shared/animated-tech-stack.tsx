"use client";

import { motion, useReducedMotion } from "motion/react";

type AnimatedTechStackProps = {
  skills: readonly string[];
  ariaLabel?: string;
  revealOnScroll?: boolean;
  delay?: number;
  className?: string;
};

export function AnimatedTechStack({
  skills,
  ariaLabel = "Technology stack",
  revealOnScroll = false,
  delay = 1.15,
  className = "mt-4",
}: AnimatedTechStackProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.ul
      className={`${className} flex max-w-5xl flex-wrap gap-2 sm:gap-2.5`}
      aria-label={ariaLabel}
      initial="hidden"
      animate={revealOnScroll ? undefined : "visible"}
      whileInView={revealOnScroll ? "visible" : undefined}
      viewport={revealOnScroll ? { once: true, amount: 0.35 } : undefined}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: prefersReducedMotion ? 0 : 0.055,
          },
        },
      }}
    >
      {skills.map((skill, index) => (
        <motion.li
          key={skill}
          className="group inline-flex max-w-full items-center gap-2 rounded-full border border-border/90 bg-background/75 px-3 py-1.5 font-mono text-small text-muted-foreground shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-primary/35 hover:bg-background hover:text-foreground"
          variants={{
            hidden: prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 0, y: 8, scale: 0.96 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 260, damping: 22 },
            },
          }}
          whileHover={
            prefersReducedMotion
              ? undefined
              : { y: -3, scale: 1.035, transition: { type: "spring", stiffness: 320, damping: 20 } }
          }
          whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
        >
          <span
            aria-hidden
            className={
              index % 3 === 0
                ? "h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                : "h-1.5 w-1.5 shrink-0 rounded-full bg-primary/65"
            }
          />
          <span className="truncate">{skill}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
