import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
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
    "/": "/",
    "/pathnames": {
      de: "/pfadnamen",
    },
  },
});
