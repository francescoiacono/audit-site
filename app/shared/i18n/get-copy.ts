import { copy, type SiteCopy } from "./copy";
import { defaultLocale, type Locale } from "./locales";

/** Returns the copy bundle for a supported locale. */
export const getCopy = (locale: Locale = defaultLocale): SiteCopy => {
  return copy[locale];
};
