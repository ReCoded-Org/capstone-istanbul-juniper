import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { Progress, Row, Col } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import recycleIcon from "../../../images/recycle.svg";

const ProgressSection = ({
  // XP stands for experience
  // number
  currentXP = 50,
  // svg file
  prevRewardIcon = recycleIcon,
  // string
  prevRewardDescription = "Recycle",
  // number
  currentLevel = 5,
}) => {
  const nextLevel = currentLevel + 1;
  const [t] = useTranslation();
  return (
    <div className="progressSectionContainer">
      <Row justify="center">
        <h3 className="progressSectionContainer___xp">
          {currentXP} / 100 {t("gamesPage.experiencePoint")}
        </h3>
      </Row>
      <Row justify="center" className="progressSectionContainer___row">
        <Col xs={6} md={{ push: 1 }} lg={{ push: 2 }}>
          <h3 className="progressSectionContainer___row___header progressSectionContainer___row___curLevel">
            {t("gamesPage.level")} {currentLevel}
          </h3>
        </Col>
        <Col xs={12}>
          <Progress
            percent={currentXP}
            className="progressSectionContainer___row___progressBar"
            strokeColor="#4BA747"
            trailColor="white"
            strokeWidth={20}
            showInfo={false}
          />
        </Col>
        <Col xs={6} md={{ pull: 1 }} lg={{ pull: 2 }}>
          <h3 className="progressSectionContainer___row___header progressSectionContainer___row___nextLevel">
            {t("gamesPage.level")} {nextLevel}
          </h3>
        </Col>
      </Row>
      <Row className="progressSectionContainer___row">
        <Col span={3} push={5}>
          <h3 className="progressSectionContainer___row___header">
            {t("gamesPage.previous")}
            <br />
            {t("gamesPage.reward")}
          </h3>
          <div className="progressSectionContainer___row___prevRewardDiv">
            <img
              src={prevRewardIcon}
              alt={prevRewardDescription}
              className="progressSectionContainer___row___prevRewardDiv___reward"
            />
          </div>
          <h3 className="progressSectionContainer___row___header">
            {prevRewardDescription} {t("gamesPage.badge")}
          </h3>
        </Col>
        <Col span={3} push={13}>
          <h3 className="progressSectionContainer___row___header">
            {t("gamesPage.next")}
            <br />
            {t("gamesPage.reward")}
          </h3>
          <div className="progressSectionContainer___row___header___questionMark">
            <QuestionOutlined />
          </div>

          <h3 className="progressSectionContainer___row___header">
            {t("gamesPage.unknown")}
          </h3>
        </Col>
      </Row>
    </div>
  );
};

export default ProgressSection;
