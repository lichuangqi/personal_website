"use client";

import { useActionState } from "react";

import { submitContact } from "@/actions/submit-contact";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContactFormState } from "@/lib/validations/contact";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );

  return (
    <section id="contact" className="section-spacing border-t border-border/60">
      <PageContainer>
        <AnimateOnScroll>
          <SectionHeading
            label="03 — Contact"
            title="Let's connect"
            description="Feel free to reach out — whether it's an opportunity, a question, or anything you'd like to discuss."
            className="mx-auto max-w-2xl text-center"
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <form
            action={formAction}
            className="mx-auto mt-8 max-w-xl rounded-lg border border-border bg-card p-5 md:p-8"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={!!state.fieldErrors?.name}
                />
                {state.fieldErrors?.name ? (
                  <p className="text-small text-destructive">
                    {state.fieldErrors.name}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={!!state.fieldErrors?.email}
                />
                {state.fieldErrors?.email ? (
                  <p className="text-small text-destructive">
                    {state.fieldErrors.email}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What's on your mind?"
                  className="min-h-[140px]"
                  aria-invalid={!!state.fieldErrors?.message}
                />
                {state.fieldErrors?.message ? (
                  <p className="text-small text-destructive">
                    {state.fieldErrors.message}
                  </p>
                ) : null}
              </div>

              {/* Honeypot — hidden from users, catches bots */}
              <div className="hidden" aria-hidden>
                <Label htmlFor="website">Website</Label>
                <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
            </div>

            {state.message ? (
              <p
                className={
                  state.success
                    ? "mt-4 text-small text-primary"
                    : "mt-4 text-small text-destructive"
                }
                role="status"
              >
                {state.message}
              </p>
            ) : null}

            <Button
              type="submit"
              className="mt-6 w-full"
              disabled={isPending}
            >
              {isPending ? "Sending..." : "Send message"}
            </Button>
          </form>
        </AnimateOnScroll>
      </PageContainer>
    </section>
  );
}
