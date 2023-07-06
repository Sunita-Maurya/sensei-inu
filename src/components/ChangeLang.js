import React, { useEffect, useState } from "react";
import i18n from "./LangConfig";

const ChangeLang = ({langChange}) => {
 
  

  return (
    <div className="">
      <select
        data-placeholder="Choose a Language..."
        className=" selectBox bg-transparent  px-5 text-black rounded-3xl  border-2 "
        onChange={langChange}
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
      <p className="textToChange text-black">{i18n.t("Hi")}</p>
      <p className="textToChange text-black">{i18n.t("Actions")}</p>
      <p className="textToChange text-black">{i18n.t("hello")}</p>
    </div>
  );
};

export default ChangeLang;
