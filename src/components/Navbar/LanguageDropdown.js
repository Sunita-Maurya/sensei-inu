import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleLangChange = (evt) => {
    const lang = evt.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <select
      onChange={handleLangChange}
      value={language}
      data-placeholder="Choose a Language..."
      className="bg-transparent  mt-3 px-5 text-black rounded-3xl  border-2 "
    >
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="es">Spanish</option>
      <option value="ch">Chinese</option>
    </select>
  );
};
export default LanguageDropdown;
