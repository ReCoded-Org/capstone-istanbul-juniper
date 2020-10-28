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
      <div className="homePage__header__container">
        <Row justify="space-around" align="middle"></Row>
        <Row justify="space-around" align="middle">
          <Col span={4}>
            
              <img src={homePageHeaderImgLeft}></img>
            
          </Col>
          <Col span={4}></Col>
          <Col span={4}>
            <Row>
              <h2 className="homePageHeaderTitle" style={{ fontFamily: "salsa" }}>
                {t("home.homePageHeaderSection.homePageHeaderSectionFirstText")}{" "}
              </h2>
              <br></br>
              <p style={{ fontSize: "15px", fontFamily: "Raleway" }}>
                {t("home.homePageHeaderSection.homePageHeaderSectionSecondText")}
              </p>
            </Row>
            <Row>
              <Button align="top" type="button" className="homePage__header__button" shape='round' size='large'>
                {t("home.homePageHeaderSection.homePageHeaderSectionButton")}
              </Button>
            </Row>
          </Col>

          <Col span={4}>
            
              <img src={homePageHeaderImgRight}></img>
            
          </Col>
        </Row>
      </div>
    </>
  );
}
