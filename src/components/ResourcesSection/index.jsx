import React from "react";
import { Col, Row } from "antd";
import "./index.css";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import recycleImg from "./../../images/recycleResourceSetion.svg";
import earthImg from "./../../images/earthResourceSetion.svg";
import pollutionImg from "./../../images/pollutionResourceSetion.svg";

const ResourcesSection = () => {
  const [t] = useTranslation();
  return (
    <div className="resourceCardWrapper">
      <Row justify="center" gutter={[16, 16]}>
        <Col>
          <Row justify="center">
            <Col className="resourceCardWrapper__cardName">
              <Link to="/resources">
                {t("home.resourcesSection.pollution")}
              </Link>
            </Col>
          </Row>
          <Row justify="center">
            <Col className="resourceCardWrapper__cardImage">
              <Link to="/resources">
                <img alt="pollution" src={pollutionImg} />
              </Link>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="center">
            <Col className="resourceCardWrapper__cardName">
              <Link to="/resources">
                {t("home.resourcesSection.climateChange")}
              </Link>
            </Col>
          </Row>
          <Row justify="center">
            <Col className="resourceCardWrapper__cardImage">
              <Link to="/resources">
                <img alt="Climate Change" src={earthImg} />
              </Link>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="center">
            <Col className="resourceCardWrapper__cardName">
              <Link to="/resources">
                {t("home.resourcesSection.reduceReuseRecycle")}
              </Link>
            </Col>
          </Row>
          <Row justify="center">
            <Col className="resourceCardWrapper__cardImage">
              <Link to="/resources">
                <img alt="Recycle" src={recycleImg} />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ResourcesSection;
