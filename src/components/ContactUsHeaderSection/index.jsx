import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";

const ContactUsHeaderSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="contactUs__title">{t("contact.contactUsHeaderSection.title")}</h2>
      <p className="contactUs__context">
        {t("contactUs.contactUsHeaderSection.subtitle")}
      </p>
    </>
  );
};

export default ContactUsHeaderSection;