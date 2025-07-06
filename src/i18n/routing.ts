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
