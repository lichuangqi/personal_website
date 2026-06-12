import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 md:mb-12", className)}>
      <p className="font-mono text-small uppercase tracking-widest text-accent">
        {label}
      </p>
      <h2 className="text-heading mt-2 font-semibold text-foreground">{title}</h2>
      {description ? (
        <p className="mt-3 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
