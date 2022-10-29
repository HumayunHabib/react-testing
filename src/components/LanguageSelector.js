import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <img
        src="https://flagcdn.com/16x12/tr.png"
        title="Türkçe"
        onClick={() => i18n.changeLanguage("tr")}
        alt="Turkish Flag"
      />

      <img
        src="https://flagcdn.com/16x12/gb.png"
        title="English"
        onClick={() => i18n.changeLanguage("en")}
        alt="Great Britain Flag"
      />
    </>
  );
};

export default LanguageSelector;
