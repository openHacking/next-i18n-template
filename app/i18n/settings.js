export const fallbackLang = "en";
export const languages = [fallbackLang, "zh"];
export const defaultNS = "translation";

export function getOptions(lang = fallbackLang, ns = defaultNS) {
  return {
    // debug: true,
    supportedLangs: languages,
    fallbackLang,
    lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
