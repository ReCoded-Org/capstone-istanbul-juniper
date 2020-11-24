import React from "react";
import { Layout, Popover, Row } from "antd";
import { useTranslation } from "react-i18next";
import PuzzleGameContainer from "./../PuzzleGameContainer";
import { QuestionCircleTwoTone } from "@ant-design/icons";

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

      <Row className="puzzlePage_content--questionMark">
        <Popover
          content={t("games.puzzleGame.howToPlayDescription")}
          title={t("games.puzzleGame.howToPlayTitle")}
          placement="topRight"
        >
          <QuestionCircleTwoTone className="questionMark" />
        </Popover>
      </Row>

      <PuzzleGameContainer />
    </Content>
  );
};

export default PuzzlePageContent;
