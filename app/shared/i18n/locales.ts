/** Locale codes supported by the site copy layer. */
export const locales = ["en"] as const;

/** Locale code supported by the site copy layer. */
export type Locale = (typeof locales)[number];

/** Default locale used before locale-aware routing is introduced. */
export const defaultLocale: Locale = "en";

/** Returns whether a string is one of the supported locale codes. */
export const isLocale = (value: string): value is Locale => {
  return locales.includes(value as Locale);
};
