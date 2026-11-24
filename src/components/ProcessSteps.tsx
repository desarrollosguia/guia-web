import type { Dictionary } from "@/i18n/types";

interface ProcessStepsProps {
  steps: Dictionary["process"]["steps"];
}

const pad = (position: number): string => String(position).padStart(2, "0");

/** The relief line and the steps. The scroll effects live in global.css. */
export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="process flex flex-1 gap-6 lg:gap-10">
      <div aria-hidden="true" className="bg-border w-1 shrink-0 self-stretch rounded-full">
        <div className="process-line bg-accent h-full origin-top rounded-full" />
      </div>
      <ol className="flex flex-col gap-6 lg:gap-10">
        {steps.map((step, index) => (
          <li key={step.name} className="process-step flex gap-6">
            <span aria-hidden="true" className="process-number type-label text-accent tabular-nums">
              {pad(index + 1)}
            </span>
            <div className="max-w-step flex flex-col gap-2">
              <h3 className="process-name type-title text-content">{step.name}</h3>
              <p className="process-text type-body text-content-muted">{step.line}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
