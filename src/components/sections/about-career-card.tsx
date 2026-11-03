"use client";

import { BriefcaseBusiness, GraduationCap, MapPin, PanelsTopLeft } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { profileContent } from "@/content/profile";

const items = [
  {
    label: "Based in",
    value: profileContent.about.highlights.location,
    icon: MapPin,
  },
  {
    label: "Experience",
    value: profileContent.about.highlights.experience,
    icon: BriefcaseBusiness,
  },
  {
    label: "Education",
    value: profileContent.about.highlights.education,
    icon: GraduationCap,
  },
  {
    label: "Open to",
    value: profileContent.about.highlights.focus,
    icon: PanelsTopLeft,
  },
] as const;

export function AboutCareerCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative h-full rounded-lg border border-border bg-card p-5 sm:p-6">
      <div
        aria-hidden
        className="grid-background pointer-events-none absolute inset-0 overflow-hidden rounded-lg opacity-35"
      />
      <div className="relative grid gap-3 sm:grid-cols-2">
        {items.map(({ label, value, icon: Icon }) => (
          <motion.div
            key={label}
            className="relative rounded-md border border-border/80 bg-background/90 p-4 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:z-10 hover:border-primary/35 hover:bg-background"
            whileHover={
              prefersReducedMotion
                ? undefined
                : {
                    y: -5,
                    scale: 1.018,
                    boxShadow: "0 18px 38px -20px rgb(36 93 156 / 0.32)",
                  }
            }
            whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
            transition={{
              type: "spring",
              stiffness: 230,
              damping: 24,
              mass: 0.75,
            }}
          >
            <Icon className="h-5 w-5 text-primary" aria-hidden />
            <p className="mt-4 font-mono text-small uppercase tracking-wide text-muted-foreground">
              {label}
            </p>
            <p className="mt-1 font-medium leading-snug text-foreground">{value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
