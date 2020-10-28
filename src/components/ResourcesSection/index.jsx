import React from "react";
import { Col, Row } from "antd";
import "./index.css";
import "antd/dist/antd.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ResourcesSection = () => {
  const [t] = useTranslation();

  return (
    <div className="site-card-wrapper">
      <Router>
        <Row justify="center" gutter={[16, 16]}>
          <Col
            xxl={{ span: 6 }}
            xl={{ span: 6 }}
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{ span: 24 }}
          >
            <Row justify="center">
              <Col span={22} className="cardName">
                <Link to="/pollution">{t("resourseSection.Pollution")} </Link>
              </Col>
              <Col span={22} className="cardImage">
                <Link to="/pollution">
                  <img alt="Poulution" src="/assets/images/Pou.svg" />
                </Link>
              </Col>
            </Row>
          </Col>
          <Col
            xxl={{ span: 6 }}
            xl={{ span: 6 }}
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{ span: 24 }}
          >
            <Row justify="center">
              <Col span={22} className="cardName">
                <Link to="/ClimateChange">
                  {" "}
                  {t("resourseSection.Climate Change")}{" "}
                </Link>
              </Col>
              <Col span={22} className="cardImage">
                <Link to="/ClimateChange">
                  <img alt="Climate Change" src="/assets/images/earth.svg" />
                </Link>
              </Col>
            </Row>
          </Col>
          <Col
            xxl={{ span: 6 }}
            xl={{ span: 6 }}
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{ span: 24 }}
          >
            <Row justify="center">
              <Col span={22} className="cardName">
                <Link to="/ReduceReuseRecycle">
                  {" "}
                  {t("resourseSection.Reduce, Reuse, Recycle")}
                </Link>{" "}
              </Col>
              <Col span={22} className="cardImage">
                <Link to="/ReduceReuseRecycle">
                  {" "}
                  <img alt="Recycle" src="/assets/images/rec.svg" />
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
