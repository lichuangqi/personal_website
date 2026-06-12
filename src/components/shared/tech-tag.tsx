import { cn } from "@/lib/utils";

type TechTagProps = {
  label: string;
  className?: string;
};

export function TechTag({ label, className }: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center rounded-md border border-border bg-muted/50 px-2 py-1 font-mono text-small text-muted-foreground sm:px-2.5",
        className,
      )}
    >
      <span className="truncate">{label}</span>
    </span>
  );
}
