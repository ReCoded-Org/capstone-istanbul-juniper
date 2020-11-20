import React, { useState, useEffect } from "react";
import GamesCarousel from "../GamesCarousel";
import { useTranslation } from "react-i18next";
import "./index.css";
import { Col, Layout } from "antd";
import profilePageImg from "../../images/profilePage/profilePageImg.png";
import db from "../../firebaseConfig";

const { Sider, Content } = Layout;
const ProfilePage = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const usersResult = await db.collection("users").get();
    const usersData = usersResult.docs.map((user) => user.data());
    setUsers(usersData);
  };

  useEffect(() => {
    fetchUsers();
  });

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
            <div
              className="textprofilePageUsersNameContainer"
              >
              <p className="profilePage__usersName">
                {users.find((user) => user.fullname)}
              </p>
            </div>
            <div
              className="profilePageUsersEmailContainer"
            >
              <p className="profilePage__usersEmail">
                {users.find((user) => user.email)}
              </p>
            </div>
            <div
              className="profilePageUsersAgeContainer"
            >
              <p className="profilePage__usersAge">
                {users.find((user) => user.age)}
              </p>
            </div>
          </div>
        </Sider>
        <Content>
          <Col
            className="profilePageWelcomeUserContainer"
            span={8}
            offset={12}
          >
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
