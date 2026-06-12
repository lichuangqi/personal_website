"use client";

import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useCallback } from "react";

import { PageContainer } from "@/components/layout/page-container";
import {
  GitHubBrandIcon,
  LinkedInBrandIcon,
} from "@/components/shared/social-brand-icons";
import { TechTag } from "@/components/shared/tech-tag";
import { siteConfig } from "@/config/site";
import { profileContent } from "@/content/profile";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: GitHubBrandIcon,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: LinkedInBrandIcon,
  },
] as const;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;

    aboutSection.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [prefersReducedMotion]);

  return (
    <section className="section-spacing relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-background opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
      />

      <PageContainer className="relative">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-small uppercase tracking-widest text-accent">
            {siteConfig.author.status}
          </p>

          <h1 className="text-display mt-4 font-semibold text-foreground">
            {siteConfig.name}
          </h1>

          <p className="text-subheading mt-4 max-w-2xl font-medium text-foreground/90">
            {profileContent.headline}
          </p>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            {profileContent.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#experience"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-small font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View experience
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6 text-small font-medium text-foreground transition-colors hover:bg-muted"
              >
                Get in touch
              </Link>
            </div>

            <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md border border-border px-3 text-small font-medium text-foreground transition-colors hover:bg-muted sm:flex-none sm:px-4"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-border/60 pt-8">
            <p className="font-mono text-small uppercase tracking-widest text-muted-foreground">
              Tech Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
              {profileContent.skillTags.map((skill) => (
                <TechTag key={skill} label={skill} />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center md:mt-20"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <button
            type="button"
            onClick={scrollToAbout}
            aria-label="Scroll to about section"
            className="relative z-10 rounded-full p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowDown
              className={
                prefersReducedMotion
                  ? "h-5 w-5"
                  : "h-5 w-5 motion-safe:animate-bounce"
              }
            />
          </button>
        </motion.div>
      </PageContainer>
    </section>
  );
}
