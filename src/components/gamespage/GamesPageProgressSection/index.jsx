import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Progress, Row, Col } from "antd";
import { QuestionOutlined } from "@ant-design/icons";

// Antd Col spans. Arabic language requires different grid setup. This object makes conditional grid setting easier.
const GRID_SPANS = {
  currLevel: 7,
  progressBar: 10,
  nextLevel: 7,
  previousReward: { span: 8, offset: 3 },
  nextReward: { span: 8, offset: 2 },
};

const ProgressSection = ({
  // an object
  // check containers/GamesPage/index.jsx to see an example
  progressData,
}) => {
  const nextLevel = progressData.currentLevel + 1;
  const [t] = useTranslation();
  const currentLanguage = i18next.language;

  // Since changing language to arabic revert page layout, previously defined offsets cause misalignments
  if (currentLanguage === "ar") {
    GRID_SPANS.previousReward = { span: 8, pull: 4 };
    GRID_SPANS.nextReward = { span: 8, pull: 4 };
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
        <Col xs={GRID_SPANS.currLevel}>
          <h3
            className={`progressSectionContainer___row___header ${
              // Arabic reverts positions of level texts. Adaptive class naming is required for appropriate alignment and padding.
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
        <Col xs={GRID_SPANS.progressBar}>
          <Progress
            percent={progressData.currentXP}
            className="progressSectionContainer___row___progressBar"
            strokeColor="#4BA747"
            trailColor="white"
            strokeWidth={20}
            showInfo={false}
          />
        </Col>
        <Col xs={GRID_SPANS.nextLevel}>
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
        <Col xs={GRID_SPANS.previousReward}>
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
        <Col xs={GRID_SPANS.nextReward}>
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
