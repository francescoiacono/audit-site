import { createContext, type ReactNode, useContext } from "react";

import type { SiteCopy } from "./copy";
import { getCopy } from "./get-copy";
import { defaultLocale, type Locale } from "./locales";

/** Runtime i18n state available to React components. */
type I18nContextValue = {
  /** Active locale for the current render. */
  locale: Locale;
  /** Copy bundle for the active locale. */
  copy: SiteCopy;
};

/** Props accepted by the i18n provider. */
type I18nProviderProps = {
  /** Route tree rendered with the active locale. */
  children: ReactNode;
  /** Active locale for the current render. */
  locale?: Locale;
};

const defaultContextValue = {
  locale: defaultLocale,
  copy: getCopy(defaultLocale),
} satisfies I18nContextValue;

const I18nContext = createContext<I18nContextValue>(defaultContextValue);

/** Provides localized copy to components without prop drilling. */
export const I18nProvider = ({ children, locale = defaultLocale }: I18nProviderProps) => {
  const value = {
    locale,
    copy: getCopy(locale),
  } satisfies I18nContextValue;

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

/** Returns the active i18n context for the current render. */
export const useI18n = (): I18nContextValue => {
  return useContext(I18nContext);
};

/** Returns the active localized copy bundle for the current render. */
export const useCopy = (): SiteCopy => {
  return useI18n().copy;
};
