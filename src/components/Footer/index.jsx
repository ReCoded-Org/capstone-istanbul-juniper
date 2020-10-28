import React from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation();

  return (
    <footer>
      <Router>
        <img
          alt="globe"
          src="/assets/images/earthNav.svg"
          className="footerGlobe"
        />
        <Col>
          <div className="footerCurveContainer"></div>

          <Row gutter={[25]} justify="center" className="footerLinksContainer">
            <Col className="footerNav">
              <Link to="/trademark"> {t("footer.Trademark")} </Link>
            </Col>
            <Col className="footerNav">
              <Link to="/contact"> {t("footer.Contact")} </Link>
            </Col>
            <Col className="footerNav">
              <Link to="/policies"> {t("footer.Policies")}</Link>
            </Col>
            <Col className="footerNav">
              <Link to="/games"> {t("footer.Games")}</Link>
            </Col>
            <Col className="footerNav">
              <Link to="/about"> {t("footer.About")}</Link>
            </Col>
          </Row>

          <Row justify="center" className="footerSocialContainer">
            <Col>
              <a href="https://www.facebook.com" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>{" "}
            </Col>
            <Col>
              <a href="https://www.instagram.com" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>{" "}
            </Col>
            <Col>
              <a href="https://www.youtube.com" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>{" "}
            </Col>
          </Row>
        </Col>
      </Router>
    </footer>
  );
};

export default Footer;

