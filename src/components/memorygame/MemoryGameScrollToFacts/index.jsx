import React from "react";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import "./index.css";

const ScrollToFacts = () => {
  const [t] = useTranslation();
  return (
    // HashLink is being used to redirect user to fact list,
    // Check https://github.com/rafgraph/react-router-hash-link for 'react-router-hash-link'
    <HashLink to="#memoryGameFactList" smooth>
      <Button className="scrollToFactsButton" type="primary">
        {t("games.memoryGame.scrollToFactsButtonText")}
      </Button>
    </HashLink>
  );
};

export default ScrollToFacts;
