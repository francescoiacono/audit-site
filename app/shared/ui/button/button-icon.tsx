import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

import { cn } from "@/shared/lib/cn";
import {
  buttonRecipe,
  type ButtonColor,
  type ButtonSize,
  type ButtonVariant,
} from "./button.style";

/** Props accepted by the shared icon-only button component. */
export type ButtonIconProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "color"
> & {
  /** Accessible label describing the icon-only action. */
  "aria-label": string;
  /** Decorative icon rendered inside the button. */
  children: ReactNode;
  /** Visual treatment applied to the button. */
  variant?: ButtonVariant;
  /** Color role applied to the selected variant. */
  color?: ButtonColor;
  /** Button size controlling the square hit target. */
  size?: ButtonSize;
  /** Shows a progress spinner and disables the button while work is pending. */
  loading?: boolean;
};

/** Renders an accessible icon-only native button with shared visual variants. */
export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      children,
      className,
      color = "primary",
      disabled,
      loading = false,
      size = "md",
      type = "button",
      variant = "ghost",
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;
    const ariaBusy = loading ? true : props["aria-busy"];

    return (
      <button
        {...props}
        ref={ref}
        aria-busy={ariaBusy}
        className={cn(buttonRecipe({ color, shape: "icon", size, variant }), className)}
        data-loading={loading ? "true" : undefined}
        disabled={isDisabled}
        type={type}
      >
        {loading ? (
          <span aria-hidden="true" data-slot="spinner" />
        ) : (
          <span aria-hidden="true" data-slot="icon">
            {children}
          </span>
        )}
      </button>
    );
  },
);

ButtonIcon.displayName = "ButtonIcon";
