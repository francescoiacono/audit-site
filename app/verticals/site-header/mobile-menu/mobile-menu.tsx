import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import type { HeaderNavigationItemCopy } from "@/shared/i18n";
import { styles } from "./mobile-menu.style";

const navigationId = "site-header-mobile-navigation";

/** Props accepted by the mobile header navigation menu. */
type MobileMenuProps = {
  /** Navigation links displayed in the mobile menu. */
  navigationItems: readonly HeaderNavigationItemCopy[];
  /** Visible label for the menu disclosure button. */
  menuButtonLabel: string;
  /** Visible label for the mobile menu call-to-action link. */
  ctaLabel: string;
  /** Accessible label for the mobile navigation landmark. */
  navigationAriaLabel: string;
};

/** Renders the mobile navigation disclosure for the site header. */
export const MobileMenu = ({
  navigationItems,
  menuButtonLabel,
  ctaLabel,
  navigationAriaLabel,
}: MobileMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  /** Closes the mobile navigation menu after a navigation or dismiss action. */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /** Toggles the mobile navigation menu from the disclosure button. */
  const toggleMenu = () => {
    setIsMenuOpen((currentIsMenuOpen) => !currentIsMenuOpen);
  };

  // Close the mobile menu when Escape is pressed or when a pointer event
  // occurs outside the menu while it's open.
  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Node) || menuRef.current?.contains(target)) {
        return;
      }

      setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  return (
    <div ref={menuRef} className={styles} data-menu-open={isMenuOpen ? "true" : "false"}>
      <button
        ref={menuButtonRef}
        type="button"
        data-slot="button"
        aria-label={menuButtonLabel}
        aria-controls={navigationId}
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <X aria-hidden="true" data-slot="icon" focusable="false" size={22} strokeWidth={2} />
        ) : (
          <Menu aria-hidden="true" data-slot="icon" focusable="false" size={22} strokeWidth={2} />
        )}
      </button>
      <nav
        id={navigationId}
        data-slot="nav"
        aria-label={navigationAriaLabel}
        aria-hidden={!isMenuOpen}
      >
        <ul data-slot="nav-list">
          {navigationItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href} data-slot="link" onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" data-slot="cta" onClick={closeMenu}>
              {ctaLabel}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
