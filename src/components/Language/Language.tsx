import brazil from "../../assets/image/brazil.svg";
import use from "../../assets/image/use.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Locale } from "../../enum";
import { useEffect, useState } from "react";
import { useTranslation } from "../../context";

const locales = [
  {
    code: Locale.ENGLISH,
  },
  {
    code: Locale.PORTUGUESE,
  },
];

export const Language = () => {
  const [locale, setLocale] = useState("English");
  const { handleAppLanguageChange } = useTranslation();

  useEffect(() => {
    const language = localStorage.getItem("language");

    if (!language) {
      handleLanguageChange("pt");
    }
  }, []);

  const handleLanguageChange = (e: string) => {
    handleAppLanguageChange(e);
  };

  return (
    <div aria-label="language" className="flex gap-2">
      <Tippy content="Brasil">
        <div onClick={() => handleLanguageChange("pt")}>
          <img src={brazil} alt="icon brazil" />
        </div>
      </Tippy>
      <Tippy content="English">
        <div onClick={() => handleLanguageChange("en")}>
          <img src={use} alt="icon use" />
        </div>
      </Tippy>
    </div>
  );
};
