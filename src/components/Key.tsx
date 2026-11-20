import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type KeySize = "lg" | "md" | "sm" | "xs";
export type KeyTone = "surface" | "inverse";

const BASE =
  "key relative inline-flex flex-col items-center justify-center rounded-md border shadow-key transition duration-fast ease-standard active:key-press active:shadow-key-pressed aria-disabled:opacity-40 aria-disabled:shadow-none aria-disabled:pointer-events-none";

const TONES: Record<KeyTone, string> = {
  surface: "bg-surface text-content border-border-strong hover:bg-surface-raised",
  inverse: "bg-inverse text-on-inverse border-inverse hover:bg-content-muted",
};

const SIZES: Record<KeySize, string> = {
  lg: "h-key-lg gap-2 px-6 type-key-lg",
  md: "h-key-md px-8 type-key-md",
  sm: "h-key-sm gap-1 px-5 type-label",
  xs: "size-key-xs gap-1 type-label",
};

const BARS: Record<KeySize, string> = {
  lg: "h-bar-thick-lg w-bar-lg",
  md: "",
  sm: "h-bar-thick-sm w-bar-sm",
  xs: "h-bar-thick-xs w-bar-xs",
};

/** The relief bar gives way to the underline of a selected key (current link or pressed toggle). */
const BAR_STATE = "key-selected:hidden";

const SELECTED_LABEL: Record<KeySize, string> = {
  lg: "key-selected:underline decoration-content decoration-3 underline-offset-8",
  md: "",
  sm: "key-selected:underline decoration-content decoration-2 underline-offset-4",
  xs: "",
};

/** Keys with an icon have no text to underline, so they get a short line instead. */
const ICON_LINE = "bg-content rounded-full h-line-thick-sm w-line-sm hidden key-selected:block";

interface KeyStyleOptions {
  size: KeySize;
  tone?: KeyTone | undefined;
  className?: string | undefined;
}

export const keyClassName = ({ size, tone = "surface", className }: KeyStyleOptions): string =>
  [BASE, TONES[tone], SIZES[size], className].filter(Boolean).join(" ");

interface KeyLabelProps {
  size: KeySize;
  relief?: boolean | undefined;
  icon?: boolean | undefined;
  children: ReactNode;
}

export function KeyLabel({ size, relief = false, icon = false, children }: KeyLabelProps) {
  return (
    <>
      {icon ? children : <span className={SELECTED_LABEL[size]}>{children}</span>}
      {relief && BARS[size] && (
        <span aria-hidden="true" className={`bg-accent rounded-full ${BARS[size]} ${BAR_STATE}`} />
      )}
      {icon && <span aria-hidden="true" className={ICON_LINE} />}
    </>
  );
}

type KeyLinkProps = ComponentPropsWithoutRef<"a"> &
  KeyStyleOptions & { relief?: boolean | undefined };

export function KeyLink({ size, tone, relief, className, children, ...rest }: KeyLinkProps) {
  return (
    <a className={keyClassName({ size, tone, className })} {...rest}>
      <KeyLabel size={size} relief={relief}>
        {children}
      </KeyLabel>
    </a>
  );
}

type KeyButtonProps = ComponentPropsWithoutRef<"button"> &
  KeyStyleOptions & { relief?: boolean | undefined };

export function KeyButton({ size, tone, relief, className, children, ...rest }: KeyButtonProps) {
  return (
    <button type="button" className={keyClassName({ size, tone, className })} {...rest}>
      <KeyLabel size={size} relief={relief}>
        {children}
      </KeyLabel>
    </button>
  );
}

interface KeyCapProps extends KeyStyleOptions {
  relief?: boolean | undefined;
  children: ReactNode;
}

/** A key that is only drawn, not interactive (the F and J of the footer phrase). */
export function KeyCap({ size, tone, relief, className, children }: KeyCapProps) {
  return (
    <span className={keyClassName({ size, tone, className })}>
      <KeyLabel size={size} relief={relief}>
        {children}
      </KeyLabel>
    </span>
  );
}
