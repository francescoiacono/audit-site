import { CheckCircle2, Lock } from "lucide-react";

import type { HeroVisualCopy } from "@/shared/i18n";
import { styles } from "./hero-visual.style";

/** Props accepted by the decorative hero visual. */
type HeroVisualProps = {
  /** Copy displayed inside the coded audit visual. */
  copy: HeroVisualCopy;
};

/** Renders a decorative coded audit visual for desktop hero layouts. */
export const HeroVisual = ({ copy }: HeroVisualProps) => {
  return (
    <div aria-hidden="true" className={styles}>
      <div data-slot="canvas">
        <div data-slot="browser">
          <div data-slot="browser-bar">
            <span data-slot="browser-dot" />
            <span data-slot="browser-dot" />
            <span data-slot="browser-dot" />
          </div>
          <div data-slot="toolbar">
            <span data-slot="toolbar-arrow" />
            <span data-slot="toolbar-arrow" />
            <span data-slot="address">
              <Lock focusable="false" size={12} strokeWidth={2} />
              {copy.browserUrl}
            </span>
            <span data-slot="toolbar-lines">
              <span />
              <span />
            </span>
          </div>
          <div data-slot="page">
            <div data-slot="media">
              <span data-slot="sun" />
              <span data-slot="mountain-large" />
              <span data-slot="mountain-small" />
            </div>
            <div data-slot="page-copy">
              <span data-slot="line-lg" />
              <span data-slot="line-md" />
              <span data-slot="line-sm" />
              <span data-slot="button-shape" />
            </div>
            <span data-slot="tile" />
            <span data-slot="tile" />
            <span data-slot="tile" />
            <span data-slot="line-md" />
            <span data-slot="line-md" />
            <span data-slot="line-md" />
          </div>
        </div>

        <div data-slot="checklist-card">
          <p data-slot="card-title">{copy.checklistTitle}</p>
          <ul data-slot="checklist">
            {copy.checklistItems.map(({ label }) => (
              <li key={label}>
                <CheckCircle2 focusable="false" size={18} strokeWidth={2.4} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div data-slot="score-card">
          <p data-slot="card-title">{copy.scoreTitle}</p>
          <div data-slot="score-ring">
            <span>{copy.scoreValue}</span>
          </div>
          <p data-slot="score-status">{copy.scoreStatus}</p>
        </div>

        <div data-slot="metrics-card">
          {copy.metrics.map(({ label, score, status }) => (
            <div key={label} data-slot="metric">
              <span data-slot="metric-head">
                <span data-slot="metric-label">{label}</span>
                <span data-slot="metric-score">{score}</span>
              </span>
              <span data-slot="metric-bar">
                <span />
              </span>
              <span data-slot="metric-status">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
