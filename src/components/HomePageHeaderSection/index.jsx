import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import homePageHeaderImgLeft from "../../images/child.png";
import homePageHeaderImgRight from "../../images/family.png";
import "./index.css";
import { useTranslation } from "react-i18next";

export default function HomePageHeaderSection() {
  const { t } = useTranslation();
  return (
    <>
      <div className="homePageHeaderContainer">
        <Row justify="space-around" align="middle"></Row>
        <Row justify="space-around" align="middle">
          <Col span={4}>
            <img
              alt="children playing in the garden"
              src={homePageHeaderImgRight}
            ></img>
          </Col>

          <Col span={4} offset={6}>
            <Row>
              <h2 className="homePageHeaderContainer__title">
                {t("home.headerSection.mainText")}
              </h2>
              <br></br>
              <p className="homePageHeaderContainer__paragraph">
                {t("home.headerSection.secondaryText")}
              </p>
            </Row>
            <Row>
              <button
                align="top"
                type="button"
                className="homePageHeaderContainer__button"
                shape="round"
                size="large"
              >
                {t("home.headerSection.headerButton")}
              </button>
            </Row>
          </Col>

          <Col span={4}>
            <img
              className="homePageHeaderContainer__img"
              alt="children playing in the garden"
              src={homePageHeaderImgLeft}
            ></img>
          </Col>
        </Row>
      </div>
    </>
  );
}
