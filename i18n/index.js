import en from "./en";
import ar from "./ar";

export default {
  baseUrl: "https://buroojair.com",
  locales: [
    {
      code: "ar",
      iso: "ar-SA",
      name: "Arabic",
    },
    {
      code: "en",
      iso: "en-US",
      name: "English",
    },
  ],
  defaultLocale: "ar",
  strategy: "no_prefix",
  vueI18n: {
    fallbackLocale: "ar",
    messages: {
      en,
      ar,
    },
  },
};
