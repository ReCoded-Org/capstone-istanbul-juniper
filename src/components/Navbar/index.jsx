import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Dropdown, Button, Menu } from "antd";
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
    window.location.reload();
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <div style={{ background: "#3b8c79", height: "15vh" }}>
        <div className="navbarTopHalf" style={{ height: "50%" }}>
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

        <div
          className="navbarBottomHalf"
          style={{
            background: "#b4d0c4",
            borderRadius: "50% 50% 0 0",
            height: "50%",
          }}
        >
          <div style={{ height: "50%" }}></div>
          <div style={{ height: "50%", background: "#b4d0c4", bottom: "0px" }}>
            <button onClick={(e) => languageChanger("en")}>En</button>
            <button onClick={(e) => languageChanger("tr")}>Tr</button>
            <button onClick={(e) => languageChanger("ar")}>Ar</button>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
