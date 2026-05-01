import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/shared/lib/cn";
import { styles } from "./skip-link.style";

/** Props accepted by the skip link component. */
export type SkipLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  /** Required in-page target for the skip link. */
  href: `#${string}`;
  /** Visible text shown when the skip link receives focus. */
  children: ReactNode;
};

/** Renders a keyboard-accessible skip link that appears on focus. */
export const SkipLink = ({ children, className, ...props }: SkipLinkProps) => {
  return (
    <a {...props} className={cn(styles, className)}>
      {children}
    </a>
  );
};
