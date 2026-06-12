import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
};

export function PageContainer({
  children,
  className,
  style,
  as: Component = "div",
}: PageContainerProps) {
  return (
    <Component className={cn("page-container", className)} style={style}>
      {children}
    </Component>
  );
}
