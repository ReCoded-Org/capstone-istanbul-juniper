import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Progress, Row, Col } from "antd";
import { QuestionOutlined } from "@ant-design/icons";

const ProgressSection = ({
  // an object
  // check containers/GamesPage/index.jsx to see an example
  progressData,
}) => {
  const nextLevel = progressData.currentLevel + 1;
  const [t] = useTranslation();
  const currentLanguage = i18next.language;
  const gridSpanObj = {
    currLevelSpan: 7,
    progressBarSpan: 10,
    nextLevelSpan: 7,
    previousRewardSpan: { span: 8, offset: 3 },
    nextRewardSpan: { span: 8, offset: 2 },
  };

  if (currentLanguage === "ar") {
    gridSpanObj.previousRewardSpan = { span: 8, pull: 4 };
    gridSpanObj.nextRewardSpan = { span: 8, pull: 4 };
  }

  return (
    <div className="progressSectionContainer">
      <Row justify="center">
        <h3 className="progressSectionContainer___xp">
          {/* example: 50/100 Experience Point */}
          {t("gamesPage.experiencePoint", {
            currentXP: progressData.currentXP,
          })}
        </h3>
      </Row>
      <Row justify="center" className="progressSectionContainer___row">
        <Col xs={gridSpanObj.currLevelSpan}>
          <h3
            className={`progressSectionContainer___row___header ${
              currentLanguage === "ar"
                ? "progressSectionContainer___row___rightSideLevel"
                : "progressSectionContainer___row___leftSideLevel"
            }`}
          >
            {/* example: Level 5 */}
            {t("gamesPage.level", {
              currentLevel: progressData.currentLevel,
            })}
          </h3>
        </Col>
        <Col xs={gridSpanObj.progressBarSpan}>
          <Progress
            percent={progressData.currentXP}
            className="progressSectionContainer___row___progressBar"
            strokeColor="#4BA747"
            trailColor="white"
            strokeWidth={20}
            showInfo={false}
          />
        </Col>
        <Col xs={gridSpanObj.nextLevelSpan}>
          <h3
            className={`progressSectionContainer___row___header ${
              currentLanguage === "ar"
                ? "progressSectionContainer___row___leftSideLevel"
                : "progressSectionContainer___row___rightSideLevel"
            }`}
          >
            {t("gamesPage.level", { currentLevel: nextLevel })}
          </h3>
        </Col>
      </Row>
      <Row className="progressSectionContainer___row">
        <Col xs={gridSpanObj.previousRewardSpan}>
          <h3 className="progressSectionContainer___row___header">
            {t("gamesPage.previousReward")}
          </h3>
          <div className="progressSectionContainer___row___prevRewardDiv">
            <img
              src={progressData.prevRewardIcon}
              alt={t("gamesPage.badgeDescription")}
              className="progressSectionContainer___row___prevRewardDiv___reward"
            />
          </div>
          <h3 className="progressSectionContainer___row___header">
            {/* Example: Recycle badge */}
            {t("gamesPage.badgeDescription")}
          </h3>
        </Col>
        <Col xs={gridSpanObj.nextRewardSpan}>
          <h3 className="progressSectionContainer___row___header">
            {t("gamesPage.nextReward")}
          </h3>
          <div className="progressSectionContainer___row___header___questionMark">
            <QuestionOutlined />
          </div>

          <h3 className="progressSectionContainer___row___header">
            {/* Reward for next level is unknown. */}
            {t("gamesPage.unknownNextReward")}
          </h3>
        </Col>
      </Row>
    </div>
  );
};

export default ProgressSection;
