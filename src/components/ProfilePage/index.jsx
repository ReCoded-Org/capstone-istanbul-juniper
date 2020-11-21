import React, { useState, useEffect, useContext } from "react";
import GamesCarousel from "../GamesCarousel";
import { useTranslation } from "react-i18next";
import "./index.css";
import { Col, Layout } from "antd";
import profilePageImg from "../../images/profilePage/profilePageImg.png";
import db from "../../firebaseConfig";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../auth/authContext";

const { Sider, Content } = Layout;
const ProfilePage = () => {
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser ? currentUser.uid : null;
  const [user, setUser] = useState([]);
  const ref = db.firestore().collection("users");

  const getUsers = () => {
    ref.where("uid", "==", currentUserId).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUser(items);
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
                <div>
                  <button onClick={() => deleteUser(user)}>X</button>
                </div>
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
