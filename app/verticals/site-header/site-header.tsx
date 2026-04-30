import { useCopy } from "@/shared/i18n";
import { Wrapper } from "@/shared/ui";
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
        <nav data-slot="nav" aria-label={site.primaryNavigationAriaLabel}>
          {header.navigationItems.map(({ href, label }) => (
            <a key={href} href={href} data-slot="link">
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" data-slot="cta">
          {header.ctaLabel}
        </a>
      </Wrapper>
    </header>
  );
};
