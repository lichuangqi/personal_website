import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import {
  GitHubBrandIcon,
  LinkedInBrandIcon,
} from "@/components/shared/social-brand-icons";
import { siteConfig } from "@/config/site";

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

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <PageContainer className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-small font-medium text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-small text-muted-foreground">
            {siteConfig.author.role}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>

        <p className="text-small text-muted-foreground">
          © {year} {siteConfig.name}
        </p>
      </PageContainer>
    </footer>
  );
}
