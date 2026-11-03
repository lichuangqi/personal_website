"use client";

import { useReducedMotion } from "motion/react";
import Link, { type LinkProps } from "next/link";
import { type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";

type SmoothScrollLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

export function SmoothScrollLink({
  href,
  children,
  onClick,
  ...props
}: SmoothScrollLinkProps) {
  const prefersReducedMotion = useReducedMotion();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || typeof href !== "string" || !href.startsWith("#")) {
      return;
    }

    const targetId = decodeURIComponent(href.slice(1));
    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", href);
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
