export const routing = {
  locales: [
    "en", // English
    "vi", // Vietnamese
    "de", // German
    "fr", // French
    "es", // Spanish
    "it", // Italian
    "ja", // Japanese
    "zh", // Chinese
    "ko", // Korean
    "ru", // Russian
  ],

  defaultLocale: "en",

  pathnames: {
    "/": "/", // Home route, same in all languages

    "/pathnames": {
      en: "/pathnames",
      vi: "/duong-dan",
      de: "/pfadnamen",
      fr: "/chemins",
      es: "/rutas",
      it: "/percorsi",
      ja: "/パス名",
      zh: "/路徑名稱",
      ko: "/경로이름",
      ru: "/пути",
    },
    "/pricing": {
      en: "/pricing",
      vi: "/gia-ca",
      de: "/preise",
      fr: "/tarifs",
      es: "/precios",
      it: "/prezzi",
      ja: "/価格",
      zh: "/定价",
      ko: "/가격",
      ru: "/цены",
    },
    // Example: about page
    "/blog": {
      en: "/about",
      vi: "/gioi-thieu",
      de: "/uber-uns",
      fr: "/a-propos",
      es: "/acerca-de",
      it: "/chi-siamo",
      ja: "/約",
      zh: "/關於我們",
      ko: "/소개",
      ru: "/о-нас",
    },
  },
};
