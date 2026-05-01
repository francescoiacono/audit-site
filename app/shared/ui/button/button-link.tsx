import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/shared/lib/cn";
import {
  buttonRecipe,
  type ButtonColor,
  type ButtonIconMotion,
  type ButtonSize,
  type ButtonVariant,
} from "./button.style";

/** Props accepted by the shared button link component. */
export type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color"> & {
  /** Visible content that gives the link its accessible name. */
  children: ReactNode;
  /** Visual treatment applied to the link. */
  variant?: ButtonVariant;
  /** Color role applied to the selected variant. */
  color?: ButtonColor;
  /** Link size controlling height, spacing, and text scale. */
  size?: ButtonSize;
  /** Decorative icon rendered before the visible content. */
  iconLeft?: ReactNode;
  /** Decorative icon rendered after the visible content. */
  iconRight?: ReactNode;
  /** Optional motion applied to the right icon on hover and focus. */
  iconMotion?: ButtonIconMotion;
};

/** Renders a semantic link with shared button visual variants. */
export const ButtonLink = ({
  children,
  className,
  color = "primary",
  iconLeft,
  iconMotion,
  iconRight,
  size = "md",
  variant = "solid",
  ...props
}: ButtonLinkProps) => {
  return (
    <a
      {...props}
      className={cn(buttonRecipe({ color, size, variant }), className)}
      data-icon-motion={iconMotion}
    >
      {iconLeft && (
        <span aria-hidden="true" data-slot="icon-left">
          {iconLeft}
        </span>
      )}
      <span data-slot="content">{children}</span>
      {iconRight && (
        <span aria-hidden="true" data-slot="icon-right">
          {iconRight}
        </span>
      )}
    </a>
  );
};
