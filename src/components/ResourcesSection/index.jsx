import React from "react";
import { Col, Row } from "antd";
import "./index.css";
import "antd/dist/antd.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
import recycleImg from "./../../images/recycle.svg";
import earthImg from "./../../images/earth.svg";
import pollutionImg from "./../../images/pollution.svg";

const ResourcesSection = () => {
  const [t] = useTranslation();

  return (
    // "site-card-wrapper" is a built in ant Designe className
    <div className="site-card-wrapper">
      <Router>
        <Row justify="center" gutter={[16, 16]}>
          <Col xxl={6} sm={24}>
            <Row justify="center">
              <Col span={22} className="site-card-wrapper__cardName">
                <Link to="/pollution">
                  {t("home.resourcesSection.pollution")}{" "}
                </Link>
              </Col>
              <Col span={22} className="site-card-wrapper__cardImage">
                <Link to="/pollution">
                  <img alt="Poulution" src={pollutionImg} />
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xxl={6} sm={24}>
            <Row justify="center">
              <Col span={22} className="site-card-wrapper__cardName">
                <Link to="/climateChange">
                  {t("home.resourcesSection.climateChange")}
                </Link>
              </Col>
              <Col span={22} className="site-card-wrapper__cardImage">
                <Link to="/climateChange">
                  <img alt="Climate Change" src={earthImg} />
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xxl={6} sm={24}>
            <Row justify="center">
              <Col span={22} className="site-card-wrapper__cardName">
                <Link to="/recycle">
                  {t("home.resourcesSection.reduceReuseRecycle")}
                </Link>
              </Col>
              <Col span={22} className="site-card-wrapper__cardImage">
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
