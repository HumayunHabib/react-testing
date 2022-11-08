import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import useHover from "./../useHover";

const LanguageSelector = (props) => {
  const { i18n } = useTranslation();
  const ref = useRef();
  const on = useHover(ref.current);
  return (
    <div ref={ref}>
      {on ? "hi " : "hello"}
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
    </div>
  );
};

export default LanguageSelector;
