import React from "react";
import "./index.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const logoImg = require("./../../images/logo.svg");

const Navbar = () => {
  const { t } = useTranslation();

  const menu = (
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

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <div className="navbar">
        <div className="navbar__topHalf">
          {/*Dropdown replaces the navbar in small screens */}
          <Dropdown
            className="navbar__dropdown"
            overlay={menu}
            placement="bottomleft"
          >
            <button className="navbar__dropdown-btn">
              <MenuOutlined />
            </button>
          </Dropdown>

          <ul className="navbar__leftSide">
            <li>
              <Link to="/">{t("navbar.home")}</Link>
            </li>
            <li>
              <Link to="/about">{t("navbar.about")}</Link>
            </li>
            <li>
              <Link to="/games">{t("navbar.games")}</Link>
            </li>
          </ul>
          <Link to="/">
            <h1 className="navbar__title">Juniper</h1>
          </Link>
          <ul className="navbar__rightSide">
            <li>
              <Link to="/resources">{t("navbar.resources")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("navbar.contact")}</Link>
            </li>
            <li>
              <Link to="/login">{t("navbar.login")}</Link>
            </li>
          </ul>
          <Link className="navbar__logo-link" to={"/"}>
            <img
              className="navbar__logo"
              src={logoImg}
              alt="juniper-logo"
            />
          </Link>
          <div className="navbar__languageContainer">
              <button
                className="navbar__languageContainer-btn"
                onClick={(e) => handleLanguageChange("en")}
              >
               <p>En</p>
              </button>
              <button
                className="navbar__languageContainer-btn"
                onClick={(e) => handleLanguageChange("tr")}
              >
               <p>Tr</p>
              </button>
              <button
                className="navbar__languageContainer-btn"
                onClick={(e) => handleLanguageChange("ar")}
              >
                <p>Ar</p>
              </button>
            </div>
        </div>

        <div className="navbar__bottomHalf">
          <div className="navbar__helperDiv"></div>
          <div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
