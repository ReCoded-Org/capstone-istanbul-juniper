import React from "react";
import { Layout } from "antd";
import { useTranslation } from "react-i18next";
import PuzzleGameContainer from "./../PuzzleGameContainer";
import "./index.css";

const PuzzlePageContent = () => {
  const [t] = useTranslation();
  const { Content } = Layout;
  return (
    <Content className="puzzlePage__content">
      <div className="puzzlePage__content__titles">
        <h2 className="puzzlePage__content__title">
          {t("games.puzzleGame.title")}
        </h2>
        <p className="puzzlePage__content__subtitle">
          {t("games.puzzleGame.subtitle")}
        </p>
      </div>
      <PuzzleGameContainer />
    </Content>
  );
};

export default PuzzlePageContent;
