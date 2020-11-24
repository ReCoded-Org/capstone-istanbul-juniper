import React from "react";
import { Row, Col } from "antd";
import kid0Img from "./../../images/aboutPage/kid-1.png";
import kid1Img from "./../../images/aboutPage/kid-2.png";
import { useTranslation } from "react-i18next";
import TeamCards from "./../../components/TeamCards";
import "./index.css";

const AboutPage = () => {
  const [t] = useTranslation();
  // This in-line styling is added to fix the display of the illustrations in Arabic
  const illustrationStyling = {
    flexDirection: document.dir === "rtl" ? "row-reverse" : "row",
  };

  return (
    <div className="aboutUs">
      <Row className="aboutUs__upperContent">
        <Col className="aboutUs__textCol">
          <Row className="aboutUs__textCol--aboutText">
            <h2 className="aboutUs__textCol--aboutHeader">
              {t("about.aboutUsHeader")}
            </h2>
            <p className="aboutUs__textCol--aboutParagraph">
              {t("about.aboutUsText")}
            </p>
          </Row>
          <Row className="aboutUs__textCol--whyWeDoIt">
            <h2 className="aboutUs__textCol--whyWeDoItHeader">
              {t("about.whyWeDoItHeader")}
            </h2>
            <p className="aboutUs__textCol--whyWeDoItParagraph">
              {t("about.whyWeDoItText")}
            </p>
          </Row>
        </Col>
        <Col className="aboutUs__illustrationsCol" style={illustrationStyling}>
          <img
            className="aboutUs__illustrationsCol--kid0"
            src={kid0Img}
            alt="kid-illustration"
          />
          <img
            className="aboutUs__illustrationsCol--kid1"
            src={kid1Img}
            alt="kid-illustration"
          />
        </Col>
      </Row>
      <Row className="team">
        <TeamCards />
      </Row>
    </div>
  );
};

export default AboutPage;
