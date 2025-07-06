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
    "pt", // Portuguese
    "hi", // Hindi
    "th", // Thai
    "id", // Indonesian
    "ar", // Arabic
  ],

  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/pathnames": {
      de: "/pfadnamen",
    },
  },
});
