import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [
    "ar",
    "de",
    "en",
    "es",
    "fr",
    "hi",
    "pt",
    "pt",
    "ru",
    "sv",
    "tl",
    "uk",
    "zh",
  ],

  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/blog": "/blog",
    // If all locales use the same pathname, a single
    // external path can be used for all locales
    "/fable/[slug]": {
      ar: "/fable/[slug]",
      de: "/fabeln/[slug]",
      en: "/fable/[slug]",
      es: "/fabula/[slug]",
      fr: "/fable/[slug]",
      hi: "/fable/[slug]",
      pt: "/fabula/[slug]",
      ru: "/fable/[slug]",
      sv: "/fabler/[slug]",
      tl: "/pabula/[slug]",
      uk: "/fable/[slug]",
      zh: "/fable/[slug]",
    },
  },
});
