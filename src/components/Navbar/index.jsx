import React, { useContext, useState } from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, Menu, Col, Row } from "antd";
import { MenuOutlined, GlobalOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import logoImg from "./../../images/logo.svg";
import { AuthContext } from "../../auth/authContext";
import { auth } from "../../firebaseConfig";
import LanguageChangeModal from "../LanguageChangeModal";

const Navbar = () => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);
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
        {user && user.isLoggedin ? (
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              auth.signOut();
            }}
          >
            Logout
          </a>
        ) : (
          <Link to="/login">{t("navbar.login")}</Link>
        )}
      </Menu.Item>
    </Menu>
  );

  const languagesMenu = (
    <Menu>
      <Menu.Item
        className="navbar__languageContainer-btn"
        onClick={() => handleLanguageChange("en")}
      >
        <p>EN</p>
      </Menu.Item>
      <Menu.Item
        className="navbar__languageContainer-btn"
        onClick={() => handleLanguageChange("tr")}
      >
        <p>TR</p>
      </Menu.Item>
      <Menu.Item
        className="navbar__languageContainer-btn"
        onClick={() => handleLanguageChange("ar")}
      >
        <p>AR</p>
      </Menu.Item>
    </Menu>
  );
  // language change in memorygame requires page reload. This modal is create to warn user.
  const [modalVisibility, setModalVisibility] = useState(false);
  // holds abbreviation of new language for conditional language change
  const [newLanguage, setNewLanguage] = useState();
  // gives current route
  const location = useLocation();
  const handleLanguageChange = (lang) => {
    if (location.pathname === "/games/memorygame") {
      setNewLanguage(lang);
      setModalVisibility(true);
    } else {
      i18n.changeLanguage(lang);
    }
  };

  const isCurrentPath = (path) => {
    const currentPath = window.location.pathname;
    if (currentPath === path) {
      return "navbar__element navbar__element-current";
    } else {
      return "navbar__element";
    }
  };

  return (
    <div className="navbar">
      <LanguageChangeModal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        newLanguage={newLanguage}
      />
      <Row className="navbar__topHalf" justify="space-around" gutter={12}>
        <Col className="navbar__elements" flex={2}>
          {/*Dropdown replaces the navbar in small screens */}
          <Col>
            <Dropdown className="navbar__dropdown" overlay={navbarMenu}>
              <button className="navbar__dropdown-btn">
                <MenuOutlined />
              </button>
            </Dropdown>
          </Col>

          <Col>
            <li>
              <Link to="/" className={isCurrentPath("/")}>
                {t("navbar.home")}
              </Link>
            </li>
          </Col>
          <Col>
            <li>
              <Link to="/about" className={isCurrentPath("/about")}>
                {t("navbar.about")}
              </Link>
            </li>
          </Col>
          <Col>
            <li>
              <Link to="/games" className={isCurrentPath("/games")}>
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

        <Col className="navbar__elements" flex={2}>
          <Col>
            <li>
              <Link to="/resources" className={isCurrentPath("/resources")}>
                {t("navbar.resources")}
              </Link>
            </li>
          </Col>
          <Col>
            <li>
              <Link to="/contact" className={isCurrentPath("/contact")}>
                {t("navbar.contact")}
              </Link>
            </li>
          </Col>
          <Col>
            <li>
              {user && user.isLoggedin ? (
                <a
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    auth.signOut();
                  }}
                >
                  Logout
                </a>
              ) : (
                <Link to="/login" className={isCurrentPath("/login")}>
                  {t("navbar.login")}
                </Link>
              )}
            </li>
          </Col>
          <Col>
            <Dropdown
              overlay={languagesMenu}
              className="navbar__languageContainer"
            >
              <GlobalOutlined className="navbar__element-lang" />
            </Dropdown>
          </Col>
        </Col>
      </Row>

      <Row className="navbar__bottomHalf">
        <div className="navbar__helperDiv"></div>
        <div></div>
      </Row>

      <Link
        className={
          document.dir === "ltr"
            ? "navbar__logo-ltrLink navbar__logo-link"
            : "navbar__logo-rtlLink navbar__logo-link"
        }
        to={"/"}
      >
        <img className="navbar__logo" src={logoImg} alt="juniper-logo" />
      </Link>
    </div>
  );
};

export default Navbar;
