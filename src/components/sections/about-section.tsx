import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { AboutLocationMap } from "@/components/sections/about-location-map";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { profileContent } from "@/content/profile";

export function AboutSection() {
  const { about } = profileContent;

  return (
    <section id="about" className="section-spacing border-t border-border/60">
      <PageContainer>
        <AnimateOnScroll>
          <SectionHeading label="01 — About" title={about.title} />
        </AnimateOnScroll>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <AnimateOnScroll delay={0.1} className="order-2 lg:order-1">
            <p className="text-foreground">{about.bio}</p>

            <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4 sm:p-5">
              <p className="font-mono text-small uppercase tracking-wide text-accent">
                Looking for
              </p>
              <p className="mt-2 text-foreground">{about.lookingFor.summary}</p>
              <p className="mt-1 text-small text-muted-foreground">
                {about.lookingFor.preferences}
              </p>
            </div>

            <Link
              href="#experience"
              className="mt-6 inline-block text-small font-medium text-primary transition-colors hover:text-primary/80"
            >
              View experience →
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15} className="order-1 lg:order-2">
            <AboutLocationMap />
          </AnimateOnScroll>
        </div>
      </PageContainer>
    </section>
  );
}
