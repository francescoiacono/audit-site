import { useEffect, useRef, useState } from "react";

import { useCopy } from "@/shared/i18n";
import { ButtonLink, Wrapper } from "@/shared/ui";
import { MobileMenu } from "./mobile-menu";
import { scrollSentinelStyles, styles } from "./site-header.style";

/** Renders the primary site navigation for the audit landing page. */
export const SiteHeader = () => {
  const { header, site } = useCopy();
  const [isHeaderDocked, setIsHeaderDocked] = useState(false);
  const scrollSentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollSentinel = scrollSentinelRef.current;

    if (!scrollSentinel) {
      return undefined;
    }

    /** Updates the docked header state when the page-top sentinel leaves the viewport. */
    const handleIntersection: IntersectionObserverCallback = ([entry]) => {
      setIsHeaderDocked(!entry?.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0 });

    observer.observe(scrollSentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={scrollSentinelRef} className={scrollSentinelStyles} aria-hidden="true" />
      <header className={styles} data-scrolled={isHeaderDocked ? "true" : "false"}>
        <Wrapper data-slot="inner">
          <a href="/" data-slot="brand" aria-label={site.homeAriaLabel}>
            {site.name}
          </a>
          <MobileMenu
            navigationItems={header.navigationItems}
            menuButtonLabel={header.menuButtonLabel}
            ctaLabel={header.ctaLabel}
            navigationAriaLabel={site.primaryNavigationAriaLabel}
          />
          <nav data-slot="desktop-nav" aria-label={site.primaryNavigationAriaLabel}>
            <ul data-slot="desktop-nav-list">
              {header.navigationItems.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} data-slot="desktop-link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink
            href="#contact"
            data-slot="desktop-cta"
            iconMotion="slide-right"
            variant="outline"
            size="sm"
          >
            {header.ctaLabel}
          </ButtonLink>
        </Wrapper>
      </header>
    </>
  );
};
