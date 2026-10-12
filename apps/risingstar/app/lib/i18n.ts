import en from "../../i18n/en.json";
import hi from "../../i18n/hi.json";

export type Locale = "en" | "hi";
export type Translations = typeof en;

export const dictionaries: Record<Locale, Translations> = { en, hi };

export function getCurrentLocale(): Locale {
  if (typeof window !== "undefined") {
    const match = document.cookie.match(/(?:^|; )school_lang=([^;]*)/);
    if (match && (match[1] === "hi" || match[1] === "en")) {
      return match[1] as Locale;
    }
    try {
      const saved = localStorage.getItem("school_lang");
      if (saved === "hi" || saved === "en") {
        return saved as Locale;
      }
    } catch {}
    return "en";
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { cookies } = require("next/headers");
    const cookieStore = cookies();
    const val = cookieStore.get("school_lang")?.value;
    if (val === "hi" || val === "en") {
      return val as Locale;
    }
  } catch {}
  return "en";
}

export function getTranslations(locale?: Locale): Translations {
  const lang = locale || getCurrentLocale();
  return dictionaries[lang] || en;
}

export const t: Translations = new Proxy({} as Translations, {
  get(_, prop: string) {
    const current = getTranslations();
    return (current as any)[prop];
  },
});
