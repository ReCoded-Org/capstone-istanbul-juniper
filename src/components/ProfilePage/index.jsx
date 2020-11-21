import React, { useState, useEffect, useContext } from "react";
import GamesCarousel from "../GamesCarousel";
import { useTranslation } from "react-i18next";
import "./index.css";
import { Col, Layout } from "antd";
import profilePageImg from "../../images/profilePage/profilePageImg.png";
import db from "../../firebaseConfig";

// here we hard codded the user id because the auth is not ready to work.
const HARDCODED_USER = "4a3Fb5EJVcPEKisuetXtO2B9sWF3";
const { Sider, Content } = Layout;

const ProfilePage = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState("");
  const ref = db.collection("users").doc(HARDCODED_USER);

  const getUsers = () => {
    ref.onSnapshot((querySnapshot) => {
      setUser(querySnapshot.data());
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Layout className="profilePageContainer">
        <Sider className="profilePage__sider">
          <div className="profilePageImgContainer">
            <img
              className="profilePage__img"
              src={profilePageImg}
              alt="avatar"
            ></img>
            <div className="textprofilePageUsersNameContainer" key={user.id}>
              <p className="profilePage__usersName">{user.fullname}</p>
              <p className="profilePage__usersName">{user.age}</p>
              <div></div>
            </div>
          </div>
        </Sider>
        <Content>
          <Col className="profilePageWelcomeUserContainer" span={8} offset={12}>
            <p className="profilePage__welcomeUser">{t("profilePage.title")}</p>
          </Col>
          <div className="profilePage__gamesCarousel__wrapper">
            <GamesCarousel />
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default ProfilePage;
