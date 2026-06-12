import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { TechTag } from "@/components/shared/tech-tag";
import { experienceContent } from "@/content/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing border-t border-border/60">
      <PageContainer>
        <AnimateOnScroll>
          <SectionHeading
            label="02 — Experience"
            title="Where I have delivered impact"
            description="Structured for quick scanning — role, outcomes, and stack per position."
          />
        </AnimateOnScroll>

        <div className="space-y-6 md:space-y-8">
          {experienceContent.map((item, index) => (
            <AnimateOnScroll key={item.id} delay={index * 0.08}>
              <article className="rounded-lg border border-border bg-card p-5 md:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-subheading font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-medium text-primary">{item.company}</p>
                  </div>
                  <div className="shrink-0 text-left sm:text-right">
                    <p className="font-mono text-small text-foreground">
                      {item.period}
                    </p>
                    <p className="text-small text-muted-foreground">
                      {item.location}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-muted-foreground">{item.summary}</p>

                <ul className="mt-4 space-y-2">
                  {item.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-2 text-small text-foreground/90"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <TechTag key={tech} label={tech} />
                  ))}
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
