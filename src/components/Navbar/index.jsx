import React from "react";
import "./index.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

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

  const languageChanger = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <div className="navbar">
        <div className="navbar_topHalf">
          {/*Dropdown replaces the navbar in small screens */}
          <Dropdown
            className="navbar_dropdown"
            overlay={menu}
            placement="bottomleft"
          >
            <button className="navbar_dropdown-btn">
              <MenuOutlined />
            </button>
          </Dropdown>

          <ul className="navbar_leftSide">
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
            <h1 className="navbar_title">Juniper</h1>
          </Link>
          <ul className="navbar_rightSide">
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
          <Link className="navbar_logo-link" to={"/"}>
            <img
              className="navbar_logo"
              src={require("./../../images/logo.svg")}
              alt="juniper-logo"
            />
          </Link>
        </div>

        <div className="navbar_bottomHalf">
          <div className="navbar_helperDiv"></div>
          <div
            className="navbar_languageContainer"
            style={{ height: "50%", background: "#b4d0c4", bottom: "0px" }}
          >
            <div className="navbar_languageSubContainer">
              <button
                className="navbar_languageContainer-btn"
                onClick={(e) => languageChanger("en")}
              >
                En
              </button>
              <button
                className="navbar_languageContainer-btn"
                onClick={(e) => languageChanger("tr")}
              >
                Tr
              </button>
              <button
                className="navbar_languageContainer-btn"
                onClick={(e) => languageChanger("ar")}
              >
                Ar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
