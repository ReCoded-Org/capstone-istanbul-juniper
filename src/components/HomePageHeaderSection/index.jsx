import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import homePageHeaderImgLeft from "../../images/child.png";
import homePageHeaderImgRight from "../../images/family.png";
import "./index.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";

export default function HomePageHeaderSection() {
  const { t } = useTranslation();
  const currentLanguage = i18next.language;
  return (
    <>
      <div className="homePageHeaderContainer">
        <Row justify="space-around" align="middle"></Row>
        <Row justify="space-around" align="middle">
          <Col span={4}>
            <img
              alt="children playing in the garden"
              src={`${
                currentLanguage === "ar"
                  ? homePageHeaderImgLeft
                  : homePageHeaderImgRight
              }`}
              className="homePageHeaderContainer__rightImg"
            ></img>
          </Col>

          <Col span={4} offset={6}>
            <Row>
              <h2
                className={`${
                  currentLanguage === "ar"
                    ? "homePageHeaderContainer__arTitle"
                    : "homePageHeaderContainer__title"
                }`}
              >
                {t("home.headerSection.mainText")}
              </h2>
              <br></br>
              <p className="homePageHeaderContainer__paragraph">
                {t("home.headerSection.secondaryText")}
              </p>
            </Row>
            <Row className="homePageHeaderContainer__button">
              <Link to="/games">
                <button className="homePageHeaderContainer__row">
                  {t("home.headerSection.headerButton")}
                </button>
              </Link>
            </Row>
          </Col>
          <Col offset={6} span={4}>
            <img
              className="homePageHeaderContainer__img"
              alt="children playing in the garden"
              src={`${
                currentLanguage === "ar"
                  ? homePageHeaderImgRight
                  : homePageHeaderImgLeft
              }`}
            ></img>
          </Col>
        </Row>
      </div>
    </>
  );
}
