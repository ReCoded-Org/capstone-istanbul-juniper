import React from "react";
import "./index.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Dropdown, Menu, Col, Row} from "antd";
import { MenuOutlined, GlobalOutlined  } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import logoImg from "./../../images/logo.svg"

const Navbar = () => {
  const { t } = useTranslation();
  const currentPath= window.location.pathname;

  const navbarMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/">{t("navbar.home")}</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about">{t("navbar.about")}</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/games">{t("navbar.games")}</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/resources">{t("navbar.resources")}</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/contact">{t("navbar.contact")}</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/login">{t("navbar.login")}</Link>
      </Menu.Item>
    </Menu>
  );

  const languagesMenu = (
    <Menu>
      <Menu.Item
        className="navbar__languageContainer-btn"
        onClick={(e) => handleLanguageChange("en")}
      >
        <p>English</p>
      </Menu.Item>
      <Menu.Item
        className="navbar__languageContainer-btn"
        onClick={(e) => handleLanguageChange("tr")}
      >
        <p>Türkçe</p>
      </Menu.Item>
      <Menu.Item
        className="navbar__languageContainer-btn"
        onClick={(e) => handleLanguageChange("ar")}
      >
      <p>العربية</p>
      </Menu.Item>
    </Menu>
  );

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <div className="navbar">
        <Row className="navbar__topHalf" justify="space-around" gutter={12}>

          <Col className="navbar__leftSide" flex={2}>

            {/*Dropdown replaces the navbar in small screens */}
            <Col>
              <Dropdown
              className="navbar__dropdown"
              overlay={navbarMenu}
              >
                <button className="navbar__dropdown-btn">
                  <MenuOutlined />
                </button>
              </Dropdown>
            </Col>

            <Col >
              <li>
                <Link to="/"
                className={currentPath === "/"? "navbar__element navbar__element-current":"navbar__element"}
                >
                {t("navbar.home")}
                </Link>
              </li>
            </Col>
            <Col >
              <li>
                <Link to="/about"
                className={currentPath === "/about"? "navbar__element navbar__element-current":"navbar__element"}>
                {t("navbar.about")}
                </Link>
              </li>
            </Col>
            <Col >
              <li>
                <Link to="/games"
                className={currentPath === "/games"? "navbar__element navbar__element-current":"navbar__element"}>
                {t("navbar.games")}
                </Link>
              </li>
            </Col>
          </Col>

          <Col span={4} flex={2}>
          <Link className="navbar__title" to="/">
            Juniper
          </Link>
          </Col>

          <Col className="navbar__rightSide"  flex={2}>
          <Col >
              <li>
                <Link to="/resources"
                className={currentPath === "/resources"? "navbar__element navbar__element-current":"navbar__element"}>
                {t("navbar.resources")}
                </Link>
              </li>
          </Col>
          <Col >
            <li>
              <Link to="/contact"
              className={currentPath === "/contact"? "navbar__element navbar__element-current":"navbar__element"}>
              {t("navbar.contact")}
              </Link>
            </li>
          </Col>
          <Col >
            <li>
              <Link to="/login"
              className={currentPath === "/login"? "navbar__element navbar__element-current":"navbar__element"}>
              {t("navbar.login")}
              </Link>
            </li>
          </Col>
            <Col>
              <Dropdown overlay={languagesMenu} className="navbar__languageContainer" >
                <GlobalOutlined />
              </Dropdown> 
            </Col>
          </Col>
        </Row>

        <Row className="navbar__bottomHalf">
          <div className="navbar__helperDiv"></div>
          <div></div>
        </Row>

        <Link className={document.body.dir === "ltr"? "navbar__logo-ltrLink": "navbar__logo-rtlLink"} to={"/"}>
            <img className="navbar__logo" src={logoImg} alt="juniper-logo" />
        </Link>

      </div>
    </Router>
  );
};

export default Navbar;
