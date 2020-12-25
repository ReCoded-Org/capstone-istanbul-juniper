import React from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import globe from "./../../images/earthNav.svg";

const LIGHT_GREEN_BACKGROUND_PAGES = [
  "/about",
  "/resources",
  "/games/memorygame",
  "/games/puzzlegame",
  "/games/quizgame",
  "/login",
];

const LIGHT_GREEN = "#b4d0c4";
const DARK_GREEN = "#2a8c79";

const Footer = () => {
  const curRoute = useLocation().pathname;
  const [t] = useTranslation();

  return (
    <div
      className="footerContainer"
      style={{
        backgroundColor: LIGHT_GREEN_BACKGROUND_PAGES.includes(curRoute)
          ? LIGHT_GREEN
          : DARK_GREEN,
      }}
    >
      <footer>
        <img alt="globe" src={globe} className="footerContainer__globe" />
        <Col>
          <Row
            gutter={[25]}
            justify="center"
            className="footerContainer__links"
          >
            <Col className="footerContainer__links__nav">
              <Link to="/trademark"> {t("footer.trademark")}</Link>
            </Col>
            <Col className="footerContainer__links__nav">
              <Link to="/contact"> {t("footer.contact")}</Link>
            </Col>
            <Col className="footerContainer__links__nav">
              <Link to="/policies"> {t("footer.policies")}</Link>
            </Col>
            <Col className="footerContainer__links__nav">
              <Link to="/games"> {t("footer.games")}</Link>
            </Col>
            <Col className="footerContainer__links__nav">
              <Link to="/about"> {t("footer.about")}</Link>
            </Col>
          </Row>
          <Row justify="center" className="footerContainer__social">
            <Col>
              {/* note: facebook,instagram,youtube are built in fortawesome classes */}
              <a href="https://www.facebook.com" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </Col>
            <Col>
              <a href="https://www.instagram.com" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </Col>
            <Col>
              <a href="https://www.youtube.com" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </Col>
          </Row>
        </Col>
      </footer>
    </div>
  );
};

export default Footer;
