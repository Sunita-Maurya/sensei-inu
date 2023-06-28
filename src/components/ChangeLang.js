"use client";
import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const ChangeLang = ({ t }) => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const storedLang = localStorage.getItem("lang");
    i18n.changeLanguage(storedLang);
  }, [lang]);

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <div>
      <select
        className="selectBox"
        onChange={handleLangChange}
        name="lang"
        value={lang}
      >
        <option className="optionsMenu" value="en">
          English
        </option>
        <option className="optionsMenu" value="tm">
          Tamil(தமிழ்)
        </option>
        <option className="optionsMenu" value="tl">
          Telugu(తెలుగు)
        </option>
        <option className="optionsMenu" value="sp">
          Spanish(española)
        </option>
      </select>
      <p className="textToChange">{t("Hi")}</p>
      <p className="textToChange">{t("Actions")}</p>
    </div>
  );
};

export default ChangeLang;
