import * as React from "react";

export const LANGUAGES = {
    SPANISH: "ES",
    ENGLISH: "EN"
  };

export const LanguageContext = React.createContext(
    {
        lang: LANGUAGES.SPANISH,
        switchLang: () => {},
    }
  );
  