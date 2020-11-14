import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";

const ContactUsHeaderSection = () => {
  const { t } = useTranslation();
  return (
    <div className="contactUs__headerSection">
      <h2 className="contactUs__headerSection__title">
        {t("contact.headerSection.title")}
      </h2>
      <p className="contactUs__headerSection__context">
        {t("contact.headerSection.subtitle")}
      </p>
    </div>
  );
};

export default ContactUsHeaderSection;
