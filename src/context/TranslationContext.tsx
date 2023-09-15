// import { useRouter } from "next/router";
import { useNavigate } from "react-router-dom";

import { IntlProvider } from "react-intl";
import { createContext, useContext, useEffect, useState } from "react";


import enLocale from "../locales/en.json";
import ptLocale from "../locales/pt.json";
import { Locale } from "../enum";


interface ITranslationProviderProps {
  children: JSX.Element;
}

interface ITranslationContext {
  locale: any;
  handleAppLanguageChange: (locale: any) => void;
}

const loadLocaleData = (locale: any) => {
  switch (locale) {
    case Locale.ENGLISH:
      return enLocale;
    case Locale.PORTUGUESE:
      return ptLocale;
    default:
      return enLocale;
  }
};

export const TranslationContext = createContext({} as ITranslationContext);

export function TranslationProvider({ children }: ITranslationProviderProps) {
  const [locale, setLocale] = useState(Locale.ENGLISH);
  const [messages, setMessages] = useState<Record<string, any>>(enLocale);

//   const { pathname, asPath, push } = useRouter();
  const navigate = useNavigate();

  const handleAppLanguageChange = (locale: any) => {
   //  const postSlug = window.location.pathname.split("/")[2];

   //  if (
   //    window.location.pathname !== "/" 
   //    // window.location.pathname !== "/[slug]"
   //  ) {
   //    navigate(`/${locale}/${postSlug}`);
   //  }

    localStorage.setItem("language", locale);

    setLocale(locale);
    setMessages(loadLocaleData(locale));
  };

  useEffect(() => {
    const language = localStorage.getItem("language");

    if (language) {
      handleAppLanguageChange(language as any);
    }
  }, []);

  return (
    <TranslationContext.Provider value={{ locale, handleAppLanguageChange }}>
      <IntlProvider
        locale={locale}
        messages={messages}
        defaultLocale={Locale.ENGLISH}
      >
        {children}
      </IntlProvider>
    </TranslationContext.Provider>
  );
}

export const useTranslation = () => useContext(TranslationContext);
