import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { cn } from "../lib/cn";
import { styles } from "./wrapper.style";

/** HTML elements supported by the layout wrapper component. */
type WrapperElement = Extract<
  ElementType,
  "div" | "main" | "section" | "header" | "footer" | "nav"
>;

/** Props accepted by the reusable layout wrapper. */
type WrapperProps = HTMLAttributes<HTMLElement> & {
  /** Semantic HTML element to render for this wrapper. */
  as?: WrapperElement;
  /** Content constrained by the wrapper width. */
  children: ReactNode;
};

/** Renders a centered content container with consistent horizontal spacing. */
export function Wrapper({ as: Component = "div", children, className, ...props }: WrapperProps) {
  return (
    <Component className={cn(styles, className)} {...props}>
      {children}
    </Component>
  );
}
