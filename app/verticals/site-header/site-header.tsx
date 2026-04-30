import { useCopy } from "@/shared/i18n";
import { Wrapper } from "@/shared/ui";
import { MobileMenu } from "./mobile-menu";
import { styles } from "./site-header.style";

/** Renders the primary site navigation for the audit landing page. */
export const SiteHeader = () => {
  const { header, site } = useCopy();

  return (
    <header className={styles}>
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
        <a href="#contact" data-slot="cta">
          {header.ctaLabel}
        </a>
      </Wrapper>
    </header>
  );
};
