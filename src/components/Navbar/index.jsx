import React from "react";
import "./index.css"
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
      <div className="navbar" >
        <div className="navbarTopHalf">
          {/*Dropdown replaces the navbar in small screens */}
          <Dropdown
            className="navbarDropdown"
            overlay={menu}
            placement="bottomLeft"
          >
            <button className="navbarDropdownBtn">
              <MenuOutlined />
            </button>
          </Dropdown>

          <ul className="navbarLeftSide">
            <li>
              {" "}
              <Link to="/">{t("navbar.home")}</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about">{t("navbar.about")}</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/games">{t("navbar.games")}</Link>{" "}
            </li>
          </ul>
          <Link to="/">
            <h1 className="navbarTitle">Juniper</h1>
          </Link>
          <ul className="navbarRightSide">
            <li>
              {" "}
              <Link to="/resources">{t("navbar.resources")}</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contact">{t("navbar.contact")}</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/login">{t("navbar.login")}</Link>{" "}
            </li>
          </ul>
          <Link className="navbarLogoLink" to={"/"}>
            <img
              className="navbarLogo"
              src={require("./../../images/logo.svg")}
              alt="juniper-logo"
            />
          </Link>
        </div>

        <div className="navbarBottomHalf">
          <div className="navbarHelperDiv"></div>
          <div className="languageBtnsContainer" style={{ height: "50%", background: "#b4d0c4", bottom: "0px" }}>
            <div className="languageBtnsSubContainer">
              <button className="languageBtn" onClick={(e) => languageChanger("en")}>En</button>
              <button className="languageBtn" onClick={(e) => languageChanger("tr")}>Tr</button>
              <button className="languageBtn" onClick={(e) => languageChanger("ar")}>Ar</button>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
