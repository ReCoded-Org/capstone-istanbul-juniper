import React from 'react';
import "./index.css";
import { useTranslation } from "react-i18next";

const ContacUsHeaderSection=()=>{
const { t } = useTranslation();
return (
    <>
    <h2 className="contactUs__title">{t("home.contactUs.title")}</h2>
      <p className="contactUs__context">
        {t("home.contactUs.subtitle")}
      </p>
    </>
)
};

export default ContactUsHeaderSection;