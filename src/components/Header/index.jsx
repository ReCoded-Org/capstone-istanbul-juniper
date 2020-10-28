import React from "react";

import "antd/dist/antd.css";
import { Row, Col } from "antd";
import img1 from "../../images/child.png";
import img2 from "../../images/family.png";
import "./index.css";

import { useTranslation } from "react-i18next";

const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

export default function Header() {
  const { t } = useTranslation();
  return (
    <>
      <div className="homePage__header__container">
        <Row justify="space-around" align="middle"></Row>
        <Row justify="space-around" align="middle">
          <Col span={4}>
            <DemoBox value={100}>
              <img src={img2}></img>
            </DemoBox>
          </Col>
          <Col span={4}></Col>
          <Col span={4}>
            <Row>
              <h2 style={{ fontFamily: "salsa" }}>
                {t("home.header.header0")}{" "}
              </h2>
              <br></br>
              <p style={{ fontSize: "15px", fontFamily: "Raleway" }}>
                {t("home.header.header1")}
              </p>
            </Row>
            <Row>
              <button align="top" type="button" className="saveTheWorld_button">
                {t("home.header.button")}
              </button>
            </Row>
          </Col>

          <Col span={4}>
            <DemoBox value={80}>
              <img src={img1}></img>
            </DemoBox>
          </Col>
        </Row>
      </div>
    </>
  );
}
