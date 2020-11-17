import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { Progress, Row, Col } from "antd";
import { QuestionOutlined } from "@ant-design/icons";

const ProgressSection = ({
  // number
  currentXP,
  // svg file
  prevRewardIcon,
  // string
  prevRewardDescription,
  // number
  currentLevel,
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
        <Col span={6} push={2}>
          <h3 className="progressSectionContainer___row___header">
            {t("gamesPage.level")} {currentLevel}
          </h3>
        </Col>
        <Col span={12}>
          <Progress
            percent={currentXP}
            className="progressSectionContainer___row___progressBar"
            strokeColor="#4BA747"
            trailColor="white"
            strokeWidth={20}
            showInfo={false}
          />
        </Col>
        <Col span={6} pull={2}>
          <h3 className="progressSectionContainer___row___header">
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
            {prevRewardDescription}
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
