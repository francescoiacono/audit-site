import type { Locale } from "./locales";

/** Copy for a single header navigation link. */
export type HeaderNavigationItemCopy = {
  /** Anchor target for the navigation link. */
  href: string;
  /** Visible label for the navigation link. */
  label: string;
};

/** Site-level labels shared by routes and verticals. */
export type SiteIdentityCopy = {
  /** Public site name displayed in the header. */
  name: string;
  /** Accessible label for the home link. */
  homeAriaLabel: string;
  /** Accessible label for the primary navigation landmark. */
  primaryNavigationAriaLabel: string;
};

/** Copy displayed by the site header vertical. */
export type SiteHeaderCopy = {
  /** Navigation links displayed in the primary navigation. */
  navigationItems: readonly HeaderNavigationItemCopy[];
  /** Visible label for the mobile navigation menu button. */
  menuButtonLabel: string;
  /** Visible label for the header call-to-action link. */
  ctaLabel: string;
};

/** Copy for a hero call-to-action link. */
export type HeroCallToActionCopy = {
  /** Anchor target for the call-to-action link. */
  href: string;
  /** Visible label for the call-to-action link. */
  label: string;
};

/** Copy for one checklist item in the hero visual. */
export type HeroVisualChecklistItemCopy = {
  /** Visible checklist item label. */
  label: string;
};

/** Copy for one metric in the hero visual. */
export type HeroVisualMetricCopy = {
  /** Visible metric label. */
  label: string;
  /** Visible metric score. */
  score: string;
  /** Visible metric status. */
  status: string;
};

/** Copy displayed in the decorative hero visual. */
export type HeroVisualCopy = {
  /** Visible browser address shown inside the visual. */
  browserUrl: string;
  /** Visible title for the checklist card. */
  checklistTitle: string;
  /** Checklist items displayed in the visual. */
  checklistItems: readonly HeroVisualChecklistItemCopy[];
  /** Visible title for the primary score card. */
  scoreTitle: string;
  /** Visible primary audit score. */
  scoreValue: string;
  /** Visible primary audit score status. */
  scoreStatus: string;
  /** Metrics displayed in the score summary card. */
  metrics: readonly HeroVisualMetricCopy[];
};

/** Copy displayed by the hero vertical. */
export type HeroCopy = {
  /** Main page heading. */
  title: string;
  /** Supporting text displayed under the main heading. */
  description: string;
  /** Primary hero call-to-action link. */
  primaryCta: HeroCallToActionCopy;
  /** Secondary hero call-to-action link. */
  secondaryCta: HeroCallToActionCopy;
  /** Decorative audit visual copy. */
  visual: HeroVisualCopy;
};

/** Copy owned by the home route. */
export type HomeCopy = {
  /** Browser title for the home route. */
  metaTitle: string;
};

/** Copy displayed by the root error boundary. */
export type ErrorCopy = {
  /** Title used when an unexpected error is rendered. */
  unexpectedTitle: string;
  /** Details used when an unexpected error is rendered. */
  unexpectedDetails: string;
  /** Title used for non-404 route errors. */
  routeErrorTitle: string;
  /** Title used for 404 route errors. */
  notFoundTitle: string;
  /** Details used for 404 route errors. */
  notFoundDetails: string;
};

/** Complete copy bundle for one locale. */
export type SiteCopy = {
  /** Site-wide labels shared by multiple verticals. */
  site: SiteIdentityCopy;
  /** Header-specific copy. */
  header: SiteHeaderCopy;
  /** Hero-specific copy. */
  hero: HeroCopy;
  /** Home route copy. */
  home: HomeCopy;
  /** Error boundary copy. */
  error: ErrorCopy;
};

/** Localized copy bundles keyed by locale. */
export const copy = {
  en: {
    site: {
      name: "audit.iacono.dev",
      homeAriaLabel: "audit.iacono.dev home",
      primaryNavigationAriaLabel: "Primary navigation",
    },
    header: {
      navigationItems: [
        { href: "#services", label: "Services" },
        { href: "#case-studies", label: "Case studies" },
        { href: "#contact", label: "Contact" },
      ],
      menuButtonLabel: "Menu",
      ctaLabel: "Book an audit",
    },
    hero: {
      title: "Audits for clearer, faster, more accessible websites.",
      description:
        "I review the frontend details that affect trust, search visibility, and conversion, then turn the findings into a focused plan your site can act on.",
      primaryCta: { href: "#contact", label: "Book an audit" },
      secondaryCta: { href: "#services", label: "See services" },
      visual: {
        browserUrl: "yourwebsite.com",
        checklistTitle: "Audit checklist",
        checklistItems: [
          { label: "SEO" },
          { label: "Accessibility" },
          { label: "Performance" },
          { label: "Best practices" },
        ],
        scoreTitle: "Audit score",
        scoreValue: "92",
        scoreStatus: "Excellent",
        metrics: [
          { label: "SEO", score: "90", status: "Good" },
          { label: "Accessibility", score: "94", status: "Excellent" },
          { label: "Performance", score: "88", status: "Good" },
        ],
      },
    },
    home: {
      metaTitle: "Website Audits | audit.iacono.dev",
    },
    error: {
      unexpectedTitle: "Oops!",
      unexpectedDetails: "An unexpected error occurred.",
      routeErrorTitle: "Error",
      notFoundTitle: "404",
      notFoundDetails: "The requested page could not be found.",
    },
  },
} as const satisfies Record<Locale, SiteCopy>;
