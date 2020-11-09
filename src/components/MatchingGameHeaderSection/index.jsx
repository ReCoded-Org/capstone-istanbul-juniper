import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";

const MatchingGameHeaderSection = () => {
  const [t] = useTranslation();
  return (
    <>
      <h2 className="matchingGame__title">{t("games.matchingGame.title")}</h2>
      <p className="matchingGame__context">
        {t("games.matchingGame.subtitle")}
      </p>
    </>
  );
};

export default MatchingGameHeaderSection;
