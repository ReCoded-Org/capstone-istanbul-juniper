import React from "react";
import { Col, Row } from "antd";
import "./index.css";
import "antd/dist/antd.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
import recycleImg from "./../../images/recycleResourceSetion.svg";
import earthImg from "./../../images/earthResourceSetion.svg";
import pollutionImg from "./../../images/pollutionResourceSetion.svg";

const ResourcesSection = () => {
  const [t] = useTranslation();
  return (
    <div className="resourceCardWrapper">
      <Router>
        <Row justify="center" gutter={[16, 16]}>
          <Col>
            <Row justify="center">
              <Col className="resourceCardWrapper__cardName">
                <Link to="/pollution">
                  {t("home.resourcesSection.pollution")}
                </Link>
              </Col>
            </Row>
            <Row justify="center">
              <Col className="resourceCardWrapper__cardImage">
                <Link to="/pollution">
                  <img alt="pollution" src={pollutionImg} />
                </Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="center">
              <Col className="resourceCardWrapper__cardName">
                <Link to="/climatechange">
                  {t("home.resourcesSection.climateChange")}
                </Link>
              </Col>
            </Row>
            <Row justify="center">
              <Col className="resourceCardWrapper__cardImage">
                <Link to="/climatechange">
                  <img alt="Climate Change" src={earthImg} />
                </Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="center">
              <Col className="resourceCardWrapper__cardName">
                <Link to="/recycle">
                  {t("home.resourcesSection.reduceReuseRecycle")}
                </Link>
              </Col>
            </Row>
            <Row justify="center">
              <Col className="resourceCardWrapper__cardImage">
                <Link to="/recycle">
                  <img alt="Recycle" src={recycleImg} />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Router>
    </div>
  );
};

export default ResourcesSection;
