import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/shared/lib/cn";
import {
  buttonRecipe,
  type ButtonColor,
  type ButtonIconMotion,
  type ButtonSize,
  type ButtonVariant,
  visuallyHidden,
} from "./button.style";

export type { ButtonColor, ButtonIconMotion, ButtonSize, ButtonVariant } from "./button.style";

/** Props accepted by the shared button component. */
export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> & {
  /** Visible content that gives the button its accessible name. */
  children: ReactNode;
  /** Visual treatment applied to the button. */
  variant?: ButtonVariant;
  /** Color role applied to the selected variant. */
  color?: ButtonColor;
  /** Button size controlling height, spacing, and text scale. */
  size?: ButtonSize;
  /** Decorative icon rendered before the visible content. */
  iconLeft?: ReactNode;
  /** Decorative icon rendered after the visible content. */
  iconRight?: ReactNode;
  /** Optional motion applied to the right icon on hover and focus. */
  iconMotion?: ButtonIconMotion;
  /** Assistive status announced while the button is loading. */
  loadingLabel?: string;
  /** Shows a progress spinner and disables the button while work is pending. */
  loading?: boolean;
};

/** Renders an accessible native button with shared visual variants. */
export const Button = ({
  children,
  className,
  color = "primary",
  disabled,
  iconLeft,
  iconMotion,
  iconRight,
  loading = false,
  loadingLabel = "Loading",
  size = "md",
  type = "button",
  variant = "solid",
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;
  const ariaBusy = loading ? true : props["aria-busy"];

  return (
    <>
      <button
        {...props}
        aria-busy={ariaBusy}
        className={cn(buttonRecipe({ color, size, variant }), className)}
        data-icon-motion={iconMotion}
        data-loading={loading ? "true" : undefined}
        disabled={isDisabled}
        type={type}
      >
        {loading && <span aria-hidden="true" data-slot="spinner" />}
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
      </button>
      <span aria-atomic="true" className={visuallyHidden} role="status">
        {loading ? loadingLabel : undefined}
      </span>
    </>
  );
};
