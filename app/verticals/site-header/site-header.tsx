import { Wrapper } from "../../shared/ui";
import { styles } from "./site-header.style";

/** Navigation item displayed in the site header. */
type NavigationItem = {
  /** Anchor target for the navigation link. */
  href: string;
  /** Visible label for the navigation link. */
  label: string;
};

const navigationItems: NavigationItem[] = [
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case studies" },
  { href: "#contact", label: "Contact" },
];

/** Renders the primary site navigation for the audit landing page. */
export const SiteHeader = () => {
  return (
    <header className={styles}>
      <Wrapper data-slot="inner">
        <a href="/" data-slot="brand" aria-label="audit.iacono.dev home">
          audit.iacono.dev
        </a>
        <nav data-slot="nav" aria-label="Primary navigation">
          {navigationItems.map(({ href, label }) => (
            <a key={href} href={href} data-slot="link">
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" data-slot="cta">
          Book an audit
        </a>
      </Wrapper>
    </header>
  );
};
