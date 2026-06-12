import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

import { cn } from "@/lib/utils";

type BrandIconProps = {
  className?: string;
};

/** Official GitHub brand mark (Simple Icons). */
export function GitHubBrandIcon({ className }: BrandIconProps) {
  return <SiGithub className={cn("h-4 w-4 shrink-0", className)} aria-hidden />;
}

/** Official LinkedIn brand mark (Font Awesome Brands). */
export function LinkedInBrandIcon({ className }: BrandIconProps) {
  return <FaLinkedin className={cn("h-4 w-4 shrink-0", className)} aria-hidden />;
}
