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
import Globe from "../../images/earthNav.svg";

const Footer = () => {
  const [t] = useTranslation();

  return (
    <div className="footerContainer">
      <footer>
        <Router>
          <img alt="globe" src={Globe} className="footerGlobe" />
          <Col>
            <Row
              gutter={[25]}
              justify="center"
              className="footerLinksContainer"
            >
              <Col className="footerLinksContainer__nav">
                <Link to="/trademark"> {t("footer.trademark")}</Link>
              </Col>
              <Col className="footerLinksContainer__nav">
                <Link to="/contact"> {t("footer.contact")}</Link>
              </Col>
              <Col className="footerLinksContainer__nav">
                <Link to="/policies"> {t("footer.policies")}</Link>
              </Col>
              <Col className="footerLinksContainer__nav">
                <Link to="/games"> {t("footer.games")}</Link>
              </Col>
              <Col className="footerLinksContainer__nav">
                <Link to="/about"> {t("footer.about")}</Link>
              </Col>
            </Row>
            <Row justify="center" className="footerSocialContainer">
              <Col>
                {/* note: facebook,instagram,youtube are built in fortawesome classes */}
                <a href="https://www.facebook.com" className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.instagram.com"
                  className="instagram social"
                >
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
        </Router>
      </footer>
    </div>
  );
};

export default Footer;
