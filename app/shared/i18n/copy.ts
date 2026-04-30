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

/** Copy owned by the home route. */
export type HomeCopy = {
  /** Browser title for the home route. */
  metaTitle: string;
  /** Visible page heading. */
  title: string;
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
    home: {
      metaTitle: "Website Audits | audit.iacono.dev",
      title: "Audits for clearer, faster, more accessible websites.",
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
