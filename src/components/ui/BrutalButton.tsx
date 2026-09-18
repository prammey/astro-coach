import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

// The one button used everywhere on the site.
//
// Pass `href` and it renders a Next.js <Link> that looks like a button.
// Leave `href` out and it renders a real <button> (for forms and clicks).
// Either way the look, hover "press" and focus ring are identical, so a
// button on the dashboard matches a button on the home page.

type Variant = "primary" | "accent" | "dark" | "ghost";
type Size = "sm" | "md" | "lg";

// Colors for each variant. Pick by meaning, not by color:
//   primary = the main action on a page
//   accent  = the eye-catching yellow call to action
//   dark    = a secondary action on a light surface
//   ghost   = a quiet action (cancel, back, manage)
const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-electric text-white",
  accent: "bg-yellow text-navy",
  dark: "bg-navy text-white",
  ghost: "bg-white text-navy",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

// Shared by every button: the border, the offset shadow, and the hover
// "press" where it moves down-right and its shadow disappears.
const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-lg border-[3px] border-ink font-bold " +
  "shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy " +
  "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none " +
  "active:translate-x-[4px] active:translate-y-[4px] " +
  "disabled:cursor-not-allowed disabled:opacity-60 " +
  "disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-brutal-sm";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

// A button that navigates somewhere.
type LinkButtonProps = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

// A button that does something on the page.
type ActionButtonProps = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export type BrutalButtonProps = LinkButtonProps | ActionButtonProps;

// Joins the base, variant, size and any extra classes into one string.
function buildClassName(variant: Variant, size: Size, className: string): string {
  return `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`.trim();
}

export default function BrutalButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: BrutalButtonProps) {
  const classes = buildClassName(variant, size, className);

  if (rest.href !== undefined) {
    return (
      <Link className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  // Here `rest.href` is undefined, and React ignores undefined attributes.
  const { type = "button", ...buttonProps } = rest;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
