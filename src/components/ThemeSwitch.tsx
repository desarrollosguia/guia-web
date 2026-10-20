import { Icon, type IconName } from "./Icon";
import { keyClassName } from "./Key";

export const THEME_CHOICES = ["system", "light", "dark"] as const;
type ThemeChoice = (typeof THEME_CHOICES)[number];

const ICON_BY_CHOICE: Record<ThemeChoice, IconName> = {
  system: "monitor",
  light: "sun",
  dark: "moon",
};

interface ThemeSwitchProps {
  label: string;
  labels: Record<ThemeChoice, string>;
}

/** Hidden until /theme.js runs: without JavaScript the theme follows the system. */
export function ThemeSwitch({ label, labels }: ThemeSwitchProps) {
  return (
    <div data-theme-switch hidden>
      <div role="group" aria-label={label} className="flex gap-2">
        {THEME_CHOICES.map((choice) => (
          <button
            key={choice}
            type="button"
            data-theme-value={choice}
            aria-pressed="false"
            aria-label={labels[choice]}
            className={keyClassName({ size: "sm", className: "w-key-sm" })}
          >
            <Icon name={ICON_BY_CHOICE[choice]} className="size-5" />
          </button>
        ))}
      </div>
    </div>
  );
}
