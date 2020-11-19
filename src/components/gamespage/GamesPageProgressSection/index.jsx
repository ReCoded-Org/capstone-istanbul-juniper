import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { Progress, Row, Col } from "antd";
import { QuestionOutlined } from "@ant-design/icons";

const ProgressSection = ({
  // an object
  // check containers/GamesPage/index.jsx to see an example
  progressData,
}) => {
  const nextLevel = progressData.currentLevel + 1;
  const [t] = useTranslation();
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
        <Col xs={6} md={{ push: 1 }} lg={{ push: 2 }}>
          <h3 className="progressSectionContainer___row___header progressSectionContainer___row___curLevel">
            {/* example: Level 5 */}
            {t("gamesPage.level", {
              currentLevel: progressData.currentLevel,
            })}
          </h3>
        </Col>
        <Col xs={12}>
          <Progress
            percent={progressData.currentXP}
            className="progressSectionContainer___row___progressBar"
            strokeColor="#4BA747"
            trailColor="white"
            strokeWidth={20}
            showInfo={false}
          />
        </Col>
        <Col xs={6} md={{ pull: 1 }} lg={{ pull: 2 }}>
          <h3 className="progressSectionContainer___row___header progressSectionContainer___row___nextLevel">
            {t("gamesPage.level", { number: nextLevel })}
          </h3>
        </Col>
      </Row>
      <Row className="progressSectionContainer___row">
        <Col span={3} push={5}>
          <h3 className="progressSectionContainer___row___header">
            {t("gamesPage.previousReward")}
          </h3>
          <div className="progressSectionContainer___row___prevRewardDiv">
            <img
              src={progressData.prevRewardIcon}
              alt={progressData.prevRewardDescription}
              className="progressSectionContainer___row___prevRewardDiv___reward"
            />
          </div>
          <h3 className="progressSectionContainer___row___header">
            {/* Example: Recycle badge */}
            {t("gamesPage.badgeDescription", {
              badgeName: progressData.badgeName,
            })}
          </h3>
        </Col>
        <Col span={3} push={13}>
          <h3 className="progressSectionContainer___row___header">
            {t("gamesPage.nextReward")}
          </h3>
          <div className="progressSectionContainer___row___header___questionMark">
            <QuestionOutlined />
          </div>

          <h3 className="progressSectionContainer___row___header">
            {/* Reward for next level is unknown. */}
            {t("gamesPage.unknown")}
          </h3>
        </Col>
      </Row>
    </div>
  );
};

export default ProgressSection;
